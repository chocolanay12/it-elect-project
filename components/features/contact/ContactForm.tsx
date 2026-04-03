"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Mail,
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";

import { Section } from "@/components/common/Section";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be at most 500 characters."),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    toast.success("Message sent successfully!");
    form.reset();
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  const labelClass = "block mb-1 font-medium text-gray-700";

  const iconTextClass = "flex items-center gap-3 text-gray-700 hover:text-blue-600 transition";

  return (
    <Section className="min-h-screen py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-3">
          Contact Form
        </h2>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <label htmlFor="name" className={labelClass}>Name</label>
                <input
                  {...field}
                  id="name"
                  placeholder="Your name"
                  className={inputClass}
                />
                {fieldState.error && (
                  <p className="text-xs text-red-600 mt-1">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input
                  {...field}
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {fieldState.error && (
                  <p className="text-xs text-red-600 mt-1">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea
                  {...field}
                  id="message"
                  rows={5}
                  placeholder="Your message..."
                  className={`${inputClass} resize-none`}
                />
                {fieldState.error && (
                  <p className="text-xs text-red-600 mt-1">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
          >
            {form.formState.isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>

        {/* Contact Info below form */}
        <div className="mt-12 border-t border-gray-300 pt-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Contact Info
          </h3>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <a href="mailto:bernjustin08@gmail.com" className={iconTextClass}>
              <Mail className="w-5 h-5" />
              <span>bernjustin08@gmail.com</span>
            </a>

            <a href="tel:+09692720333" className={iconTextClass}>
              <Phone className="w-5 h-5" />
              <span>09692720333</span>
            </a>

            <a href="https://www.facebook.com/BjTajanlangit" target="_blank" rel="noopener noreferrer" className={iconTextClass}>
              <Facebook className="w-5 h-5" />
              <span>Bj Tajanlangit</span>
            </a>

            <a href="https://www.instagram.com/bernjustin_08" target="_blank" rel="noopener noreferrer" className={iconTextClass}>
              <Instagram className="w-5 h-5" />
              <span>@bernjustin_08</span>
            </a>

            {/* TikTok icon substitute */}
            <a href="https://www.tiktok.com/@brnjstn_08" target="_blank" rel="noopener noreferrer" className={iconTextClass}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-gray-700 dark:text-gray-300"
              >
                <path d="M9 3c-3.314 0-6 2.686-6 6 0 3.052 2.401 5.537 5.424 5.921v2.979c-3.091-.442-5.424-3.296-5.424-6.9 0-3.866 3.134-7 7-7h5v2h-5z" />
              </svg>
              <span>brnjstn_08</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}