"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "EDI & 3PL Integration",
    desc: "End-to-end consulting for integrating EDI platforms with 3PL providers and warehouse systems.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Trading Partner Onboarding",
    desc: "Seamless onboarding, compliance validation, and partner connectivity enablement.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mapping & Production Support",
    desc: "EDI document mapping, testing cycles, and live production monitoring support.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "EDI Migrations & Upgrades",
    desc: "Platform migrations, version upgrades, and system modernization services.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Monitoring & Optimization",
    desc: "Operational monitoring, error handling, and performance optimization.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ConsultingServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="consulting-services" className="w-full bg-[#F1F7F8] py-20">
      <div className="container mx-auto px-6">
        
        {/* SECTION TITLE */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#12373F]">
              Consulting Services
            </h2>

            <div className="w-24 h-1 bg-[#1B505B] mx-auto mt-4 rounded-full" />
          </div>
        </AnimateOnScroll>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SERVICE LIST */}
          <AnimateOnScroll delay={100}>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer p-5 border-l-4 rounded-r-xl transition-all duration-300
                  ${
                    active === index
                      ? "bg-[#DCEFF2] border-[#1B505B]"
                      : "bg-white border-transparent hover:bg-[#E8F3F4]"
                  }`}
                >
                  <p
                    className={`font-medium ${
                      active === index
                        ? "text-[#1B505B]"
                        : "text-gray-700"
                    }`}
                  >
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* RIGHT CONTENT CARD */}
          <AnimateOnScroll delay={300}>
            <div className="relative">
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D6E6E8]">
                
                {/* Image */}
                <div className="relative h-[320px] w-full">
                  <Image
                    src={services[active].img}
                    alt={services[active].title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 bg-gradient-to-r from-[#1B505B] to-[#2F7C8A] text-white">
                  <h3 className="text-2xl font-semibold">
                    {services[active].title}
                  </h3>

                  <p className="mt-3 text-sm opacity-90 leading-relaxed">
                    {services[active].desc}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
