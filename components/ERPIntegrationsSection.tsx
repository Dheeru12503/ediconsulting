"use client";

import Image from "next/image";

const erpSystems = [
  {
    name: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  },
  {
    name: "VISUAL Manufacturing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Infor_logo.svg",
  },
  {
    name: "Microsoft Dynamics NAV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "SYSPRO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/SYSPRO_Logo.svg",
  },
  {
    name: "JD Edwards",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
];

export default function ERPIntegrationsSection() {
  return (
    <section id="erp-integrations" className="w-full bg-[#F1F7F8] py-20">
      <div className="container mx-auto px-6 text-center">
        
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-[#12373F]">
          ERP Integrations
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Seamless integration with leading enterprise ERP platforms to
          automate document exchange and operational workflows.
        </p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
          
          {erpSystems.map((erp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-[#D6E6E8] shadow-sm hover:shadow-xl transition group"
            >
              
              {/* Logo */}
              <div className="relative h-12 w-full mb-6">
                <Image
                  src={erp.logo}
                  alt={erp.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-[#12373F]">
                {erp.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
