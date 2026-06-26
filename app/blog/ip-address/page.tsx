import Link from "next/link";
import { ArrowLeft, Globe, Waypoints, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

const sections = [
  {
    icon: Globe,
    title: "Что такое IP-адрес?",
    items: [
      "IP-адрес (Internet Protocol address) — это уникальный числовой идентификатор устройства в сети интернет",
      "Представьте, что интернет — это огромный город, а IP-адрес — адрес вашего дома. Чтобы отправить вам письмо, нужно знать ваш адрес",
      "Каждое устройство — компьютер, смартфон, сервер — получает свой IP-адрес для обмена данными в сети",
      "Без IP-адресов устройства не смогли бы находить друг друга и обмениваться информацией",
    ],
  },
  {
    icon: Waypoints,
    title: "IPv4 и IPv6 — в чём разница?",
    items: [
      "IPv4 — это четвёртая версия протокола, которая использует 32-битные адреса (например, 192.168.1.1). Всего существует около 4,3 миллиардов адресов",
      "Из-за взрывного роста устройств адресов IPv4 стало не хватать — их разобрали ещё в 2011 году",
      "IPv6 — новая версия с 128-битными адресами (например, 2001:db8::1). Количество адресов IPv6 — 340 ундециллионов — это на每个 атом на поверхности Земли",
      "IPv6 внедряется постепенно, и сейчас большинство сайтов работают одновременно на обеих версиях (dual-stack)",
      "В России и мире интернет-провайдеры постепенно переходят на IPv6, но IPv4 пока остаётся основным",
    ],
  },
  {
    icon: MapPin,
    title: "Зачем нужен IP-адрес?",
    items: [
      "Идентификация: IP-адрес позволяет однозначно определить устройство в сети и направлять данные именно ему",
      "Маршрутизация: интернет-маршрутизаторы используют IP-адреса, чтобы передавать пакеты данных по оптимальному пути от отправителя к получателю",
      "Геолокация: по IP-адресу можно примерно определить местоположение устройства — город или регион",
      "Безопасность: IP-адреса используются для блокировки нежелательного трафика и защиты от атак",
    ],
  },
  {
    icon: Search,
    title: "Как узнать свой IP-адрес?",
    items: [
      "Самый простой способ — ввести в поиске Яндекса или Google запрос «какой у меня IP»",
      "На Windows: откройте командную строку и введите ipconfig",
      "На macOS и Linux: откройте терминал и введите ifconfig или ip addr",
      "Ваш внешний (публичный) IP-адрес можно увидеть на сайтах типа 2ip.ru или ifconfig.me",
    ],
  },
];

export default function IpAddressPage() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-16">
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
      <div className="absolute top-1/2 left-1/3 h-60 w-60 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Шапка страницы */}
        <div className="mb-14 space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-background/50 backdrop-blur-sm">
                <Globe className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Что такое IP-адрес?
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Простое объяснение: что такое IP-адрес, чем отличаются IPv4 и IPv6
              и зачем он нужен каждому устройству в интернете
            </p>
          </div>
        </div>

        {/* Разделы */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const gradients = [
              "linear-gradient(135deg, #06b6d4, #3b82f6)",
              "linear-gradient(135deg, #a855f7, #ec4899)",
              "linear-gradient(135deg, #34d399, #14b8a6)",
              "linear-gradient(135deg, #fbbf24, #f97316)",
            ];
            const iconGradients = [
              "from-cyan-400 to-blue-500",
              "from-purple-400 to-pink-500",
              "from-emerald-400 to-teal-500",
              "from-amber-400 to-orange-500",
            ];

            return (
              <div
                key={section.title}
                className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "both",
                }}
              >
                <div
                  className="absolute -inset-[1px] rounded-xl bg-gradient-to-br opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: gradients[index],
                  }}
                />
                <div className="relative rounded-xl border border-border/50 bg-card p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-transparent sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br blur-xl opacity-50 ${iconGradients[index]}`}
                      />
                      <div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-xl border bg-background/80 backdrop-blur-sm bg-gradient-to-br ${iconGradients[index]}`}
                        style={{ borderColor: "transparent" }}
                      >
                        <div className="absolute inset-0 rounded-xl bg-background/80" />
                        <Icon className="relative h-6 w-6 text-foreground" />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-semibold tracking-tight mb-3">
                        {section.title}
                      </h2>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Кнопка «На главную» */}
        <div className="mt-14 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "gap-2 group text-base h-12 px-8"
            )}
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            На главную
          </Link>
        </div>
      </div>
    </section>
  );
}
