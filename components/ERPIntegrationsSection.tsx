"use client";

import Image from "next/image";

const erpSystems = [
  {
    name: "SAP",
    logo: "/logo/sap.png",
  },
  {
    name: "VISUAL Manufacturing",
    logo: "/logo/infor.png",
  },
  {
    name: "Microsoft Dynamics NAV",
    logo: "/logo/microsoft.png",
  },
  {
    name: "SYSPRO",
    logo: "/logo/syspro.png",
  },
  {
    name: "JD Edwards",
    logo: "/logo/OracleJD.png",
  },
];

export default function ERPIntegrationsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F4FAFB] to-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#12373F] animate-fadeUp">
          ERP Integrations
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base animate-fadeUp delay-100">
          Seamless integration with leading enterprise ERP platforms to
          automate document exchange and operational workflows.
        </p>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-5
          gap-6
          mt-12 sm:mt-16
        ">
          {erpSystems.map((erp, index) => (
            <div
              key={index}
              className="
                bg-white
                p-6
                rounded-2xl
                border border-[#E1EEF0]
                shadow-sm
                flex flex-col items-center justify-center
                min-h-[170px]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-xl
                animate-fadeUp
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Logo */}
              <div className="relative h-12 w-full mb-5 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={erp.logo}
                  alt={erp.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-[#12373F] text-center">
                {erp.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}