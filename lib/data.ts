export const siteConfig = {
  name: "Nomad VPN",
  slogan: "Безопасный интернет без границ",
  description:
    "Молниеносное шифрование трафика, полная анонимность и доступ к любому контенту в один клик. Твой цифровой щит в мире защита и безопасность.",
  cta: "Скачать в Google Play",
  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=com.rg.nomadvpnne",
} as const;

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Tariff {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  recommended?: boolean;
  badge?: string;
  accentColor: string;
  period?: string;
}

export const tariffs: Tariff[] = [
  {
    title: "Демо",
    price: "1 ₽",
    description: "Ознакомительный тариф с базовыми возможностями",
    features: [
      "до 100 Мбит/с",
      "30 серверов в 20 странах",
      "AES-256 шифрование",
      "Kill Switch",
      "Одно устройство",
    ],
    accentColor: "#06b6d4",
    period: "разово",
  },
  {
    title: "Полный",
    price: "199 ₽",
    description: "Все возможности сервиса без ограничений",
    features: [
      "до 1 Гбит/с",
      "87 серверов в 40 странах",
      "AES-256 шифрование",
      "Kill Switch",
      "Без логов",
      "До 5 устройств",
      "Приоритетная поддержка 24/7",
    ],
    recommended: true,
    badge: "Рекомендуем",
    accentColor: "#a855f7",
    period: "в месяц",
  },
];

export const benefits: Benefit[] = [
  {
    title: "Молниеносная скорость",
    description:
      "Свыше 1 Гбит/с на любом сервере. Оптимизированные протоколы для стриминга, игр и загрузок без буферизации.",
    icon: "Zap",
  },
  {
    title: "Шифрование",
    description:
      "AES-256 шифрование твоих данных на всех устройствах. Надёжная защита от перехвата и несанкционированного доступа.",
    icon: "ShieldCheck",
  },
  {
    title: "Строгая политика без логов",
    description:
      "Мы не храним историю твоих подключений, IP-адреса и активность. Полная анонимность гарантирована.",
    icon: "EyeOff",
  },
  {
    title: "87 серверов в 40 странах",
    description:
      "Глобальная сеть для шифрования данных и доступа к контенту из любой точки мира. Новые локации каждый месяц.",
    icon: "Globe",
  },
];
