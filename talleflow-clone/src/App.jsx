import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import OrbitPage from "./components/OrbitPage";
import DocumentsAI from "./components/DocumentAI";
import ExploreOurFeatures from "./components/ExploreOurFeatures";
import Marketplace from "./components/Marketplace";
import LeadTracking from "./components/LeadTracking";
import EmailMarketing from "./components/EmailMarketing";
import Footer from "./components/Footer";

import StackedScroll from "./components/scroll/StackedScroll";
import mainBg from "./assets/main.avif";

export default function App() {
  return (
    <>
      {/* HERO + NAVBAR */}
      <div
        className="bg-no-repeat bg-top"
        style={{
          backgroundImage: `url(${mainBg})`,
          backgroundSize: "1300px 1000px",
        }}
      >
        <Navbar />
        <Hero />
      </div>

      {/* FEATURES + ORBIT */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <Features />
        <OrbitPage />
      </div>

      {/* STACKED SCROLL SECTIONS */}
      <StackedScroll>
        <DocumentsAI />
        <Marketplace />
        <LeadTracking />
        <EmailMarketing />
      </StackedScroll>

      {/* FEATURES SLIDER */}
      <ExploreOurFeatures />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
