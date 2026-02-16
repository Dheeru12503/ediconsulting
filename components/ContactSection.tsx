"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#1B505B] py-20 px-6 md:px-12 lg:px-20">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT — CONTACT INFO */}
        <div className="text-white space-y-8">
          
          <h2 className="text-4xl md:text-5xl font-serif underline decoration-white decoration-2 underline-offset-4">
            Contact Us
          </h2>

          <p className="text-gray-200 leading-relaxed max-w-lg">
            Whether you need EDI consulting, integration support, or system
            optimization — we’re here to help. Reach out to discuss your
            requirements and operational challenges.
          </p>

          {/* Info Blocks */}
          <div className="space-y-6">

            {/* Address */}
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-300">
                123 Business Avenue, Supply Chain District,
                <br />
                New York, NY 10001
              </p>
            </div>

            {/* Email */}
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-300">
                contact@ediconsulting.com
              </p>
            </div>

            {/* Phone */}
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-300">
                +1 (555) 123-4567
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-[#03343D] rounded-2xl p-8 md:p-10 shadow-xl">

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-white text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-white text-sm">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-white text-[#1B505B] font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
