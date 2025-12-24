import dashboardImg from "../assets/lead-dashboard.webp";

export default function LeadTracking() {
  return (
    <section className="stack-section h-screen bg-[#01d2ab] flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[56px] leading-[68px] font-medium text-black">
            Lead Generation <br />
            & Project Tracking
          </h2>

          <p className="mt-8 max-w-[560px] text-[16px] leading-[30px] text-black/70">
            Capture leads from your site, route them to the right pipeline, and
            track every step to done. Stay on top of tasks, timelines, and
            handoffs with a workflow that fits how you work.
          </p>

          <button className="mt-10 bg-black text-white px-8 py-4 rounded-xl text-[16px]">
            Track Your Pipeline
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden lg:block">

          {/* BACK PANEL (touch bottom only) */}
          <div className="absolute right-[90px] top-1 bottom-0 w-[560px] h-[700px] bg-[#9af0dc] rounded-[36px] z-0" />

          {/* IMAGE + PILLS WRAPPER */}
          <div className="relative z-10 w-[620px] mx-auto">

            {/* DASHBOARD IMAGE */}
            <img
              src={dashboardImg}
              alt="Lead Tracking Dashboard"
              className="relative right-20 z-10 w-full object-contain"
            />

            {/* PILLS — OVER IMAGE */}
            <Pill
              text={<>Lead Capture Forms And Embeddable Widgets With <br/> Source Tracking</>}
              className="top-[-40px] right-[40px]"
            />

            <Pill
              text="Kanban Pipelines, Stages, And Reminders"
              className="top-[90px] left-[-160px]"
            />

            <Pill
              text={<>Project Plans With Tasks, Checklists,<br/> Files, And Calendar Sync</>}
              className="top-[150px] right-[-80px]"
            />

            <Pill
              text="Automated Follow-Ups And Status Updates To Clients"
              className="bottom-[-40px] left-[40px]"
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
      className={`absolute z-20 bg-white px-7 py-5 rounded-2xl
      text-[19px] text-[#1d554b]
      shadow-[0_14px_40px_rgba(0,0,0,0.18)]
      whitespace-nowrap inline-flex items-center
      ${className}`}
    >
      {text}
    </div>
  );
}
