import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import orbitBg from "../assets/orbit-bg.avif";

// ORBIT IMAGES
import o1 from "../assets/orbit-1.webp";
import o2 from "../assets/orbit-2.webp";
import o3 from "../assets/orbit-3.webp";
import o4 from "../assets/orbit-4.webp";
import o5 from "../assets/orbit-5.webp";
import o6 from "../assets/orbit-6.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function OrbitPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const rings = containerRef.current.querySelectorAll(".orbit-ring");

    rings.forEach((ring) => {
      const speed = Number(ring.dataset.speed);
      const avatars = ring.querySelectorAll(".orbit-avatar");

      gsap.to(ring, {
        rotation: 360 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      avatars.forEach((avatar) => {
        gsap.to(avatar, {
          rotation: -360 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
          },
        });
      });
    });
  }, []);

  return (
  <section
  ref={containerRef}
  className="relative min-h-screen -mt-[-10px] mb-[230px] z-10"
>



      {/* STICKY SCENE */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-visible -z-10">
        {/* MAIN ORBIT BG */}
        <img
          src={orbitBg}
          alt=""
          className="absolute w-[1000px] h-[1000px] object-contain"
        />

        {/* CENTER CONTENT */}
        <div className="relative z-20 text-center">
          <h2 className="text-[46px] md:text-[56px] leading-tight text-black">
            Discover Creative
            <br />
            Communities
          </h2>

          <button className="mt-8 bg-emerald-500 hover:bg-emerald-600 transition text-white px-8 py-3 rounded-xl font-medium shadow-lg">
            Sign Up
          </button>
        </div>

        {/* ORBIT SYSTEM */}
        <div className="absolute w-[1100px] h-[1100px] pointer-events-none ">
          {/* RING 1 — INNER */}
          <div
            data-speed="0.4"
            className="orbit-ring absolute inset-0 rounded-full"
          >
            <img
              src={o1}
              className="orbit-avatar absolute top-[6%] left-1/2 -translate-x-1/2
                         w-26 h-26 rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* RING 2 — BIGGEST */}
          <div
            data-speed="-0.25"
            className="orbit-ring absolute inset-[120px] rounded-full"
          >
            <img
              src={o2}
              className="orbit-avatar absolute left-[-32px] top-1/2
                         w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <img
              src={o3}
              className="orbit-avatar absolute right-[-28px] top-[35%]
                         w-26 h-26 rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* RING 3 — OUTER */}
          <div
            data-speed="0.18"
            className="orbit-ring absolute inset-[140px] rounded-full"
          >
            <img
              src={o4}
              className="orbit-avatar absolute bottom-[-22px] left-[42%]
                         w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <img
              src={o5}
              className="orbit-avatar absolute top-[10%] right-[22%]
                         w-26 h-26 rounded-full border-4 border-white shadow-lg"
            />
            <img
              src={o6}
              className="orbit-avatar absolute left-[12%] top-[22%]
                         w-26 h-26 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
