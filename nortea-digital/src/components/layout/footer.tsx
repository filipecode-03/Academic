import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { CurrentYear } from "@/components/ui/current-year";
import { navigation, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-forest-black pb-8 text-natural">
      <div className="page-shell border-t border-natural/15 pt-10">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-6 text-natural/60">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <p className="mb-5 text-sm text-natural/45">Navegação</p>
            <ul className="grid gap-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a className="hover:text-mist" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-sm text-natural/45">Contato e redes</p>
            <ul className="grid gap-3 text-sm text-natural/75">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.whatsapp}</li>
              <li>{siteConfig.contact.linkedin}</li>
              <li>{siteConfig.contact.instagram}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-natural/15 pt-7 text-xs text-natural/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© <CurrentYear /> Nortea Digital. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href={siteConfig.legal.privacy} className="hover:text-natural">Política de Privacidade</Link>
            <Link href={siteConfig.legal.terms} className="hover:text-natural">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
