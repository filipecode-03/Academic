import { motion } from "framer-motion";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface PricingCardProps {
    title: string;
    price: string;
    yearly: string;
    benefits: string[];
    button: string;
    active?: boolean;
    featured?: boolean;
}

export function PricingCard({
  title,
  price,
  yearly,
  benefits,
  button,
  active,
  featured,
}: PricingCardProps) {
  return (
    <motion.div
      animate={{
        scale: active ? 1 : 0.94,
        opacity: active ? 1 : 0.6,
      }}
      transition={{
        duration: 0.35,
      }}
      className={clsx("w-full rounded-3xl border p-8",
        featured
            ? "border-none bg-[#001933]"
            : "border-[#002347] bg-[#000F1F]"
      )}
    >
      <div className={clsx(featured ? "flex items-center justify-between" : "")}>
          <p className={clsx("font-bold text-[20px]", featured ? "text-[#C59DD2]" : "text-[#73B6D2]")}>
            {title}
          </p>
          {featured && (
            <p className="bg-[#002347] font-semibold px-5 py-2.25 text-[14px] tracking-[1px] rounded-full">POPULAR</p>
          )}
      </div>
      <h2 className="mt-6 text-5xl font-bold text-white">
        {price}
        <span className="text-lg">/mês</span>
      </h2>
      <p className="mt-3 text-zinc-400">
        {yearly}
      </p>
      <div className="mt-20 space-y-4">
        {benefits.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <FontAwesomeIcon icon={faStar} className={clsx(featured ? "text-[#9547A5]" : "text-[#358BB9]")} />
            <span className="text-zinc-300">
              {item}
            </span>
          </div>
        ))}
      </div>
      <button className={clsx("mt-10 h-14 w-full rounded-xl font-bold text-white transition hover:brightness-110", featured ? "bg-[#7D298A]" : "bg-[#144A72]")} >
        {button}
      </button>
    </motion.div>
  );
}