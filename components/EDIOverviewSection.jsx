"use client";

import Image from "next/image";

export default function EDIOverviewSection() {
  return (
    <section className="w-full bg-[#E8F3F4] py-20">
      <div className="container mx-auto px-6">
        
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-[#1B505B] uppercase tracking-widest text-sm font-semibold">
              Overview
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#12373F] mt-4">
              Electronic Data Interchange
            </h2>

            <p className="text-lg text-[#1B505B] font-medium mt-2">
              End-to-End EDI Solutions
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We provide secure and automated Electronic Data Interchange
              solutions that connect enterprise trading partners, 3PL
              providers, and ERP platforms.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our systems support high-volume retail, manufacturing, and
              distribution environments where accuracy, compliance, and
              uptime are mission-critical.
            </p>

            {/* Key Points */}
            <div className="mt-8 space-y-3">
              {[
                "Automated Trading Partner Integration",
                "ERP & Warehouse Connectivity",
                "High-Volume Data Processing",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B505B] text-white flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="relative h-[420px] w-full">
            <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D6E6E8]">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                alt="EDI Systems"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#1B505B] text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs opacity-90">
                Secure Data Exchange
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CAPABILITY CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          
          {[
            {
              title: "Trading Partner Integration",
              desc: "Seamless onboarding and connectivity with global partners.",
            },
            {
              title: "ERP Synchronization",
              desc: "Real-time document exchange with enterprise systems.",
            },
            {
              title: "Compliance & Validation",
              desc: "Standards-based EDI mapping and error monitoring.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md border border-[#D6E6E8] hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#1B505B] text-white flex items-center justify-center rounded-xl mb-4 text-xl">
                ⬡
              </div>

              <h3 className="text-lg font-semibold text-[#12373F]">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
