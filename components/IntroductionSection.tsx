"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function IntroductionSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const target = 25;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="w-full bg-[#E8F3F4] py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE LAYOUT */}
        <AnimateOnScroll>
          <div className="relative w-full h-[520px]">
            
            {/* Main Image */}
            <div className="absolute left-0 top-0 w-[75%] h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/intro_img1.jpg"
                alt="EDI Consulting"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -left-4 sm:-left-6 top-10 bg-[#1B505B] text-white px-6 sm:px-8 py-6 sm:py-10 rounded-2xl shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold">{count}+</h2>
              <p className="text-xs sm:text-sm mt-2 opacity-90">
                Years of Experience
              </p>
            </div>

            {/* Small Image */}
            <div className="absolute bottom-6 right-0 w-[45%] h-[220px] rounded-2xl overflow-hidden border-8 border-white shadow-lg">
              <Image
                src="/intro_img2.jpg"
                alt="Meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* RIGHT CONTENT */}
        <AnimateOnScroll delay={200}>
          <div>
            
            {/* Subtitle */}
            <p className="uppercase tracking-widest text-[#1B505B] text-sm font-semibold">
              Introduction
            </p>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#12373F] mt-4 leading-tight">
              Empowering Your EDI
              <br />
              Infrastructure
            </h2>

            {/* Reduced Content */}
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                With 25+ years of EDI experience, we deliver trusted consulting
                and operational expertise for high-volume supply chain
                environments.
              </p>

              <p>
                We specialize in retail, manufacturing, and 3PL integrations —
                connecting trading partners, ERP systems, and warehouse
                operations.
              </p>

              <p>
                Our focus is building reliable, scalable EDI architectures that
                ensure accuracy, compliance, and seamless automation.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "24/7 Support Services",
                "Skilled EDI Consultants",
                "ERP & 3PL Integration",
                "Scalable Solutions",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1B505B] text-white text-xs">
                    ✓
                  </div>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <a href="tel:+14168370470" className="mt-10 flex items-center gap-6 w-fit hover:opacity-80 transition cursor-pointer">
              <div className="bg-white text-[#1B505B] p-4 rounded-xl shadow-md">
                📞
              </div>

              <div>
                <p className="text-[#1B505B] text-sm font-medium">
                  Call us anytime
                </p>
                <p className="text-xl font-semibold text-[#12373F]">
                  +1 416-837-0470
                </p>
              </div>
            </a>

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
