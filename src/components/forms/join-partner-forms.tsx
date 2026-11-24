"use client";

import { useActionState } from "react";
import { submitJoin, submitPartner, type FormState } from "@/app/actions";
import { cn } from "@/lib/utils";

const initial: FormState = { status: "idle", message: "" };
const inputCls = "w-full rounded-xl border border-[var(--border-strong)] bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/80 focus:border-navy focus:outline-none";

function FieldError({ errors, name }: { errors?: Record<string, string[]>; name: string }) {
  const msg = errors?.[name]?.[0];
  return msg ? <p className="mt-1 text-xs text-red-700">{msg}</p> : null;
}

export function JoinForm() {
  const [state, action, pending] = useActionState(submitJoin, initial);
  return (
    <form action={action} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="join-first" className="mb-2 block text-sm font-medium text-navy">First name</label>
          <input id="join-first" name="firstName" required autoComplete="given-name" className={inputCls} />
          <FieldError errors={state.errors} name="firstName" />
        </div>
        <div>
          <label htmlFor="join-last" className="mb-2 block text-sm font-medium text-navy">Last name</label>
          <input id="join-last" name="lastName" required autoComplete="family-name" className={inputCls} />
          <FieldError errors={state.errors} name="lastName" />
        </div>
      </div>
      <div>
        <label htmlFor="join-email" className="mb-2 block text-sm font-medium text-navy">Email</label>
        <input id="join-email" name="email" type="email" required autoComplete="email" className={inputCls} />
        <FieldError errors={state.errors} name="email" />
      </div>
      <div>
        <label htmlFor="join-audience" className="mb-2 block text-sm font-medium text-navy">I connect most as a...</label>
        <select id="join-audience" name="audience" required className={inputCls} defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Woman leader or entrepreneur</option>
          <option>Veteran or veteran ally</option>
          <option>Entrepreneur or business builder</option>
          <option>Community leader or advocate</option>
          <option>Partner or supporter</option>
        </select>
        <FieldError errors={state.errors} name="audience" />
      </div>
      <div>
        <label htmlFor="join-message" className="mb-2 block text-sm font-medium text-navy">What are you hoping to build? <span className="text-muted">(optional)</span></label>
        <textarea id="join-message" name="message" rows={4} className={inputCls} placeholder="Share your goals or what brought you here." />
      </div>
      <p className="text-xs leading-5 text-muted">By submitting, you agree to be contacted about Building the Bond programs and updates. Your information is handled with care.</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={pending} className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-navy transition hover:bg-gold-soft disabled:opacity-60">
          {pending ? "Joining..." : "Join the Movement"}
        </button>
        <p aria-live="polite" className={cn("text-sm", state.status === "error" ? "text-red-700" : "text-muted")}>{state.message}</p>
      </div>
    </form>
  );
}

export function PartnerForm() {
  const [state, action, pending] = useActionState(submitPartner, initial);
  return (
    <form action={action} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className="mb-2 block text-sm font-medium text-navy">Name</label>
          <input id="partner-name" name="name" required autoComplete="name" className={inputCls} />
          <FieldError errors={state.errors} name="name" />
        </div>
        <div>
          <label htmlFor="partner-org" className="mb-2 block text-sm font-medium text-navy">Organization</label>
          <input id="partner-org" name="organization" required autoComplete="organization" className={inputCls} />
          <FieldError errors={state.errors} name="organization" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-email" className="mb-2 block text-sm font-medium text-navy">Work email</label>
          <input id="partner-email" name="email" type="email" required autoComplete="email" className={inputCls} />
          <FieldError errors={state.errors} name="email" />
        </div>
        <div>
          <label htmlFor="partner-interest" className="mb-2 block text-sm font-medium text-navy">Partnership interest</label>
          <select id="partner-interest" name="interest" required className={inputCls} defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Event sponsorship</option>
            <option>Program support</option>
            <option>Scholarship or veteran initiative</option>
            <option>Strategic partnership</option>
            <option>Other</option>
          </select>
          <FieldError errors={state.errors} name="interest" />
        </div>
      </div>
      <div>
        <label htmlFor="partner-message" className="mb-2 block text-sm font-medium text-navy">What impact do you want to create?</label>
        <textarea id="partner-message" name="message" rows={5} className={inputCls} placeholder="Share your goals, timeline, or questions." />
        <FieldError errors={state.errors} name="message" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={pending} className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-7 text-sm font-semibold text-white transition hover:bg-navy-soft disabled:opacity-60">
          {pending ? "Sending..." : "Start a Partnership Conversation"}
        </button>
        <p aria-live="polite" className={cn("text-sm", state.status === "error" ? "text-red-700" : "text-muted")}>{state.message}</p>
      </div>
    </form>
  );
}
