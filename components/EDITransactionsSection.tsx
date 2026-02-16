"use client";

export default function EDITransactionsSection() {
  const standardTx = [
    "850",
    "855",
    "860",
    "865",
    "856",
    "810",
    "820",
    "846",
    "852",
    "997",
    "999",
  ];

  const logisticsTx = ["940", "945", "944", "214"];

  return (
    <section id="edi-transactions" className="w-full bg-[#F1F7F8] py-20">
      <div className="container mx-auto px-6 text-center">
        
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-[#12373F]">
          Supported EDI Transactions
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Comprehensive support for standard retail and logistics EDI
          transaction sets across enterprise supply chain environments.
        </p>

        {/* CARDS GRID */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          
          {/* STANDARD TRANSACTIONS */}
          <div className="bg-white p-10 rounded-2xl shadow-md border border-[#D6E6E8]">
            
            <h3 className="text-xl font-semibold text-[#12373F] mb-6">
              Standard Transactions
            </h3>

            <div className="flex flex-wrap gap-4 justify-center">
              {standardTx.map((tx, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-lg bg-[#E8F3F4] text-[#1B505B] font-semibold text-sm border border-[#B9D7DC]"
                >
                  {tx}
                </span>
              ))}
            </div>
          </div>

          {/* 3PL TRANSACTIONS */}
          <div className="bg-white p-10 rounded-2xl shadow-md border border-[#D6E6E8]">
            
            <h3 className="text-xl font-semibold text-[#12373F] mb-6">
              3PL Transactions
            </h3>

            <div className="flex flex-wrap gap-4 justify-center">
              {logisticsTx.map((tx, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-lg bg-[#1B505B] text-white font-semibold text-sm shadow-sm"
                >
                  {tx}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
