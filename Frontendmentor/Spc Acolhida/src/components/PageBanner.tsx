import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router-dom";

const pages = {
  "/": {
    title: "SEÇÃO DE PLANEJAMENTO E CONTRATAÇÕES - SPC/UGE",
  },
  "/documentos": {
    title: "DOCUMENTAÇÃO PARA PROCESSOS DE CONTRATAÇÃO",
  },
  "/tools": {
    title: "PRINCIPAIS FERRAMENTAS",
  },
};

export default function PageBanner() {
  const { pathname } = useLocation();

  const page =
    pages[pathname as keyof typeof pages] ?? {
      title: "PORTAL DE COMPRAS",
    };

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={pathname}
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -30,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="bg-[#001E2E] border-t border-white/10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto h-14 flex items-center justify-center">
          <h1
            className="
              uppercase
              font-bold
              tracking-[3px]
              text-white
              text-sm
              md:text-lg
              text-center
            "
          >
            {page.title}
          </h1>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}