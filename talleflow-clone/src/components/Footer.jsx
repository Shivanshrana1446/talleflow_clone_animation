import bigLogo from "../assets/logo.jpeg";
import emailIcon from "../assets/email.jpeg";
import mapIcon from "../assets/map.jpeg";

import instagram from "../assets/instagrams.jpeg";
import facebook from "../assets/facebooks.jpeg";
import twitter from "../assets/twitters.jpeg";
import youtube from "../assets/youtubes.jpeg";
import tiktok from "../assets/tiktok.jpeg";
import linkedin from "../assets/linkeds.jpeg";

export default function Footer() {
  return (
    <div className="px-6 md:px-20 mt-32 mb-24">

      {/* ================= CTA SECTION ================= */}
      <div className="relative bg-black rounded-[36px] py-24 px-6 text-center mb-24 overflow-hidden">

        {/* BIG BACKGROUND SYMBOL */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.15]">
          <span className="text-[520px] font-bold text-[#12d6a0]">?</span>
        </div>

        <h2 className="relative text-white text-[40px] md:text-[56px] font-bold mb-6">
          Have Questions?
        </h2>

        <p className="relative text-[#9ca3af] max-w-2xl mx-auto text-[18px] leading-[32px] mb-10">
          Should you require further information about our product or its
          features, don’t hesitate to get in touch with us.
        </p>

        <button className="relative bg-[#12d6a0] text-black px-10 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Sign Up
        </button>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="bg-black rounded-[36px] p-10 md:p-20 text-white">

        {/* TITLE */}
        <h2 className="text-[38px] md:text-[64px] font-bold mb-16">
          Connect, Co-Create & Grow
        </h2>

        {/* NEWSLETTER */}
        <div className="flex flex-wrap items-end gap-8 mb-20">

          <div>
            <p className="text-[#9ca3af] mb-2">Your Name</p>
            <input
              placeholder="for example : Jack"
              className="w-[320px] bg-transparent border border-[#333] rounded-xl px-4 py-3 text-white outline-none"
            />
          </div>

          <div>
            <p className="text-[#9ca3af] mb-2">Your Email</p>
            <input
              placeholder="Jack@yourmail.com"
              className="w-[320px] bg-transparent border border-[#333] rounded-xl px-4 py-3 text-white outline-none"
            />
          </div>

          <button className="h-[56px] px-10 bg-[#12d6a0] text-black font-semibold rounded-xl hover:scale-105 transition">
            Join our Newsletter
          </button>
        </div>

        {/* LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            {["Home", "About Us", "FAQ’s", "Blog"].map(item => (
              <p key={item} className="text-[#9ca3af] mb-2 hover:text-[#12d6a0] cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            {[
              "Smart Client Portal",
              "Unified Dashboard",
              "Workflow Automation",
              "Messaging & Referrals",
            ].map(item => (
              <p key={item} className="text-[#9ca3af] mb-2 hover:text-[#12d6a0] cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            {[
              "Lead Form & Scheduling",
              "Online Proposal",
              "Invoices & Payments",
              "Custom Branding",
            ].map(item => (
              <p key={item} className="text-[#9ca3af] mb-2 hover:text-[#12d6a0] cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            {[
              "Communities",
              "Integrations",
              "Email Marketing",
              "AI-Powered Assistance",
            ].map(item => (
              <p key={item} className="text-[#9ca3af] mb-2 hover:text-[#12d6a0] cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* CONTACT + LOGO */}
        <div className="flex flex-wrap justify-between items-start gap-12 mb-10">

          <div>
            <h4 className="font-semibold mb-4">Contact us</h4>

            <div className="flex items-center gap-3 mb-3">
              <img src={emailIcon} className="w-5" />
              <p className="text-[#9ca3af]">info@Talleflow.com</p>
            </div>

            <div className="flex items-center gap-3">
              <img src={mapIcon} className="w-5" />
              <p className="text-[#9ca3af]">Orange, CA</p>
            </div>
          </div>

          <img src={bigLogo} className="w-[260px]" />
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-[#333] mb-6" />

        {/* BOTTOM BAR */}
        <div className="flex flex-wrap justify-between items-center gap-6">

          <p className="text-[#9ca3af] text-sm">
            © 2025 TalleFlow. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <p className="hover:text-[#12d6a0] cursor-pointer">Terms and Conditions</p>
            <p className="hover:text-[#12d6a0] cursor-pointer">Privacy Policy</p>
          </div>

          <div className="flex gap-3">
            {[linkedin, instagram, facebook, twitter, youtube, tiktok].map(
              (icon, i) => (
                <img
                  key={i}
                  src={icon}
                  className="w-9 h-9 bg-[#12d6a0] p-2 rounded-lg cursor-pointer"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
