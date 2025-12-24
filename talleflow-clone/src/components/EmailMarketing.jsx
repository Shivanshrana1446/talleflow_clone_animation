import emailMock from "../assets/email-mock.avif";

export default function EmailMarketing() {
  return (
    <section className="min-h-screen bg-white flex items-center overflow-hidden">
      <div className="max-w-[] bg-[#e6e6e6] mx-auto px-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative">

        {/* ================= LEFT VISUAL ================= */}
        <div className="relative h-[820px] bottom-0 w-full flex justify-center overflow-visible">

          {/* BACKGROUND PANEL (LOW OPACITY, TOUCHES BOTTOM) */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-[620px]
              h-[560px]
              // bg-[#e6e6e6]
              // opacity-100
              rounded-[48px]
              z-0
            "
          />

          {/* EMAIL IMAGE */}
          <img
            src={emailMock}
            alt="Email Editor"
            className="
              relative
              z-10
              w-[600px]
              -translate-y-[40px]
              rounded-[28px]
              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            "
          />

          {/* FLOATING PILLS */}
          <Pill className="top-[300px] -left-[40px]">
            Automations For Welcome, Reminder,<br />
            And Post-Project Requests
          </Pill>

          <Pill className="top-[320px] -right-[160px]">
            Audience Segmentation By Tags,<br />
            Pipeline Stage, And Behavior
          </Pill>

          <Pill className="top-[430px] -right-[120px]">
            Templates For Announcements, Nurture<br />
            Sequences, And Updates
          </Pill>

          <Pill className="bottom-[40px] -left-[20px]">
            Deliverability, Consent Management,<br />
            And Performance Analytics
          </Pill>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="pl-32 relative z-30">
          <h2 className="text-[56px] leading-[68px] font-semibold text-black">
            Email Marketing
          </h2>

          <p className="mt-8 max-w-[520px] text-[18px] leading-[32px] text-black/70">
            Send beautiful campaigns and automated sequences that turn
            leads into bookings. Segment by project stage, service
            type, or engagement to keep messages relevant.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-4 rounded-xl text-[16px] font-medium">
            Send Your First Campaign
          </button>
        </div>

      </div>
    </section>
  );
}

/* ================= PILL COMPONENT ================= */
function Pill({ children, className }) {
  return (
    <div
      className={`
        absolute z-20
        bg-white
        px-8 py-6
        rounded-[24px]
        shadow-[0_18px_45px_rgba(0,0,0,0.18)]
        text-[17px]
        text-[#1d554b]
        leading-[28px]
        max-w-[420px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
