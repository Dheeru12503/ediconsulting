"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="w-full bg-[#0F2F35] text-white">
      
      {/* TOP FOOTER */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        {/* COMPANY INFO */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            EDI Consulting
          </h2>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Delivering enterprise-grade EDI solutions, integrations,
            and consulting services across retail, manufacturing,
            and logistics ecosystems.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center bg-[#1B505B] rounded-lg hover:bg-[#2F7C8A] transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li onClick={() => handleLinkClick('consulting-services')} className="hover:text-white cursor-pointer">
              → Consulting Services
            </li>
            <li onClick={() => handleLinkClick('erp-integrations')} className="hover:text-white cursor-pointer">
              → ERP Integrations
            </li>
            <li onClick={() => handleLinkClick('trading-partners')} className="hover:text-white cursor-pointer">
              → Trading Partners
            </li>
            <li onClick={() => handleLinkClick('edi-transactions')} className="hover:text-white cursor-pointer">
              → EDI Transactions
            </li>
            <li className="hover:text-white cursor-pointer">
              → Contact Us
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            
            <div>
              <p className="text-white font-medium">
                Contact Person:
              </p>
              <p>Ali Ather</p>
            </div>

            <div>
              <p className="text-white font-medium">
                Email:
              </p>
              <a href="mailto:ATHER_SHAHIDI@HOTMAIL.COM" className="break-all hover:text-white transition">
                ATHER_SHAHIDI@HOTMAIL.COM
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#1B505B]">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          
          <p>
            © {new Date().getFullYear()} EDI Consulting. All rights reserved.
          </p>

          <div className="flex gap-6">
            <p className="hover:text-white cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-white cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
