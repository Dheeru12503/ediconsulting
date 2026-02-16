"use client";

import Image from "next/image";

const partners = [
  {
    name: "Target",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
  },
 {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Target",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
  },
  
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Target",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  
];

export default function TradingPartnersSection() {
  return (
    <section id="trading-partners" className="w-full bg-[#F1F7F8] py-16">
      <div className="container mx-auto px-6">
        {/* TITLE WITH LINES */}
        <div className="flex items-center gap-3 md:gap-6 mb-12">
          <div className="flex-1 h-[2px] bg-[#B9D7DC]" />

          <h2 className="text-sm md:text-lg font-semibold text-[#12373F] whitespace-nowrap text-center">
            Major Trading Partners Supported
          </h2>

          <div className="flex-1 h-[2px] bg-[#B9D7DC]" />
        </div>

        {/* MARQUEE */}
        <div className="overflow-hidden relative">
          <div className="flex gap-8 md:gap-16 animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] md:min-w-[160px] h-[60px] md:h-[80px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="object-contain w-[100px] md:w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
