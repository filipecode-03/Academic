import { ContactForm } from "@/components/sections/contact-form";
import { isPlaceholder, siteConfig } from "@/config/site";

export function Contact() {
  const whatsappConfigured = !isPlaceholder(siteConfig.contact.whatsapp);
  const emailConfigured = !isPlaceholder(siteConfig.contact.email);

  return (
    <section id="contato" className="section-space bg-forest-black text-natural">
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="text-sm text-moss">07 / Contato</p>
            <h2 className="mt-6 font-display text-balance text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-7xl">
              Tem um projeto em mente? Vamos encontrar a melhor direção.
            </h2>
            <p className="mt-8 max-w-lg text-pretty text-lg leading-8 text-natural/65">
              Compartilhe o contexto, a necessidade e o momento do seu negócio. A conversa começa com o que precisa fazer sentido para você.
            </p>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={whatsappConfigured ? siteConfig.contact.whatsapp : "#formulario-contato"}
                className="border border-natural/25 p-5 transition-colors hover:bg-natural hover:text-forest-black"
                aria-label={whatsappConfigured ? "Conversar pelo WhatsApp" : "WhatsApp ainda não configurado"}
              >
                <span className="block text-xs opacity-50">WhatsApp</span>
                <span className="mt-2 block text-sm">{siteConfig.contact.whatsapp}</span>
              </a>
              <a
                href={emailConfigured ? `mailto:${siteConfig.contact.email}` : "#formulario-contato"}
                className="border border-natural/25 p-5 transition-colors hover:bg-natural hover:text-forest-black"
                aria-label={emailConfigured ? "Enviar e-mail" : "E-mail ainda não configurado"}
              >
                <span className="block text-xs opacity-50">E-mail</span>
                <span className="mt-2 block text-sm">{siteConfig.contact.email}</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-natural/50">
              <span>{siteConfig.contact.linkedin}</span>
              <span>{siteConfig.contact.instagram}</span>
            </div>
          </div>

          <div className="border-t border-natural/20 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
