"use client";

import { Check, Star } from "lucide-react";
import { tariffs, type Tariff } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

function TariffCard({ tariff, index }: { tariff: Tariff; index: number }) {
  return (
    <div
      className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700"
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: "both",
      }}
    >
      {/* glow-рамка для рекомендуемого тарифа */}
      {tariff.recommended && (
        <div
          className="absolute -inset-[2px] rounded-2xl opacity-40 blur-lg"
          style={{
            background: `linear-gradient(135deg, ${tariff.accentColor}, #ec4899)`,
          }}
        />
      )}

      <div
        className={`relative flex flex-col rounded-xl border bg-card backdrop-blur-sm transition-all duration-300 ${
          tariff.recommended
            ? "border-transparent shadow-lg shadow-purple-500/10 scale-[1.02]"
            : "border-border/50 group-hover:border-transparent"
        }`}
      >
        {/* glow на hover для нерекомендуемых */}
        {!tariff.recommended && (
          <div
            className="absolute -inset-[1px] rounded-xl bg-gradient-to-br opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `linear-gradient(135deg, ${tariff.accentColor}, transparent)`,
            }}
          />
        )}

        <div className="relative z-10 flex flex-col p-6">
          {/* Бейдж */}
          {tariff.badge && (
            <div className="mb-4">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 gap-1">
                <Star className="h-3 w-3" />
                {tariff.badge}
              </Badge>
            </div>
          )}

          {/* Название */}
          <h3 className="text-xl font-bold tracking-tight">{tariff.title}</h3>

          {/* Описание */}
          <p className="mt-1 text-sm text-muted-foreground">
            {tariff.description}
          </p>

          {/* Цена */}
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight">
              {tariff.price}
            </span>
            {tariff.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {tariff.originalPrice}
              </span>
            )}
          </div>
          {tariff.period && (
            <p className="mt-1 text-xs text-muted-foreground">
              {tariff.period}
            </p>
          )}

          {/* Список возможностей */}
          <ul className="mt-6 space-y-3">
            {tariff.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: `${tariff.accentColor}20`,
                  }}
                >
                  <Check
                    className="h-3 w-3"
                    style={{ color: tariff.accentColor }}
                  />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute top-1/3 -left-40 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Выбери свой тариф
            </span>
          </h2>
          <p className="text-muted-foreground">
            Прозрачные цены без скрытых платежей. Отключиться можно в любой
            момент
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl gap-8 sm:grid-cols-2 items-start">
          {tariffs.map((tariff, index) => (
            <TariffCard key={tariff.title} tariff={tariff} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
