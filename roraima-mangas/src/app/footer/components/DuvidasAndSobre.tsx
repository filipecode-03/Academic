import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/src/components/ui/accordion";
  
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
      <Accordion
        multiple
        className="w-full max-w-lg"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-none"
          >
            <AccordionTrigger
              className="text-[20px] font-semibold text-white hover:no-underline"
            >
              {item.trigger}
            </AccordionTrigger>
  
            <AccordionContent className="pb-6">
              {/* Links */}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }