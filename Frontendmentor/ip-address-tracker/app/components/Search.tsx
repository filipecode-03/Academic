"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { type IPData } from "../types/ip";

interface SearchFormData {
  ip: string;
}

interface SearchProps {
  onSearch: (data: IPData) => void;
}

function Search({ onSearch }: SearchProps) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SearchFormData>();

  const onSubmit = async (data: SearchFormData) => {
    setError("");

    try {
      const response = await fetch(
        `/api/ip?ip=${encodeURIComponent(data.ip)}`
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to find IP address"
        );
      }

      onSearch(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div className="absolute top-[90px] left-1/2 w-[90%] max-w-[555px] -translate-x-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full"
      >
        <input
          {...register("ip", {
            required: "Please enter an IP address or domain",
          })}
          type="text"
          placeholder="Search for any IP address or domain"
          className="h-[58px] min-w-0 flex-1 rounded-l-[15px] bg-white px-5 text-[16px] text-gray-700 outline-none placeholder:text-gray-400 md:px-6 md:text-[18px]"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-r-[15px] bg-black text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "..." : "→"}
        </button>
      </form>

      {errors.ip && (
        <p className="mt-2 text-center text-sm font-medium text-white">
          {errors.ip.message}
        </p>
      )}

      {error && (
        <p className="mt-2 text-center text-sm font-medium text-white">
          {error}
        </p>
      )}
    </div>
  );
}

export default Search;