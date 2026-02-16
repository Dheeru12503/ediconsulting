"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2F35] via-[#1B505B] to-[#0F2F35] flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center relative">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#2F7C8A]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1B505B]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* 404 Number with Animation */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-white/10 leading-none select-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div
          className={`-mt-16 md:-mt-24 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-[#E8F3F4] rounded-full flex items-center justify-center animate-bounce">
                <svg
                  className="w-12 h-12 text-[#1B505B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              {/* Ripple Effect */}
              <div className="absolute inset-0 w-24 h-24 bg-[#E8F3F4] rounded-full animate-ping opacity-20" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have gone missing in the
            digital void.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/")}
              className="group relative px-8 py-4 bg-white text-[#1B505B] rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Go Home</span>
              <div className="absolute inset-0 bg-[#E8F3F4] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>

            <button
              onClick={() => router.back()}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className={`absolute top-10 left-10 w-4 h-4 bg-[#E8F3F4] rounded-full transition-all duration-1000 delay-500 ${
            mounted ? "opacity-60 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
        <div
          className={`absolute bottom-20 right-10 w-6 h-6 bg-[#2F7C8A] rounded-full transition-all duration-1000 delay-700 ${
            mounted ? "opacity-40 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ animation: "float 4s ease-in-out infinite reverse" }}
        />
        <div
          className={`absolute top-1/3 right-20 w-3 h-3 bg-white rounded-full transition-all duration-1000 delay-900 ${
            mounted ? "opacity-50 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          style={{ animation: "float 5s ease-in-out infinite" }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
