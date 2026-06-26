import { createFileRoute } from "@tanstack/react-router";
import heroIceland from "@/assets/hero-iceland-afternoon.jpg";
import { socials } from "@/config/socials";
import { icons } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marcus Thorne — Senior Cloud Architect" },
      {
        name: "description",
        content:
          "Senior Cloud Architect. Find me on LinkedIn, Credly, and beyond.",
      },
      { property: "og:title", content: "Marcus Thorne — Senior Cloud Architect" },
      {
        property: "og:description",
        content: "Senior Cloud Architect. Find me on LinkedIn, Credly, and beyond.",
      },
      { property: "og:image", content: heroIceland },
      { name: "twitter:image", content: heroIceland },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground font-sans selection:bg-accent/30">
      {/* Background landscape */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroIceland}
          alt="Icelandic mountain range lit by late afternoon sun"
          width={1920}
          height={1080}
          className="w-full h-full object-cover parallax-drift"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Card */}
      <section className="relative z-10 w-full max-w-lg mx-auto px-6">
        <div className="bg-surface/40 backdrop-blur-xl p-8 sm:p-12 rounded-2xl ring-1 ring-border fade-up text-center">
          <p className="font-serif italic text-lg text-foreground/80 mb-3">
            Senior Cloud Architect
          </p>
          <h1 className="text-4xl sm:text-5xl text-foreground font-medium tracking-tight mb-10">
            Marcus Thorne
          </h1>

          <nav className="flex flex-col gap-3">
            {socials.map((s) => {
              const Icon = icons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between px-5 py-3.5 rounded-lg bg-surface/60 ring-1 ring-border text-sm text-foreground hover:bg-surface-elevated hover:ring-accent/40 transition-all"
                >
                  <span className="flex items-center gap-3 uppercase tracking-[0.15em] text-xs">
                    <Icon size={18} className="text-muted group-hover:text-accent transition-colors" />
                    {s.label}
                  </span>
                  <span
                    aria-hidden
                    className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all"
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.25em] text-muted/70">
          © {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
