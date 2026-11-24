"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions";
import { cn } from "@/lib/utils";

const initial: FormState = { status: "idle", message: "" };
const inputCls = "w-full rounded-xl border border-[var(--border-strong)] bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/80 focus:border-navy focus:outline-none";

function FieldError({ errors, name }: { errors?: Record<string, string[]>; name: string }) {
  const msg = errors?.[name]?.[0];
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-700">{msg}</p>;
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [state, action, pending] = useActionState(submitContact, initial);
  return (
    <form action={action} className="space-y-5" noValidate>
      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-navy">Name</label>
          <input id="contact-name" name="name" required autoComplete="name" className={inputCls} placeholder="Your name" />
          <FieldError errors={state.errors} name="name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-navy">Email</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@example.com" />
          <FieldError errors={state.errors} name="email" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-interest" className="mb-2 block text-sm font-medium text-navy">I’m reaching out about</label>
        <select id="contact-interest" name="interest" required className={inputCls} defaultValue="">
          <option value="" disabled>Select an option</option>
          <option>Joining the movement</option>
          <option>Programs & membership</option>
          <option>Events</option>
          <option>Partnerships</option>
          <option>Media or speaking</option>
          <option>Something else</option>
        </select>
        <FieldError errors={state.errors} name="interest" />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-navy">Message</label>
        <textarea id="contact-message" name="message" required rows={5} className={inputCls} placeholder="Tell us what you’re looking for..." />
        <FieldError errors={state.errors} name="message" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={pending} className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-7 text-sm font-semibold text-white transition hover:bg-navy-soft disabled:opacity-60">
          {pending ? "Sending..." : "Send Message"}
        </button>
        <p aria-live="polite" className={cn("text-sm", state.status === "error" ? "text-red-700" : "text-muted")}>{state.message}</p>
      </div>
    </form>
  );
}
