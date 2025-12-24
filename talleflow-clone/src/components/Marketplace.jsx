import marketplaceImg from "../assets/marketplace.webp";

export default function Marketplace() {
  return (
    <section className="stack-section h-screen bg-[#efefed] flex items-center">
      <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT – IMAGE + PILLS */}
        <div className="relative flex justify-center items-center">

          {/* BACK PANEL */}
          <div className="absolute w-[560px] h-[560px] bg-white rounded-[40px]" />

          {/* MAIN IMAGE */}
          <img
            src={marketplaceImg}
            alt="Marketplace Network"
            className="relative z-10 w-[460px]"
          />

          {/* PILLS — MATCHING REFERENCE IMAGE */}

          {/* TOP LEFT */}
          <Pill className="top-[80px] left-[-180px]">
            Open A Service Storefront With Packages,
            <br />
            Add-Ons, And Invoices
          </Pill>

          {/* TOP RIGHT */}
          <Pill className="top-[120px] right-[-160px]">
            Hire Vetted Pros For Overflow And
            <br />
            White-Label Fulfillment
          </Pill>

          {/* CENTER RIGHT */}
          <Pill className="top-[300px] right-[-140px]">
            In-App Messaging With Scoped Deliverables
            <br />
            Keeps Work On Track
          </Pill>

          {/* BOTTOM LEFT */}
          <Pill className="bottom-[10px] left-[-180px]">
            Reviews And Ratings Managed
            <br />
            In One Place
          </Pill>
        </div>

        {/* RIGHT CONTENT */}
        <div className="ml-20">
          <h2 className="text-[48px] font-medium text-black leading-tight">
            Marketplace For <br /> Creative Pros
          </h2>

          <p className="mt-6 max-w-[520px] text-[16px] leading-[28px] text-black/70">
            Find collaborators, white-label partners, or sell your services and
            digital assets. The TalleFlow Marketplace connects trusted peers so
            projects move from “need help” to delivered without the back-and-forth.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl text-[16px]">
            Explore The Marketplace
          </button>
        </div>

      </div>
    </section>
  );
}

/* PILL COMPONENT */
function Pill({ children, className }) {
  return (
    <div
      className={`absolute z-20 bg-white px-8 py-6 rounded-2xl
      text-[19px] leading-[22px] text-[#1d554b]
      shadow-[0_14px_40px_rgba(0,0,0,0.15)]
      ${className}`}
    >
      {children}
    </div>
  );
}
