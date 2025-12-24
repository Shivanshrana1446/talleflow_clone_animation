import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/talleflow.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative top-11 inset-x-1 z-50">

      {/* navbar-wrapper */}
      <div className="w-full lg:max-w-6xl mx-auto px-5">
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

          {/* NAVBAR */}
          <div
            className="
              flex items-center justify-between
              px-6 py-[14px]
              text-[16px] leading-[18px]
              
              text-[#333]
              capitalize
            "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {/* LOGO */}
            <div className="flex items-center cursor-pointer hover:opacity-80 transition">
              <img
                src={logo}
                alt="TalleFlow"
                className="h-[28px] w-auto select-none"
              />
            </div>

            {/* DESKTOP LINKS */}
            <nav className="hidden lg:flex items-center gap-7 ">
              <span className="cursor-pointer text-emerald-500">
                Home
              </span>

              <div className="flex items-center gap-[2px] cursor-pointer hover:text-emerald-500 transition">
                Features
                <ChevronDown size={14} />
              </div>

              <span className="cursor-pointer hover:text-emerald-500 transition">
                Pricing
              </span>

              <span className="cursor-pointer hover:text-emerald-500 transition">
                About Us
              </span>

              <div className="flex items-center gap-[2px] cursor-pointer hover:text-emerald-500 transition">
                Resources
                <ChevronDown size={14} />
              </div>

              <span className="cursor-pointer hover:text-emerald-500 transition">
                Contact
              </span>
            </nav>

            {/* ACTIONS */}
            <div className="hidden lg:flex items-center gap-6">
              <span className="cursor-pointer hover:text-emerald-500 transition">
                Sign In
              </span>

              <button className="bg-emerald-400 hover:bg-emerald-600 text-black  px-6 py-[16px] rounded-xl transition-shadow hover:shadow-lg">
                Join For Free
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div
              className="
                lg:hidden
                px-6 pb-6
                flex flex-col gap-4
                text-[14px] leading-[20px]
                font-medium text-[#333] capitalize
              "
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="hover:text-emerald-500">Home</span>
              <span className="hover:text-emerald-500">Features</span>
              <span className="hover:text-emerald-500">Pricing</span>
              <span className="hover:text-emerald-500">About Us</span>
              <span className="hover:text-emerald-500">Resources</span>
              <span className="hover:text-emerald-500">Contact</span>

              <button className="mt-3 bg-emerald-500 hover:bg-emerald-600 text-white py-[10px] rounded-xl font-medium transition">
                Join For Free
              </button>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
