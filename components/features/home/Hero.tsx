"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import Image from "next/image";

export function Hero() {
  return (
    <Section>
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

        {/* LEFT TEXT */}
        <div className="space-y-6 text-center lg:text-left max-w-xl">
          
          {/* Small intro label */}
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Portfolio
          </p>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hello, I'm{" "}
            <span className="text-primary">
              Bern Justin Tajanlangit
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground">
            IT Student focused on building clean, user-friendly interfaces and modern web experiences.
          </p>

          {/* Button */}
          <div>
            <Button
              size="lg"
              className="px-8 py-6 text-base font-medium rounded-xl shadow-sm"
            >
              View Projects
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            
            {/* Background glow */}
            <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-2xl"></div>

            <Image
              src="/bj.jpg"
              alt="Bern Justin"
              width={400}
              height={400}
              className="relative rounded-2xl object-cover border shadow-lg w-[320px] sm:w-[380px] lg:w-[400px]"
            />
          </div>
        </div>

      </div>
    </Section>
  );
}