"use client";

export default function ProcessFlowSection() {
  const flowSteps = [
    {
      title: "Trading Partners",
      desc: "Retailers, suppliers, and distributors exchanging business documents.",
    },
    {
      title: "EDI Platform",
      desc: "Secure document translation, validation, and routing engine.",
    },
    {
      title: "ERP Systems",
      desc: "Integration with enterprise resource planning systems.",
    },
    {
      title: "3PL & Carriers",
      desc: "Logistics providers managing warehousing and transportation.",
    },
  ];

  return (
    <section className="w-full bg-[#F1F7F8] py-24">
      <div className="container mx-auto px-6 text-center">
        
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-[#12373F] animate-fadeUp">
          EDI to ERP to 3PL Flow
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto animate-fadeUp" style={{ animationDelay: "100ms" }}>
          A streamlined data exchange process connecting trading partners,
          enterprise systems, and logistics providers through secure EDI
          infrastructure.
        </p>

        {/* FLOW LINE */}
        <div className="relative mt-20">
          
          {/* Horizontal Line */}
          <div className="absolute top-8 left-0 w-full h-1 bg-[#B9D7DC]" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            
            {flowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center animate-fadeUp" style={{ animationDelay: `${200 + index * 100}ms` }}>
                
                {/* Circle Node */}
                <div className="w-16 h-16 rounded-full bg-[#1B505B] text-white flex items-center justify-center text-xl font-semibold shadow-lg border-4 border-white">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="mt-6 bg-white p-6 rounded-2xl shadow-md border border-[#D6E6E8]">
                  <h3 className="text-lg font-semibold text-[#12373F]">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FLOW LABELS */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm font-medium">
          <span className="bg-[#1B505B] text-white px-4 py-2 rounded-lg">
            Trading Partners
          </span>
          <span className="text-[#1B505B]">→</span>
          <span className="bg-[#2F7C8A] text-white px-4 py-2 rounded-lg">
            EDI Platform
          </span>
          <span className="text-[#1B505B]">→</span>
          <span className="bg-[#4FA3B1] text-white px-4 py-2 rounded-lg">
            ERP Systems
          </span>
          <span className="text-[#1B505B]">→</span>
          <span className="bg-[#76C3CF] text-white px-4 py-2 rounded-lg">
            3PL & Carriers
          </span>
        </div>

      </div>
    </section>
  );
}
