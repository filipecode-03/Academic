"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  url: string;
};

type ShortenProps = {
  onLinkShortened: (link: {
    original: string;
    shortened: string;
  }) => void;
};

function Shorten({ onLinkShortened }: ShortenProps) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setError("");

    try {
      const url = data.url.trim();

      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to shorten URL."
        );
      }

      if (!result.result_url) {
        throw new Error(
          "The API did not return a shortened URL."
        );
      }

      onLinkShortened({
        original: url,
        shortened: result.result_url,
      });

      reset();
    } catch (error) {
      console.error(
        "Error shortening URL:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section className="relative z-10 -mb-16 px-6">
      <div className="mx-auto max-w-6xl rounded-lg shorten-bg p-6 md:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:flex-row"
        >
          <div className="flex-1">
            <input
              type="url"
              placeholder="Shorten a link here..."
              aria-invalid={!!errors.url}
              className={`w-full rounded-lg border-2 bg-white px-5 py-4 text-[#232127] outline-none placeholder:text-[#9E9AA7] ${
                errors.url
                  ? "border-red-500"
                  : "border-transparent focus:border-[#2BD0D0]"
              }`}
              {...register("url", {
                required: "Please add a link",
                validate: (value) => {
                  try {
                    const parsedUrl = new URL(value);

                    if (
                      parsedUrl.protocol !== "http:" &&
                      parsedUrl.protocol !== "https:"
                    ) {
                      return "Please add a valid URL";
                    }

                    return true;
                  } catch {
                    return "Please add a valid URL";
                  }
                },
              })}
            />

            {errors.url && (
              <p className="mt-2 text-sm italic text-red-400">
                {errors.url.message}
              </p>
            )}

            {error && (
              <p className="mt-2 text-sm italic text-red-400">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-[#2BD0D0] px-8 py-4 font-bold text-white transition hover:bg-[#9BE3E2] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? "Shortening..."
              : "Shorten It!"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Shorten;