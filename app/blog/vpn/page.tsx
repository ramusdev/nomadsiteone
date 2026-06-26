import Link from "next/link";
import { ArrowLeft, Shield, Globe, Lock, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

const sections = [
  {
    icon: Shield,
    title: "Что такое VPN?",
    items: [
      "VPN (Virtual Private Network) — это технология, которая создаёт защищённое зашифрованное соединение между вашим устройством и интернетом",
      "Представьте себе защищённый туннель: все данные, которые вы отправляете и получаете, проходят через этот туннель в зашифрованном виде",
      "Ваш реальный IP-адрес заменяется IP-адресом VPN-сервера, что делает вашу активность в сети анонимной",
      "VPN защищает ваши данные даже при использовании публичных Wi-Fi сетей — в кафе, аэропортах или отелях",
    ],
  },
  {
    icon: Server,
    title: "Как работает VPN?",
    items: [
      "Вы подключаетесь к VPN-серверу через специальное приложение или настройки устройства",
      "VPN-клиент на вашем устройстве шифрует все исходящие данные перед отправкой в интернет",
      "Зашифрованные данные поступают на VPN-сервер, который расшифровывает их и отправляет к конечному сайту или сервису",
      "Ответ от сайта возвращается на VPN-сервер, снова шифруется и передаётся обратно на ваше устройство",
      "Весь процесс происходит за доли секунды и незаметен для пользователя",
    ],
  },
  {
    icon: Lock,
    title: "Зачем нужен VPN?",
    items: [
      "Безопасность в публичных сетях: защита от перехвата данных в открытых Wi-Fi сетях",
      "Приватность и анонимность: скрытие вашего реального IP-адреса и местоположения",
      "Доступ к контенту: обход региональных блокировок и ограничений",
      "Защита от отслеживания: ваш интернет-провайдер не видит, какие сайты вы посещаете",
      "Безопасные онлайн-платежи: дополнительный уровень защиты при оплатах в интернете",
    ],
  },
  {
    icon: Globe,
    title: "Когда особенно полезен VPN?",
    items: [
      "Работа из дома или удалённых локаций — безопасный доступ к корпоративным ресурсам",
      "Путешествия — защита в отельных и аэропортовых Wi-Fi сетях",
      "Обход региональных ограничений стриминговых сервисов и социальных сетей",
      "Защита от DPI (Deep Packet Inspection) со стороны интернет-провайдера",
    ],
  },
];

export default function VpnPage() {
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
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Что такое VPN?
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Простое объяснение сложной технологии: как работает VPN, зачем он
              нужен и как защищает ваши данные в интернете
            </p>
          </div>
        </div>

        {/* Разделы */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const gradients = [
              "linear-gradient(135deg, #06b6d4, #3b82f6)",
              "linear-gradient(135deg, #34d399, #14b8a6)",
              "linear-gradient(135deg, #a855f7, #ec4899)",
              "linear-gradient(135deg, #fbbf24, #f97316)",
            ];
            const iconGradients = [
              "from-cyan-400 to-blue-500",
              "from-emerald-400 to-teal-500",
              "from-purple-400 to-pink-500",
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
