import { useRef } from "react";

import chatImg from "../assets/chat.jpeg";
import coupleImg from "../assets/couple.jpeg";
import chartImg from "../assets/chart.jpeg";
import financeImg from "../assets/finance.jpeg";

export default function ExploreOurFeatures() {
  const scrollRef = useRef(null);

  const features = [
    {
      title: "Smart Client Portal",
      desc: "Give clients one hub for files, updates, and communication.",
      img: chatImg,
    },
    {
      title: "Lead Forms & Scheduling",
      desc: "Capture leads and book new clients faster.",
      img: coupleImg,
    },
    {
      title: "Unified Dashboard",
      desc: "See everything in one place and take action instantly.",
      img: chartImg,
    },
    {
      title: "Invoices & Payments",
      desc: "Get paid on time with simple, reliable billing.",
      img: financeImg,
    },
    {
      title: "Smart Messaging",
      desc: "Chat with clients easily and keep everything organized.",
      img: chatImg,
    },
    {
      title: "Analytics",
      desc: "Track performance and insights visually.",
      img: chartImg,
    },
    {
      title: "Finance Tools",
      desc: "Manage income, expenses, and payouts in one place.",
      img: financeImg,
    },
    {
      title: "Workspace",
      desc: "Handle files, tasks, and collaboration effortlessly.",
      img: coupleImg,
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-[40px] font-bold text-black">
          Explore Our Features
        </h2>

        <button className="bg-[#01d2ab] px-6 py-3 rounded-xl text-black font-medium hover:bg-[#12d6a0] transition">
          View All
        </button>
      </div>

      {/* SLIDER */}
      <div className="relative">
        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="
            absolute left-[-20px] top-1/2 -translate-y-1/2 z-20
            w-[55px] h-[55px] rounded-full
            bg-[#01d2ab] text-black text-[28px]
            flex items-center justify-center
            shadow-[0_4px_20px_rgba(0,0,0,0.15)]
            hover:bg-[#12d6a0] hover:scale-110 transition
          "
        >
          ←
        </button>

        {/* CARDS ROW */}
        <div
          ref={scrollRef}
          className="
            flex gap-10 overflow-x-auto scroll-smooth
            scrollbar-hide px-2
          "
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] snap-start"
            >
              {/* IMAGE CARD */}
              <div className="bg-[#e9fbf6] rounded-[28px] p-4 mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] object-contain"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-[20px] font-bold text-black">
                {item.title}
              </h3>

              <p className="mt-2 text-[15px] text-black/60 leading-[26px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="
            absolute right-[-20px] top-1/2 -translate-y-1/2 z-20
            w-[55px] h-[55px] rounded-full
            bg-[#01d2ab] text-black text-[28px]
            flex items-center justify-center
            shadow-[0_4px_20px_rgba(0,0,0,0.15)]
            hover:bg-[#12d6a0] hover:scale-110 transition
          "
        >
          →
        </button>
      </div>
    </section>
  );
}
