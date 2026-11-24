"use client";

import { useActionState } from "react";
import { submitNewsletter, type FormState } from "@/app/actions";
import { cn } from "@/lib/utils";

const initial: FormState = { status: "idle", message: "" };

export function NewsletterForm({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const [state, action, pending] = useActionState(submitNewsletter, initial);
  const dark = tone === "dark";
  return (
    <form action={action} className={cn("space-y-3", className)} noValidate>
      <label className="sr-only" htmlFor={`newsletter-${tone}`}>Email address</label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`newsletter-${tone}`}
          name="email"
          type="email"
          required
          placeholder="Email address"
          autoComplete="email"
          className={cn(
            "h-12 w-full rounded-full px-5 text-sm outline-none transition",
            dark
              ? "bg-white/10 text-white placeholder:text-white/45 border border-white/15 focus:border-gold"
              : "bg-white text-navy placeholder:text-muted border border-[var(--border-strong)] focus:border-navy",
          )}
        />
        <button
          type="submit"
          disabled={pending}
          className={cn(
            "h-12 shrink-0 rounded-full px-6 text-sm font-semibold transition disabled:opacity-60",
            dark ? "bg-gold text-navy hover:bg-gold-soft" : "bg-navy text-white hover:bg-navy-soft",
          )}
        >
          {pending ? "Sending..." : "Subscribe"}
        </button>
      </div>
      <p aria-live="polite" className={cn("text-xs leading-5", state.status === "error" ? "text-red-300" : dark ? "text-white/60" : "text-muted")}>
        {state.message || "We respect your inbox. No noise, just meaningful updates."}
      </p>
    </form>
  );
}
