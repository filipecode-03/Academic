import { ArrowRight } from "lucide-react";

interface SubmitButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export function SubmitButton({
  children,
  isLoading = false,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="
        mt-10
        flex
        items-center
        justify-center
        gap-3
        rounded-lg
        bg-[#1D6FB6]
        px-5
        py-3
        font-['Open_Sans']
        font-semibold
        text-white
        transition-colors
        hover:bg-[#257CC9]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {isLoading ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Criando...
        </>
      ) : (
        <>
          <ArrowRight size={18} />
          {children}
        </>
      )}
    </button>
  );
}