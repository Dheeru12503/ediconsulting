"use client";
import { useState } from "react";
import { Inria_Sans } from "next/font/google";

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function HeroTabs() {
  const [activeTab, setActiveTab] = useState<"edi" | "erp" | "trading">("edi");
  const [expandedAccordion, setExpandedAccordion] = useState<"edi" | "erp" | "trading">("edi");

  const tabData = {
    edi: [
      { title: "LIAISON ECS", desc: "Secure Data Routing" },
      { title: "LAHAM", desc: "Native ERP Integration" },
      { title: "TRUE COMMERCE", desc: "Managed Supply Connectivity" },
      { title: "SPS COMMERCE", desc: "Full-Service Retail Network" },
    ],
    erp: [
      { title: "SAP", desc: "ERP Integration partner" },
      { title: "ORACLE", desc: "Cloud ERP solutions" },
      { title: "SYSPRO", desc: "Business management" },
      {title: "VISUAL Manufacturing", desc: "Manufacturing ERP solutions"}
    ],
    trading: [
      { title: "WAREHOUSING" ,desc: "3PL & Fulfillment" },
      { title: "TRANSPORTATION", desc: "Carrier & Freight Management" },
      { title: "LOGISTICS PROVIDERS", desc: "End-to-End Supply Chain" },
    ],
  };

  return (
    <div className="mt-10 max-[760px]:mt-0 max-[760px]:flex-1 max-[760px]:flex max-[760px]:flex-col">
      {/* Desktop Tabs */}
      <div className={`flex gap-2 ${inriaSans.className} max-[760px]:hidden`}>
        <button
          onClick={() => setActiveTab("edi")}
          className={`px-8 py-4 md:px-4 md:py-2 md:text-sm lg:px-8 lg:py-4 lg:text-base rounded-t-2xl font-semibold transition-all duration-300
          ${
            activeTab === "edi"
              ? "bg-gray-200 text-black"
              : "bg-white/10 text-black hover:bg-white/20"
          }`}
        >
          EDI-PLATFORM
        </button>

        <button
          onClick={() => setActiveTab("erp")}
          className={`px-8 py-4 md:px-4 md:py-2 md:text-sm lg:px-8 lg:py-4 lg:text-base rounded-t-2xl font-semibold transition-all duration-300
          ${
            activeTab === "erp"
              ? "bg-gray-200 text-black"
              : "bg-white/10 text-black hover:bg-white/20"
          }`}
        >
          ERP SYSTEM
        </button>

        <button
          onClick={() => setActiveTab("trading")}
          className={`px-8 py-4 md:px-4 md:py-2 md:text-sm lg:px-8 lg:py-4 lg:text-base rounded-t-2xl font-semibold transition-all duration-300
          ${
            activeTab === "trading"
              ? "bg-gray-200 text-black"
              : "bg-white/10 text-black hover:bg-white/20"
          }`}
        >
          3PL & Carriers
        </button>
      </div>

      {/* Desktop Sub Options Panel */}
      <div
        className={`
    ${inriaSans.className}
    bg-[#03343D]
    backdrop-blur-md
    rounded-b-2xl
    px-8 py-6 md:px-3 md:py-5 lg:px-6 lg:py-6
    inline-flex flex-wrap   
    gap-10 md:gap-5 lg:gap-10
    items-center
    shadow-xl
    transition-all duration-500 ease-in-out
    max-[760px]:hidden
  `}
      >
        {tabData[activeTab].map((item, i) => (
          <div key={i} className="flex items-center gap-10 md:gap-5 lg:gap-10">
            <div>
              <h3 className="text-white font-semibold tracking-wide md:text-sm lg:text-base">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm md:text-xs lg:text-sm">{item.desc}</p>
            </div>

            {i !== tabData[activeTab].length - 1 && (
              <div className="h-10 md:h-8 lg:h-10 w-[1px] bg-white/30"></div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className={`hidden max-[760px]:flex max-[760px]:flex-col ${inriaSans.className} rounded-2xl overflow-hidden`}>
        {/* EDI Platform Accordion */}
        <div>
          <button
            onClick={() => setExpandedAccordion(expandedAccordion === "edi" ? "edi" : "edi")}
            className="w-full bg-gray-200 text-black font-bold py-2.5 px-4 text-center text-xs"
          >
            EDI-PLATFORM
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedAccordion === "edi" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="bg-[#03343D] px-3 py-2.5">
              <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                {tabData.edi.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-white font-bold text-[10px] mb-0.5">{item.title}</h3>
                    <p className="text-white/70 text-[9px]">{item.desc}</p>
                    {i < 2 && <div className="h-[1px] bg-white/30 mt-2.5"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ERP System Accordion */}
        <div className="border-t border-white/20">
          <button
            onClick={() => setExpandedAccordion(expandedAccordion === "erp" ? "edi" : "erp")}
            className="w-full bg-gray-400/50 text-black font-bold py-2.5 px-4 text-center text-xs"
          >
            ERP SYSTEM
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedAccordion === "erp" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="bg-[#03343D] px-3 py-2.5">
              <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                {tabData.erp.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-white font-bold text-[10px] mb-0.5">{item.title}</h3>
                    <p className="text-white/70 text-[9px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trading Partner Accordion */}
        <div className="border-t border-white/20">
          <button
            onClick={() => setExpandedAccordion(expandedAccordion === "trading" ? "edi" : "trading")}
            className="w-full bg-gray-500/40 text-black font-bold py-2.5 px-4 text-center text-xs rounded-b-2xl"
          >
            3PL & Carriers
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedAccordion === "trading" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="bg-[#03343D] px-3 py-2.5 rounded-b-2xl">
              <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                {tabData.trading.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-white font-bold text-[10px] mb-0.5">{item.title}</h3>
                    <p className="text-white/70 text-[9px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
