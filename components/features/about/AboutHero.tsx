"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
  const fullName = "Bern Justin Tajanlangit";

  return (
    <Section className="flex justify-center px-5 pt-10 mt-20 pb-6">

      <div className="w-full max-w-4xl space-y-6">

        {/* ── TOP ROW (IMAGE + NAME + SOCIALS) ── */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

          {/* Profile Image */}
          <Image
            src="/bj.jpg"
            alt="Profile"
            width={140}
            height={140}
            className="rounded-full border-4 border-white shadow-lg object-cover
                       w-32 h-32 sm:w-36 sm:h-36"
          />

          {/* Name + Social */}
          <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">

            {/* Name */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {fullName}
            </h1>

            {/* Social Links */}
            <div className="flex gap-5">
              <Link href="https://github.com/chocolanay12" target="_blank"
                className="hover:text-gray-400 transition">
                <Github className="h-5 w-5" />
              </Link>

              <Link href="https://www.instagram.com/bernjustin8/" target="_blank"
                className="hover:text-pink-400 transition">
                <Instagram className="h-5 w-5" />
              </Link>

              <Link href="https://www.facebook.com/beejing08" target="_blank"
                className="hover:text-blue-600 transition">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>

            {/* Location */}
            <p className="text-sm text-muted-foreground">
              Cordova Cebu, Philippines
            </p>

          </div>
        </div>

        {/* ── BIO ── */}
        <div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            I have a strong passion for Information Technology, particularly in areas such as technical support, troubleshooting hardware and software issues, and web development. I enjoy understanding how systems operate and take pride in resolving technical challenges. I have experience building simple websites using HTML, CSS, and JavaScript, and I continue to grow my skills through self-study and hands-on personal projects.
          </p>
        </div>

      </div>
    </Section>
  );
}