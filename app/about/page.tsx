"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F1F7F8] text-[#12373F] pt-[100px]">
      {/* pt added to avoid navbar overlap */}
      <Navbar/>
      {/* ================= ABOUT INTRO ================= */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#1B505B]/10 rounded-2xl"></div>

          <Image
            src="/about_img1.jpg"
            alt="Consultant"
            width={600}
            height={400}
            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
            className="rounded-2xl shadow-lg relative z-10"
          />
        </div>

        {/* CONTENT */}
        <div>
          <div className="w-16 h-1 bg-[#1B505B] mb-6"></div>

          <h2 className="text-4xl font-bold mb-6">
            About Ali Ather
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            With over 25 years dedicated to Electronic Data Interchange
            (EDI), I have built my career around precision, reliability,
            and structured integration design.
          </p>

          <p className="text-gray-600 leading-relaxed">
            My experience spans enterprise retail, manufacturing systems,
            and third-party logistics environments where system accuracy
            and compliance are mission-critical.
          </p>
        </div>
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Strategy, Discipline & Systems Thinking
          </h2>

          <p className="text-gray-600 mb-4">
            EDI consulting is not merely technical mapping — it is
            strategic architecture.
          </p>

          <p className="text-gray-600 mb-6">
            Like chess, enterprise integration requires anticipating
            outcomes and planning multiple steps ahead.
          </p>

          <div className="bg-white p-6 rounded-xl border border-[#D6E6E8]">
            <h4 className="font-semibold mb-3">
              My philosophy is built on:
            </h4>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Structure over improvisation</li>
              <li>• Stability over speed</li>
              <li>• Long-term sustainability</li>
            </ul>
          </div>
        </div>

        <Image
          src="/about_img2.jpg"
          alt="Strategy"
          width={600}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* ================= GLOBAL ================= */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        
        <Image
          src="/about_img3.jpg"
          alt="Travel"
          width={600}
          height={400}
          style={{ height: '400px', width: '100%', objectFit: 'cover' }}
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Global Experience, Personal Balance
          </h2>

          <p className="text-gray-600 mb-4">
            Beyond consulting, travel has shaped my worldview.
            Visiting 40+ countries strengthened cultural awareness.
          </p>

          <p className="text-gray-600 font-medium">
            True success is measured not only by achievements
            but by meaningful relationships and values.
          </p>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Commitment to Excellence
          </h2>

          <p className="text-gray-600 mb-16">
            Principles that guide professional engagements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Integrity",
              "Accountability",
              "Clear Communication",
              "Cultural Respect",
              "Commitment to Excellence",
              "Reliability",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F1F7F8] p-8 rounded-xl border border-[#D6E6E8]"
              >
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SubscribeSection/>
      <Footer/>
    </div>
  );
}
