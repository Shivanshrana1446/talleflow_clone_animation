import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StackedScroll({ children }) {
  useEffect(() => {
    const sections = gsap.utils.toArray(".stack-section");

    if (!sections.length) return;

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return <>{children}</>;
}
