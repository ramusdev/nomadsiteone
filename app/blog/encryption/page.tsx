import Link from "next/link";
import { ArrowLeft, Lock, Key, Fingerprint, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

const sections = [
  {
    icon: Lock,
    title: "Что такое шифрование?",
    items: [
      "Шифрование — это процесс преобразования информации в такой вид, который не могут прочитать посторонние. Представьте, что вы пишете письмо секретным кодом, который знаете только вы и ваш друг",
      "Исходные данные (открытый текст) превращаются в зашифрованный текст (шифротекст) с помощью специального алгоритма и ключа. Без ключа прочитать информацию невозможно",
      "Шифрование используется повсеместно: от защищённого соединения с сайтом (HTTPS) до сообщений в мессенджерах и онлайн-банкинга",
      "Современное шифрование настолько надёжно, что для взлома некоторых алгоритмов потребовались бы миллиарды лет даже с использованием самых мощных суперкомпьютеров",
    ],
  },
  {
    icon: Key,
    title: "Как работает шифрование?",
    items: [
      "Шифрование работает по принципу замка и ключа: алгоритм шифрования — это механизм замка, а ключ — это уникальная комбинация, которая открывает доступ к данным",
      "Когда вы отправляете сообщение, специальный алгоритм перемешивает данные по сложной математической формуле, делая их нечитаемыми для посторонних",
      "Получатель использует ключ для расшифровки — обратного преобразования шифротекста в исходное сообщение. Без правильного ключа расшифровка практически невозможна",
      "Надёжность шифрования зависит от длины ключа и сложности алгоритма. Современные стандарты используют ключи длиной от 128 до 4096 бит",
    ],
  },
  {
    icon: Fingerprint,
    title: "Виды шифрования",
    items: [
      "Симметричное шифрование: один и тот же ключ используется и для шифрования, и для расшифровки. Быстро и эффективно, но нужно безопасно передать ключ собеседнику. Пример: AES",
      "Асимметричное шифрование: используются два разных ключа — открытый (публичный) для шифрования и закрытый (приватный) для расшифровки. Открытый ключ можно передавать по незащищённому каналу. Пример: RSA",
      "Хеширование: одностороннее преобразование данных в уникальную строку фиксированной длины. Обратно восстановить исходные данные невозможно. Используется для хранения паролей и проверки целостности файлов",
      "Сквозное шифрование (End-to-End): данные шифруются на устройстве отправителя и расшифровываются только на устройстве получателя. Даже сервер-посредник не может прочитать содержимое. Используется в Telegram, WhatsApp и Signal",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Зачем нужно шифрование?",
    items: [
      "Защита личных данных: пароли, номера банковских карт, паспортные данные и другая конфиденциальная информация остаются в безопасности даже при перехвате",
      "Приватность переписки: никто — ни провайдер, ни хакеры, ни государственные органы — не сможет прочитать ваши личные сообщения и файлы",
      "Безопасность платежей: при оплате в интернете шифрование гарантирует, что данные вашей карты не будут украдены при передаче на сервер магазина",
      "Защита от подделок: шифрование и цифровые подписи позволяют убедиться, что файл или сообщение не были изменены в процессе передачи",
      "Конфиденциальность бизнеса: компании шифруют свою переписку и документы, чтобы защитить коммерческую тайну и интеллектуальную собственность",
    ],
  },
];

export default function EncryptionPage() {
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
      <div className="absolute top-1/2 right-1/4 h-60 w-60 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-14 space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-background/50 backdrop-blur-sm">
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Как работает шифрование?
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Простое объяснение технологии шифрования: что это такое, как оно
              защищает ваши данные и какие виды шифрования существуют
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
