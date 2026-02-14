"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SubscribeSection() {
  return (
    <section className="w-full py-16 bg-[#F5F7F8]">
      <div className="container mx-auto px-6">

        {/* CTA Container */}
        <div className="relative overflow-hidden rounded-[30px]">

          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#1B505B]/85" />

          {/* Content */}
          <div
            className="
            relative z-10
            px-8 py-12

            grid gap-8 items-center

            /* Mobile */
            grid-cols-1 text-center

            /* Tablet */
            min-[760px]:grid-cols-1

            /* Desktop */
            min-[1020px]:grid-cols-2 text-left
          "
          >
            {/* Left Content */}
            <div>
              <h2 className="text-3xl min-[1020px]:text-4xl font-bold text-white mb-4">
                Subscribe for our offer & update!
              </h2>

              <p className="text-gray-200 max-w-[520px]">
                Stay connected with the latest in EDI consulting,
                enterprise integrations, and supply chain automation
                solutions.
              </p>
            </div>

            {/* Right Form */}
            <div className="flex justify-center min-[760px]:justify-start min-[1020px]:justify-end">
              <div className="w-full max-w-[420px]">
                {/* Desktop & Tablet (760px+): Horizontal Layout */}
                <div className="hidden min-[760px]:flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-1 px-6 py-4 outline-none text-gray-700 rounded-l-full"
                  />
                  <button className="flex items-center gap-2 bg-[#1B505B] text-white px-6 py-3 m-1 rounded-full hover:bg-[#163F47] hover:shadow-xl transition-all duration-300">
                    Enroll Now
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Mobile (below 760px): Vertical Layout */}
                <div className="flex min-[760px]:hidden flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-6 py-4 bg-white outline-none text-gray-700 rounded-full shadow-lg"
                  />
                  <button className="flex items-center justify-center gap-2 bg-[#12373f] text-white px-6 py-4 rounded-full hover:bg-[#163F47] hover:shadow-xl transition-all duration-300 shadow-lg">
                    Enroll Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
