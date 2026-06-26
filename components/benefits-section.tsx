"use client";

import { Zap, ShieldCheck, EyeOff, Globe, type LucideIcon } from "lucide-react";
import { benefits, type Benefit } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  EyeOff,
  Globe,
};

const neonAccentColors = [
  "from-cyan-400 to-blue-500",
  "from-purple-400 to-pink-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
];

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const Icon = iconMap[benefit.icon];
  const gradient = neonAccentColors[index % neonAccentColors.length];

  return (
    <div
      className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700"
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
    >
      <div
        className="absolute -inset-[1px] rounded-xl bg-gradient-to-br opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            index === 0
              ? "linear-gradient(135deg, #06b6d4, #3b82f6)"
              : index === 1
                ? "linear-gradient(135deg, #a855f7, #ec4899)"
                : index === 2
                  ? "linear-gradient(135deg, #34d399, #14b8a6)"
                  : "linear-gradient(135deg, #fbbf24, #f97316)",
        }}
      />
      <div className="relative flex flex-col items-center gap-4 rounded-xl border border-border/50 bg-card p-8 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-transparent">
        {/* Иконка с неоновым свечением */}
        <div className="relative">
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} blur-xl opacity-50`}
          />
          <div
            className={`relative flex h-14 w-14 items-center justify-center rounded-xl border bg-background/80 backdrop-blur-sm bg-gradient-to-br ${gradient} bg-clip-border`}
            style={{ borderColor: "transparent" }}
          >
            <div className="absolute inset-0 rounded-xl bg-background/80" />
            {Icon && <Icon className="relative h-7 w-7 text-foreground" />}
          </div>
        </div>

        {/* Заголовок */}
        <h3 className="text-lg font-semibold tracking-tight">
          {benefit.title}
        </h3>

        {/* Описание */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Декоративные неоновые круги */}
      <div className="absolute top-1/2 -left-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Заголовок секции */}
        <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Почему выбирают Nomad VPN
            </span>
          </h2>
          <p className="text-muted-foreground">
            Мы создали сервис, которому доверяют миллионы пользователей по всему
            миру
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
