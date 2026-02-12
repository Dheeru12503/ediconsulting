"use client";
import { useState } from "react";
import { Inria_Sans } from "next/font/google";

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function HeroTabs() {
  const [activeTab, setActiveTab] = useState("edi");

  const tabData = {
    edi: [
      { title: "LAHAM", desc: "Lorem ipsum lorem ipsum" },
      { title: "SPS COMMERCE", desc: "Lorem ipsum lorem ipsum" },
      { title: "TRUE COMMERCE", desc: "Lorem ipsum lorem ipsum" },
      { title: "SPS COMMERCE", desc: "Lorem ipsum lorem ipsum" },
    ],
    erp: [
      { title: "SAP", desc: "ERP Integration partner" },
      { title: "Oracle", desc: "Cloud ERP solutions" },
      { title: "NetSuite", desc: "Business management" },
    ],
    trading: [
      { title: "Walmart", desc: "Retail trading partner" },
      { title: "Amazon", desc: "Marketplace partner" },
      { title: "Shopify", desc: "Ecommerce partner" },
    ],
  };

  return (
    <div className="mt-10">
      {/* Tabs */}
      <div className={`flex gap-2 ${inriaSans.className}`}>
        {/* Tab 1 */}
        <button
          onClick={() => setActiveTab("edi")}
          className={`px-8 py-4 rounded-t-2xl font-semibold transition-all duration-300
          ${
            activeTab === "edi"
              ? "bg-gray-200 text-black"
              : "bg-white/10 text-black hover:bg-white/20"
          }`}
        >
          EDI-PLATFORM
        </button>

        {/* Tab 2 */}
        <button
          onClick={() => setActiveTab("erp")}
          className={`px-8 py-4 rounded-t-2xl font-semibold transition-all duration-300
          ${
            activeTab === "erp"
              ? "bg-gray-200 text-black"
              : "bg-white/10 text-black hover:bg-white/20"
          }`}
        >
          ERP SYSTEM
        </button>

        {/* Tab 3 */}
        <button
          onClick={() => setActiveTab("trading")}
          className={`px-8 py-4 rounded-t-2xl font-semibold transition-all duration-300
          ${
            activeTab === "trading"
              ? "bg-gray-200 text-black"
              : "bg-white/10 text-black hover:bg-white/20"
          }`}
        >
          Trading Partner
        </button>
      </div>

      {/* Sub Options Panel */}
      <div
        className={`
    ${inriaSans.className}
    bg-[#03343D]
    backdrop-blur-md
    rounded-b-2xl
    px-8 py-6
    inline-flex flex-wrap   
    gap-10
    items-center
    shadow-xl
    transition-all duration-500 ease-in-out
  `}
      >
        {tabData[activeTab].map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            {/* Text */}
            <div>
              <h3 className="text-white font-semibold tracking-wide">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>

            {/* Divider */}
            {i !== tabData[activeTab].length - 1 && (
              <div className="h-10 w-[1px] bg-white/30"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
