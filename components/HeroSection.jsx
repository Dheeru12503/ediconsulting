"use client";

import Image from "next/image";
import HeroTabs from "@/components/HeroTabs";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-88px)] bg-[#1B505B] overflow-hidden">
      {/* Shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl z-0"></div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 py-16 relative z-20">
        <div className="gap-12 items-center min-h-[calc(100vh-200px)]">
          <div className="space-y-8 w-full">
            <div className="text-white font-serif leading-tight">
              <h1 className="text-[59px] underline decoration-white decoration-[2px] underline-offset-[4px] [text-decoration-skip-ink:auto]">
                EDI Integration
              </h1>

              <h2 className="text-[59px] mt-6">
                Precision{" "}
                <span className="underline decoration-white decoration-[2px] underline-offset-[4px] [text-decoration-skip-ink:auto]">
                  Meets Reliability
                </span>
              </h2>
            </div>

            <HeroTabs />
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="absolute right-0 top-0 z-10 w-1/2 h-full">
        <div className="relative h-full flex items-end justify-end">
          <Image
            src="/client_img_copy.png"
            alt="Ather Shahidi"
            width={500}
            height={700}
            className="object-contain object-bottom h-full"
            priority
          />
          
          {/* Name Badge */}
          <div className="absolute bottom-16 right-0 bg-[#03343D] px-8 py-4 rounded-l-2xl">
            <p className="text-white" style={{ fontFamily: "Lovers Quarrel, cursive", fontSize: "56px", fontWeight: "400" }}>
              Ather Shahidi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
