"use server";

import { z } from "zod";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
};

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const contactSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Please enter a valid email address."),
  interest: z.string().min(1, "Please select an interest."),
  message: z.string().min(10, "Please share a bit more detail (at least 10 characters)."),
});

const partnerSchema = z.object({
  name: z.string().min(2, "Name is required."),
  organization: z.string().min(2, "Organization is required."),
  email: z.string().email("Please enter a valid email address."),
  interest: z.string().min(1, "Please select a partnership interest."),
  message: z.string().min(10, "Please share your goals (at least 10 characters)."),
});

const joinSchema = z.object({
  firstName: z.string().min(2, "First name is required."),
  lastName: z.string().min(2, "Last name is required."),
  email: z.string().email("Please enter a valid email address."),
  audience: z.string().min(1, "Please select how you connect with the movement."),
  message: z.string().optional(),
});

async function maybeForward(kind: string, payload: Record<string, unknown>) {
  const endpoint = process.env.LEAD_WEBHOOK_URL;
  if (!endpoint) {
    return { delivered: false, reason: "No LEAD_WEBHOOK_URL configured." };
  }
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, payload, submittedAt: new Date().toISOString() }),
      cache: "no-store",
    });
    if (!res.ok) return { delivered: false, reason: `Webhook responded with ${res.status}.` };
    return { delivered: true as const };
  } catch {
    return { delivered: false, reason: "Webhook request failed." };
  }
}

function formatErrors(error: z.ZodError) {
  return error.flatten().fieldErrors as Record<string, string[]>;
}

export async function submitNewsletter(_: FormState, formData: FormData): Promise<FormState> {
  const parsed = emailSchema.safeParse({ email: formData.get("email") });
  if (!parsed.success) return { status: "error", message: "Please check your email address.", errors: formatErrors(parsed.error) };
  const result = await maybeForward("newsletter", parsed.data);
  return result.delivered
    ? { status: "success", message: "Thank you for subscribing. Welcome to the movement." }
    : { status: "success", message: "Subscription received. External delivery is not configured in this environment yet; connect LEAD_WEBHOOK_URL to forward submissions automatically." };
}

export async function submitContact(_: FormState, formData: FormData): Promise<FormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    interest: formData.get("interest"),
    message: formData.get("message"),
  });
  if (!parsed.success) return { status: "error", message: "Please correct the highlighted fields.", errors: formatErrors(parsed.error) };
  const result = await maybeForward("contact", parsed.data);
  return result.delivered
    ? { status: "success", message: "Your message has been sent. We’ll be in touch with care." }
    : { status: "success", message: "Message received and validated. External delivery is not configured in this environment yet; connect LEAD_WEBHOOK_URL to forward inquiries." };
}

export async function submitPartner(_: FormState, formData: FormData): Promise<FormState> {
  const parsed = partnerSchema.safeParse({
    name: formData.get("name"),
    organization: formData.get("organization"),
    email: formData.get("email"),
    interest: formData.get("interest"),
    message: formData.get("message"),
  });
  if (!parsed.success) return { status: "error", message: "Please correct the highlighted fields.", errors: formatErrors(parsed.error) };
  const result = await maybeForward("partner", parsed.data);
  return result.delivered
    ? { status: "success", message: "Your partnership inquiry has been sent. We look forward to the conversation." }
    : { status: "success", message: "Partnership inquiry received and validated. External delivery is not configured in this environment yet; connect LEAD_WEBHOOK_URL to forward inquiries." };
}

export async function submitJoin(_: FormState, formData: FormData): Promise<FormState> {
  const parsed = joinSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    audience: formData.get("audience"),
    message: formData.get("message") || undefined,
  });
  if (!parsed.success) return { status: "error", message: "Please correct the highlighted fields.", errors: formatErrors(parsed.error) };
  const result = await maybeForward("join", parsed.data);
  return result.delivered
    ? { status: "success", message: "Welcome. Your request to join the movement has been received." }
    : { status: "success", message: "Join request received and validated. External delivery is not configured in this environment yet; connect LEAD_WEBHOOK_URL to forward submissions." };
}
