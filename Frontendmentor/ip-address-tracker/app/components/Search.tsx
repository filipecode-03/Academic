"use client";

import { useForm } from "react-hook-form";
import { type IPData } from "../types/ip";

interface SearchFormData {
  ip: string;
}

interface SearchProps {
  onSearch: (data: IPData) => void;
}

function Search({ onSearch }: SearchProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>();

  const onSubmit = async (data: SearchFormData) => {
    try {
      const response = await fetch(
        `/api/ip?ip=${encodeURIComponent(data.ip)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch IP information");
      }

      const result: IPData = await response.json();

      onSearch(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute top-21.25 left-1/2 flex w-[90%] max-w-138.75 -translate-x-1/2"
    >
      <input
        {...register("ip", {
          required: "IP address is required",
        })}
        type="text"
        placeholder="Search for any IP address or domain"
        className="h-14.5 flex-1 rounded-l-[15px] bg-white px-6 text-[18px] text-gray-700 outline-none placeholder:text-gray-400"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-14.5 w-14.5 items-center justify-center rounded-r-[15px] bg-black text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        →
      </button>
    </form>
  );
}

export default Search;