"use client";

import { Store } from "lucide-react";

export default function ClientSuccess() {
  const clients = [
    {
      name: "Walmart",
      desc: "Ali transformed our Walmart EDI integration from constant failures to 99.9% uptime.",
    },
    {
      name: "Walmart",
      desc: "Ali transformed our Walmart EDI integration from constant failures to 99.9% uptime.",
    },
    {
      name: "Walmart",
      desc: "Ali transformed our Walmart EDI integration from constant failures to 99.9% uptime.",
    },
  ];

  return (
    <section className="bg-[#E9EFF1] py-16 md:min-h-screen md:flex md:items-center">

      <div className="container mx-auto px-6 text-center">

        {/* ================= Heading ================= */}
        <h2 className="text-5xl font-serif text-[#1B3F45]">
          Client Success Stories
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Trusted by leading enterprises across retail, manufacturing, and
          distribution for mission-critical EDI implementations
        </p>

        {/* ================= Cards ================= */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {clients.map((client, i) => (
            <div key={i} className="flex flex-col items-center text-center">

              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-[#CFE0E4] flex items-center justify-center">

                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow">

                  <Store className="w-8 h-8 text-yellow-500" />

                </div>
              </div>

              {/* Client Name */}
              <h3 className="mt-6 text-2xl font-semibold text-[#1B3F45]">
                {client.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 max-w-xs">
                {client.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
