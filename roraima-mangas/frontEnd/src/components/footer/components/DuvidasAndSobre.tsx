import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

import Link from "next/link";

const items = [
  {
    value: "duvidas",
    trigger: "DÚVIDAS",
    links: [
      {
        label: "Perguntas frequentes",
        href: "/duvidas",
      },
      {
        label: "Formas de pagamento",
        href: "/pagamentos",
      },
    ],
  },
  {
    value: "sobre",
    trigger: "SOBRE",
    links: [
      {
        label: "Quem somos",
        href: "/sobre",
      },
      {
        label: "Contato",
        href: "/contato",
      },
    ],
  },
];

export default function DuvidasAndSobre() {
  return (
    <>
      {/* Mobile / Tablet */}
      <Accordion
        multiple
        className="w-full max-w-lg gap-10 lg:hidden"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-none"
          >
            <AccordionTrigger className="text-[20px] font-semibold text-white hover:no-underline">
              {item.trigger}
            </AccordionTrigger>

            <AccordionContent className="pb-6">
              <nav className="flex flex-col gap-3">
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Desktop - lg+ */}
      <div className="hidden lg:flex lg:gap-16">
        {items.map((item) => (
          <div key={item.value}>
            <h3 className="text-[20px] font-semibold text-white">
              {item.trigger}
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              {item.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </>
  );
}