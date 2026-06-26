import Link from "next/link";
import { ArrowLeft, Globe, Network, Search, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

const sections = [
  {
    icon: Globe,
    title: "Что такое DNS?",
    items: [
      "DNS (Domain Name System) — это система доменных имён, которую часто называют «телефонной книгой интернета»",
      "Когда вы вводите в браузере адрес сайта, например google.com, DNS переводит это понятное человеку имя в IP-адрес, по которому компьютер может найти нужный сервер",
      "Вместо того чтобы запоминать числа вроде 142.250.185.46, вы просто используете доменные имена — DNS делает всю работу по сопоставлению",
      "DNS работает как распределённая база данных: информация хранится на множестве серверов по всему миру, а не в одном месте",
    ],
  },
  {
    icon: Network,
    title: "Как работает DNS?",
    items: [
      "Вы вводите адрес сайта в браузере — браузер сначала проверяет локальный кеш DNS на вашем устройстве",
      "Если записи в кеше нет, запрос отправляется к DNS-резолверу — обычно это сервер вашего интернет-провайдера",
      "Резолвер ищет запись у корневых DNS-серверов, которые знают, где находятся серверы доменов верхнего уровня (.com, .ru, .org и другие)",
      "Затем запрос проходит к серверу домена верхнего уровня, который указывает на авторитетный DNS-сервер, хранящий точную информацию о домене",
      "Авторитетный сервер возвращает IP-адрес, резолвер передаёт его браузеру — и сайт открывается. Весь процесс занимает миллисекунды",
    ],
  },
  {
    icon: Search,
    title: "Зачем нужен DNS?",
    items: [
      "Удобство для людей: доменные имена легко запомнить, в отличие от IP-адресов",
      "Масштабируемость: за одним доменным именем может стоять множество серверов, и DNS равномерно распределяет нагрузку",
      "Гибкость управления: при смене хостинга достаточно изменить DNS-запись, а не сообщать новый адрес всем пользователям",
      "Безопасность: современные технологии вроде DNSSEC защищают от подмены DNS-ответов и перенаправления на фальшивые сайты",
      "Балансировка: DNS может направлять пользователей на ближайший географически сервер для более быстрой загрузки",
    ],
  },
  {
    icon: Server,
    title: "Типы DNS-записей",
    items: [
      "A-запись (Address): связывает домен с IPv4-адресом — самая основная запись, без которой сайт не будет работать",
      "AAAA-запись: то же самое, но для IPv6-адресов — современный стандарт, необходимый для работы в IPv6-сетях",
      "CNAME (Canonical Name): псевдоним, позволяющий направить один домен на другой — например, www.example.com на example.com",
      "MX-запись (Mail Exchange): указывает, какой почтовый сервер обрабатывает электронную почту для домена",
      "TXT-запись: хранит текстовую информацию — используется для подтверждения владения доменом и настройки SPF/DKIM для почты",
      "NS-запись (Name Server): определяет, какие DNS-серверы являются авторитетными для данного домена",
    ],
  },
];

export default function DnsPage() {
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
      <div className="absolute top-1/3 right-1/4 h-60 w-60 rounded-full bg-emerald-500/10 blur-[100px]" />

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
                Что такое DNS?
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Простое объяснение системы доменных имён: как DNS переводит
              названия сайтов в IP-адреса и почему без него интернет был бы
              неузнаваем
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
