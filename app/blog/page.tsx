"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";

export default function BlogPage() {
  return (
    <div className="w-full bg-[#F1F7F8] text-[#12373F] pt-[80px] md:pt-[100px]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-[#1B505B] mb-4 mx-auto"></div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            EDI and Automation: The Backbone of Modern Digital Supply Chains
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            How EDI automation is transforming business operations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <p className="text-gray-700 leading-relaxed">
              In today's fast-moving business environment, speed, accuracy, and reliability are no longer optional — they are critical. Companies that still rely on manual processes, emails, and spreadsheets to exchange business documents often face delays, errors, and rising operational costs. This is where Electronic Data Interchange (EDI) combined with automation becomes a game-changer.
            </p>
          </div>

          {/* What is EDI */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#1B505B]">
              What Is EDI?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Electronic Data Interchange (EDI) is the structured, computer-to-computer exchange of business documents between trading partners. Instead of manually sending purchase orders, invoices, or shipping notices, EDI allows systems to communicate directly using standardized formats.
            </p>
            <div className="bg-[#F1F7F8] p-5 rounded-xl mt-4">
              <h3 className="font-semibold text-base mb-3 text-[#12373F]">Common EDI Transactions Include:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1B505B] mr-2">•</span>
                  <span>Purchase Orders (850)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B505B] mr-2">•</span>
                  <span>Advance Ship Notices (856)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B505B] mr-2">•</span>
                  <span>Invoices (810)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B505B] mr-2">•</span>
                  <span>Inventory and Order Status Updates</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Automation Matters */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#1B505B]">
              Why Automation Matters in EDI
            </h2>
            <p className="text-gray-700 leading-relaxed">
              EDI alone is powerful — but EDI with automation is where real efficiency begins. Automation connects EDI transactions directly to internal systems such as ERP, WMS, and accounting platforms, allowing orders, invoices, alerts, and reports to flow automatically.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#1B505B]">
              Key Benefits of EDI Automation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Automated EDI delivers faster transaction processing, improved accuracy and compliance, reduced operational costs, scalability for growth, and proactive monitoring through alerts and reporting.
            </p>
          </div>

          {/* Real-World Application */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#1B505B]">
              Real-World EDI Automation in Action
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In a fully automated environment, purchase orders flow directly into ERP systems, inventory and shipping processes trigger automatically, and invoices and shipment notices are sent without manual intervention.
            </p>
          </div>

          {/* Future of EDI */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#1B505B]">
              The Future of EDI Is Intelligent Automation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Modern EDI is evolving toward intelligent automation, including exception handling, dashboards, cloud-based platforms, and advanced monitoring tools that make data exchange seamless and reliable.
            </p>
          </div>
          
        </div>
      </section>

      <SubscribeSection />
      <Footer />
    </div>
  );
}
