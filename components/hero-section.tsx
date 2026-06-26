"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden px-4">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Сетка */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Декоративные неоновые круги */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Иконка */}
        <div className="inline-flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#0f595d]/30 bg-[#0f595d] shadow-[0_0_20px] shadow-[#0f595d]/40">
              <span className="text-6xl font-bold leading-none text-white">
                N
              </span>
            </div>
          </div>
        </div>

        {/* Заголовок */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground sm:text-2xl max-w-2xl mx-auto">
            {siteConfig.slogan}
          </p>
        </div>

        {/* Описание */}
        <p className="text-base text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
          {siteConfig.description}
        </p>

        {/* CTA — ссылка на Google Play */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={siteConfig.googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gap-2 text-base h-12 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-[0_0_20px_oklch(0.6_0.18_264/0.4)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.498 1.498 0 0 1 0 2.594zM1.337.924a1.474 1.474 0 0 0-.165.619v20.92c0 .223.058.437.165.62l11.36-11.08L1.337.924zm12.314 11.08l3.516-3.493L4.874.287C4.128-.108 3.28.034 2.716.63l10.935 11.374zm0 2.003L2.716 23.38c.564.596 1.412.737 2.158.343l10.293-5.824-3.516-3.492z" />
              </svg>
              {siteConfig.cta}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
