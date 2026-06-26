import Link from "next/link";
import { siteConfig } from "@/lib/data";

const articles = [
  { href: "/blog/vpn", label: "VPN" },
  { href: "/blog/ip-address", label: "IP-адрес" },
  { href: "/blog/dns", label: "DNS" },
  { href: "/blog/encryption", label: "Шифрование" },
  { href: "/blog/split-tunneling", label: "Раздельное туннелирование" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f595d] shadow-[0_0_14px] shadow-[#0f595d]/50">
                <span className="font-bold text-xl leading-none text-white">
                  N
                </span>
              </div>
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">
              Статьи
            </h3>
            <nav className="flex flex-col gap-2">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="text-sm text-muted-foreground hover:text-[#0f595d] transition-colors duration-200 hover:shadow-[0_0_8px] hover:shadow-[#0f595d]/30"
                >
                  {article.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">
              Скачать
            </h3>
            <nav className="flex flex-col gap-2">
              <a
                href={siteConfig.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-[#0f595d] transition-colors duration-200 hover:shadow-[0_0_8px] hover:shadow-[#0f595d]/30 inline-flex items-center gap-1.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.498 1.498 0 0 1 0 2.594zM1.337.924a1.474 1.474 0 0 0-.165.619v20.92c0 .223.058.437.165.62l11.36-11.08L1.337.924zm12.314 11.08l3.516-3.493L4.874.287C4.128-.108 3.28.034 2.716.63l10.935 11.374zm0 2.003L2.716 23.38c.564.596 1.412.737 2.158.343l10.293-5.824-3.516-3.492z" />
                </svg>
                Google Play
              </a>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-[#0f595d] transition-colors duration-200 hover:shadow-[0_0_8px] hover:shadow-[#0f595d]/30"
              >
                Политика конфиденциальности
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
