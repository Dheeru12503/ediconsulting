"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#F1F7F8] text-[#12373F] pt-[80px] md:pt-[100px]">
      {/* pt added to avoid navbar overlap */}
      <Navbar />
      {/* ================= ABOUT INTRO ================= */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-20">
        {/* Title - Shows first on mobile */}
        <div className="md:hidden mb-6">
          <div className="w-16 h-1 bg-[#1B505B] mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Ali Ather
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#1B505B]/10 rounded-2xl"></div>

            <Image
              src="/about_img1.jpg"
              alt="Consultant"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg relative z-10 h-[300px] md:h-[350px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <div className="w-16 h-1 bg-[#1B505B] mb-6 hidden md:block"></div>

            <h2 className="text-4xl font-bold mb-6 hidden md:block">
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
        </div>
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-20 grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Global Perspective Through Travel
          </h2>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Travel has played a significant role in shaping who I am. I have had
              the privilege of visiting over 40 countries, and each journey has
              strengthened my global perspective.
            </p>

            <p>
              Countries such as Japan, South Korea, Italy, Saudi Arabia, Dubai,
              Morocco, Prague, France, and Switzerland have inspired me deeply.
            </p>

            <p>
              Japan's discipline and attention to detail, South Korea's
              technological innovation, and Switzerland's structure and
              reliability reflect the same standards I bring into my work.
            </p>

            <p>
              Italy and France inspire me through their craftsmanship and rich
              history. Saudi Arabia and Dubai represent ambition, growth, and bold
              vision. Morocco and Prague remind me of the importance of cultural
              heritage and identity.
            </p>
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
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-20 grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        <Image
          src="/about_img3.jpg"
          alt="Travel"
          width={600}
          height={400}
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Balance, Discipline & Values
          </h2>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              In my daily life, I believe in maintaining balance and discipline. I
              enjoy daily walks to stay active and clear-minded. I am also a
              passionate cricket fan — watching the game teaches patience,
              strategy, teamwork, and resilience, qualities that I value both
              personally and professionally.
            </p>

            <p>
              Experiencing the world with my family, staying active, and enjoying
              the simple moments together remind me that true success is not
              measured only by professional achievements, but by meaningful
              relationships and strong values.
            </p>

            <p className="font-medium">
              The same principles guide my professional life — adaptability,
              respect for different cultures, strong communication, and commitment
              to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
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

      {/* ================= GALLERY ================= */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-600">Moments from my journey</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { src: "/gallery1.jpg", alt: "Gallery 1" },
            { src: "/gallery2.jpg", alt: "Gallery 2" },
            { src: "/gallery3.jpg", alt: "Gallery 3" },
            { src: "/gallery4.jpg", alt: "Gallery 4" },
            { src: "/gallery5.jpg", alt: "Gallery 5" },
            { src: "/gallery6.jpg", alt: "Gallery 6" },
          ].map((image, i) => (
            <div 
              key={i} 
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-[200px] md:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Gallery preview"
              width={1200}
              height={800}
              className="rounded-lg object-contain max-h-[90vh] w-auto"
              unoptimized
            />
          </div>
        </div>
      )}

      {/* ================= YOUTUBE CHANNEL ================= */}
      <section className="bg-[#F1F7F8] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* YouTube Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-12 h-12 md:w-14 md:h-14 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#12373F] mb-3">
                  Explore My Travel Journey
                </h3>
                <p className="text-gray-600 mb-4">
                  Beyond EDI consulting, I share my adventures exploring 40+
                  countries. Join me on YouTube for travel insights and cultural
                  experiences.
                </p>
                <a
                  href="https://www.youtube.com/@aliexploringtheworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1B505B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2F7C8A] transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Visit @aliexploringtheworld
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubscribeSection />
      <Footer />
    </div>
  );
}
