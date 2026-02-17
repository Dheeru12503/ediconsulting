"use client";

import Image from "next/image";
import HeroTabs from "@/components/HeroTabs";

export default function HeroSection() {
  return (
    <section className="relative bg-[#1B505B] overflow-hidden pt-[88px] md:max-h-[760px] md:min-h-[640px] lg:min-h-[810px] flex">
      {/* Blurred Random Squares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[0%] w-20 h-20 md:w-20 md:h-20 lg:w-48 lg:h-48 bg-[#0F2F35]/40 blur-xl" />

        <div className="absolute top-[70%] left-[5%] w-24 h-24 md:w-32 md:h-32 bg-[#0F2F35]/30 blur-xl" />
        <div className="absolute top-[20%] right-[15%] w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-[#0F2F35]/35 blur-xl" />
        <div className="absolute bottom-[5%] right-[20%] w-20 h-20 md:w-28 md:h-28 bg-[#0F2F35]/40 blur-xl" />
        <div className="absolute top-[35%] left-[40%] w-16 h-16 md:w-24 md:h-24 bg-[#0F2F35]/25 blur-xl max-[760px]:hidden" />
        <div className="absolute top-[40%] left-[85%] w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#0F2F35]/40 blur-xl" />
      </div>
      
      {/* CONTENT */}
      <div className="container mx-auto px-6 py-24 max-[760px]:px-4 max-[760px]:py-8 relative z-20  md:flex md:items-center">
        <div className="gap-12 items-center w-full max-[760px]:flex max-[760px]:flex-col">
          <div className="space-y-8 w-full max-[760px]:space-y-0 max-[760px]:flex max-[760px]:flex-col max-[760px]:h-full">
            <div className="text-white font-serif leading-tight max-[760px]:text-center max-[760px]:px-2 max-[760px]:pt-4 max-[760px]:flex-shrink-0">
              <h1 className="text-[59px] md:text-[38px] lg:text-[59px] max-[760px]:text-[24px] max-[760px]:leading-tight underline decoration-white decoration-[2px] underline-offset-[4px] [text-decoration-skip-ink:auto]">
                EDI Integration
              </h1>

              <h2 className="text-[59px] md:text-[38px] lg:text-[59px] max-[760px]:text-[24px] max-[760px]:leading-tight mt-6 max-[760px]:mt-2 max-[760px]:whitespace-nowrap">
                Precision{" "}
                <span className="underline decoration-white decoration-[2px] underline-offset-[4px] [text-decoration-skip-ink:auto]">
                  Meets Reliability
                </span>
              </h2>
            </div>

            {/* IMAGE - Mobile */}
            <div className="hidden max-[760px]:flex flex-col items-center justify-center relative max-[760px]:mt-3 max-[760px]:flex-shrink-0">
              <div className="relative w-full flex justify-center">
                <Image
                  src="/client_img.png"
                  alt="Ather Shahidi"
                  width={160}
                  height={200}
                  className="object-contain max-w-[160px]"
                  priority
                />
              </div>
            </div>

            <div className="max-[760px]:flex-1 max-[760px]:overflow-hidden max-[760px]:flex max-[760px]:flex-col">
              <HeroTabs />
            </div>
            {/* IMAGE - Desktop */}
            <div className="absolute right-0 top-[88px] z-[-1] max-[760px]:hidden">
              <div className="relative flex items-end justify-end">
                <Image
                  src="/client_img.png"
                  alt="Ather Shahidi"
                  width={500}
                  height={700}
                  className="object-contain object-bottom max-h-full md:w-[350px] lg:w-[500px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Name Badge - Desktop */}
      <div className="absolute bottom-16 right-0 bg-[#03343D] px-8 py-4 md:px-4 md:py-2 lg:px-8 lg:py-4 rounded-l-2xl max-[760px]:hidden z-20">
        <p
          className="text-white md:text-[36px] lg:text-[56px]"
          style={{
            fontFamily: "Lovers Quarrel, cursive",
            fontWeight: "400",
          }}
        >
          Ali Ather Shahidi
        </p>
      </div>
      
      {/* Name Badge - Mobile */}
      <div className="absolute top-[280px] right-0 bg-[#03343D] px-3 py-1 rounded-l-xl min-[760px]:hidden z-20">
        <p
          className="text-white text-[18px]"
          style={{
            fontFamily: "Lovers Quarrel, cursive",
            fontWeight: "400",
          }}
        >
         Ali Ather Shahidi
        </p>
      </div>
    </section>
  );
}
