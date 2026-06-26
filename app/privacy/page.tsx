import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

const sections = [
  {
    icon: Database,
    title: "Какие данные мы собираем",
    items: [
      "Адрес электронной почты — для создания и управления учётной записью",
      "Дата и время подключения — исключительно для технической поддержки и устранения неполадок",
      "Объём переданного трафика (без анализа содержимого) — для статистики использования",
      "Анонимные метрики производительности — для улучшения качества сервиса",
    ],
  },
  {
    icon: Eye,
    title: "Как мы используем данные",
    items: [
      "Обеспечение работы VPN-сервиса и техническая поддержка",
      "Улучшение производительности и стабильности серверов",
      "Предотвращение злоупотреблений и соблюдение законодательства",
      "Информирование об изменениях в сервисе (только с вашего согласия)",
    ],
  },
  {
    icon: Lock,
    title: "Как мы храним данные",
    items: [
      "Все данные хранятся в зашифрованном виде на защищённых серверах",
      "Строгая политика отсутствия логов — мы НЕ храним историю подключений, IP-адреса или активность",
      "Доступ к данным ограничен минимальным кругом сотрудников",
      "Регулярный аудит систем безопасности",
    ],
  },
  {
    icon: UserCheck,
    title: "Ваши права",
    items: [
      "Право на доступ к своим персональным данным",
      "Право на удаление учётной записи и всех связанных данных",
      "Право на отказ от сбора анонимных метрик",
      "Право на получение информации об обработке ваших данных",
    ],
  },
];

export default function PrivacyPage() {
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
                Политика конфиденциальности
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Мы серьёзно относимся к вашей приватности. Ниже подробно описано,
              какие данные мы собираем и как их используем.
            </p>
          </div>
        </div>

        {/* Разделы */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
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
                <div className="relative rounded-xl border border-border/50 bg-card p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-transparent sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br blur-xl opacity-50 ${
                          index === 0
                            ? "from-cyan-400 to-blue-500"
                            : index === 1
                              ? "from-purple-400 to-pink-500"
                              : index === 2
                                ? "from-emerald-400 to-teal-500"
                                : "from-amber-400 to-orange-500"
                        }`}
                      />
                      <div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-xl border bg-background/80 backdrop-blur-sm bg-gradient-to-br ${
                          index === 0
                            ? "from-cyan-400 to-blue-500"
                            : index === 1
                              ? "from-purple-400 to-pink-500"
                              : index === 2
                                ? "from-emerald-400 to-teal-500"
                                : "from-amber-400 to-orange-500"
                        }`}
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
