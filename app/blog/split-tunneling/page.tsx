import Link from "next/link";
import { ArrowLeft, Split, Network, Smartphone, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

const sections = [
  {
    icon: Split,
    title: "Что такое раздельное туннелирование?",
    items: [
      "Раздельное туннелирование (Split Tunneling) — это функция VPN, которая позволяет направлять часть трафика через зашифрованный VPN-туннель, а остальной трафик — напрямую в интернет, минуя VPN",
      "Обычно при включении VPN весь трафик устройства проходит через защищённый туннель. Split Tunneling нарушает это правило: вы сами решаете, какие приложения или сайты использовать через VPN, а какие — напрямую",
      "Представьте, что у вас два интернет-канала: один — защищённый и приватный (через VPN), второй — обычный, прямой. Split Tunneling — это переключатель, который направляет каждое приложение в нужный канал",
      "Технология особенно полезна, когда вам нужен VPN для одних задач (например, доступ к заблокированному сайту), но при этом вы хотите сохранить максимальную скорость для других (например, онлайн-игр)",
    ],
  },
  {
    icon: Network,
    title: "Как работает Split Tunneling?",
    items: [
      "Когда вы включаете VPN в обычном режиме, операционная система создаёт виртуальный сетевой интерфейс и перенаправляет через него весь трафик. Все пакеты шифруются и уходят на VPN-сервер",
      "При включённом Split Tunneling VPN-клиент анализирует, от какого приложения или к какому домену идёт запрос, и принимает решение: отправить трафик через зашифрованный туннель или напрямую",
      "Существует два подхода: «белый список» (в VPN идут только указанные приложения) и «чёрный список» (все приложения идут через VPN, кроме указанных)",
      "Маршрутизация происходит на уровне ядра ОС или через перехват системных вызовов — пользователь просто выбирает приложения в интерфейсе VPN-клиента, а всё остальное делается автоматически",
    ],
  },
  {
    icon: Smartphone,
    title: "Зачем нужно раздельное туннелирование?",
    items: [
      "Скорость: не весь трафик нужно шифровать. Загрузка фильмов, видеозвонки и онлайн-игры работают быстрее при прямом соединении — шифрование добавляет задержку и снижает пропускную способность",
      "Доступ к локальным устройствам: если вы в командировке и подключены к VPN, вы можете потерять доступ к локальному принтеру или сетевому диску в гостинице. Split Tunneling пускает локальный трафик напрямую",
      "Экономия трафика: шифрованный туннель добавляет накладные расходы — каждый пакет становится больше. Для ограниченных тарифов это может быть критично, если вы качаете большие файлы",
      "Совместимость: некоторые корпоративные системы и банковские приложения блокируются, если видят, что соединение идёт через VPN. Сплит-туннелирование позволяет таким приложениям работать напрямую",
      "Одновременная работа: вы можете сидеть в Telegram через VPN (для приватности) и одновременно играть в онлайн-шутер с минимальным пингом через прямое подключение",
    ],
  },
  {
    icon: Shuffle,
    title: "Примеры использования",
    items: [
      "Онлайн-игры: игровой трафик критичен к задержкам. Настройте Steam и вашу любимую игру на прямое подключение, а браузер оставьте через VPN — и скорость, и приватность",
      "Стриминговые сервисы: Netflix или YouTube могут ограничивать скорость при VPN. Направьте их трафик напрямую, а торренты и мессенджеры — через защищённый туннель",
      "Работа и личное: корпоративный ноутбук подключён к рабочему VPN, но вам нужно распечатать документ на локальном принтере. Split Tunneling отправляет запрос на принтер напрямую, не замедляя рабочие процессы",
      "Путешествия: вы в стране с интернет-цензурой. Через VPN открываете заблокированные соцсети и новости, а локальные сервисы (такси, карты, доставка еды) работают напрямую для максимальной скорости",
      "Торренты через VPN, серфинг напрямую: многие пользователи направляют только торрент-трафик через VPN для анонимности, а обычный веб-сёрфинг оставляют прямым — это снижает нагрузку на VPN-сервер и повышает отзывчивость",
    ],
  },
];

export default function SplitTunnelingPage() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 h-60 w-60 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-14 space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-background/50 backdrop-blur-sm">
                <Split className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Раздельное туннелирование
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Что такое Split Tunneling, как он работает и почему вам стоит
              настроить одни приложения через VPN, а другие — напрямую
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const gradients = [
              "linear-gradient(135deg, #06b6d4, #3b82f6)",
              "linear-gradient(135deg, #34d399, #14b8a6)",
              "linear-gradient(135deg, #a855f7, #ec4899)",
              "linear-gradient(135deg, #f97316, #fbbf24)",
            ];
            const iconGradients = [
              "from-cyan-400 to-blue-500",
              "from-emerald-400 to-teal-500",
              "from-purple-400 to-pink-500",
              "from-orange-400 to-amber-400",
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
