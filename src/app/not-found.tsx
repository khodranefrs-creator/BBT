import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-pad bg-surface min-h-[60vh] flex items-center">
      <div className="container-shell text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-5 font-serif text-5xl sm:text-6xl text-navy">This page has moved on.</h1>
        <p className="mt-6 mx-auto max-w-xl text-base leading-8 text-muted">The page you’re looking for doesn’t exist or may have been moved. Let’s get you back to the movement.</p>
        <div className="mt-10 flex justify-center gap-4">
          <Button href="/">Go Home</Button>
          <Button href="/contact" variant="secondary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
