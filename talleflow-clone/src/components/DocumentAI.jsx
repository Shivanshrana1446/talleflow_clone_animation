import tabletImg from "../assets/computer.webp";

export default function DocumentsAI() {
  return (
    <section className="stack-section h-screen bg-[#01d2ab] flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[50px] leading-[60px] font-medium text-black">
            Documents & Forms <br />(Now With AI)
          </h2>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[30px] text-black/70">
            Create proposals, contracts, invoices, brochures, and <br />
            questionnaires in minutes. Generate a full document <br />
            from a prompt with our AI document builder, then refine <br />
            with drag and drop. Collect e-signatures and <br />
            payments in one flow. Auto-fill client and project data <br />
            to keep everything accurate and on brand.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-xl text-[18px]">
              Build Your First Document
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-xl text-[18px]">
              Try The AI Builder
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative hidden lg:flex items-end justify-center h-full">

          {/* BACK PANEL (touch bottom, not top) */}
          <div className="absolute right-[40px] top-1 bottom-0 w-[560px] h-[980px] bg-[#9af0dc] rounded-[32px] z-0" />

          {/* IMAGE + PILLS WRAPPER (CENTERED) */}
          <div className="relative z-10 mb-[-120px] w-[600px]">

            {/* IMAGE */}
            <img
              src={tabletImg}
              alt="Documents Preview"
              className="w-full object-contain"
            />

            {/* PILLS */}
            <Pill
              text="Proposals, Contracts, And Invoices Ready Faster"
              className="top-[-120px] right-[0px]"
            />

            <Pill
              text="Branded Forms That Look Pro On Mobile And Desktop"
              className="top-[-25px] left-[-60px]"
            />

            <Pill
              text="AI Builds Your Proposal From A Prompt"
              className="top-[60px] right-[320px]"
            />

            <Pill
              text={
                <>
                  Nail Every Detail With <br />
                  Project-Ready Questionnaires
                </>
              }
              className="top-[40px] -right-[70px]"
            />

            <Pill
              text="Drag And Drop To Polish Every Detail"
              className="top-[350px] right-[460px]"
            />

            <Pill
              text="Auto-Fill Client And Project Data Accurately"
              className="top-[400px] right-[-100px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* PILL COMPONENT */
function Pill({ text, className }) {
  return (
    <div
      className={`absolute z-30 bg-white px-8 py-5 rounded-xl
      text-[18px] text-[#1d554b]
      shadow-[0_14px_40px_rgba(0,0,0,0.18)]
      inline-flex items-center whitespace-nowrap
      max-w-[520px]
      ${className}`}
    >
      {text}
    </div>
  );
}