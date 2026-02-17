
"use client";

export default function EDITransactionsSection() {
  const standardTx = [
    "850","855","860","865","856",
    "810","820","846","852","997","999"
  ];

  const logisticsTx = ["940","945","944","214"];

  return (
    <section className="w-full bg-gradient-to-b from-[#F4FAFB] to-white py-16 sm:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center animate-fadeUp">
        
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#12373F] animate-fadeUp">
          Supported EDI Transactions
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base animate-fadeUp" style={{ animationDelay: "100ms" }}>
          Comprehensive support for standard retail and logistics EDI
          transaction sets across enterprise supply chain environments.
        </p>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16">
          
          {/* STANDARD TRANSACTIONS */}
          <div className="group bg-white p-6 sm:p-10 rounded-3xl 
          shadow-lg border border-[#E1EEF0]
          transition-all duration-500 
          hover:-translate-y-2 hover:shadow-2xl animate-fadeUp" style={{ animationDelay: "200ms" }}>
            
            <h3 className="text-lg sm:text-xl font-semibold text-[#12373F] mb-6">
              Standard Transactions
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {standardTx.map((tx, i) => (
                <span
                  key={i}
                  className="px-4 sm:px-5 py-2 rounded-full 
                  bg-[#E8F3F4] text-[#1B505B] 
                  font-semibold text-sm 
                  border border-[#CDE2E5]
                  transition-all duration-300
                  hover:scale-110 hover:bg-[#1B505B] hover:text-white"
                >
                  {tx}
                </span>
              ))}
            </div>
          </div>

          {/* 3PL TRANSACTIONS */}
          <div className="group bg-white p-6 sm:p-10 rounded-3xl 
          shadow-lg border border-[#E1EEF0]
          transition-all duration-500 
          hover:-translate-y-2 hover:shadow-2xl animate-fadeUp" style={{ animationDelay: "300ms" }}>
            
            <h3 className="text-lg sm:text-xl font-semibold text-[#12373F] mb-6">
              3PL Transactions
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {logisticsTx.map((tx, i) => (
                <span
                  key={i}
                  className="px-4 sm:px-5 py-2 rounded-full 
                  bg-linear-to-r from-[#1B505B] to-[#2F7C8A]
                  text-white font-semibold text-sm 
                  shadow-md 
                  transition-all duration-300
                  hover:scale-110 hover:shadow-xl"
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