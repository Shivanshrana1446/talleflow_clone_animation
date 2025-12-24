export default function Hero() {
  return (
    <section className="pt-40 pb-20 relative z-10">
      <div className="max-w-[1100px] mx-auto px-4 text-center">

        {/* Tag line */}
        <p className="text-[18px] font-medium tracking-[0.08em] uppercase text-[#2f2f2f] mb-6">
          CLIENT RELATIONSHIP MANAGER
        </p>

        {/* Main Heading */}
        <h1 className="text-[44px] md:text-[50px] font-normal leading-[1.18] text-black">
          The All-In-One Business Management
          <br />
          Tool For Event Professionals
        </h1>

        {/* Sub Text */}
        <p className="mt-6 text-[16px] text-gray-500 max-w-[720px] mx-auto leading-[1.6]">
          Run Your Creative Business Like Clockwork — Whether You Plan,
          Perform, Or Capture.
        </p>

        {/* Email Box */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex items-center bg-[#2f2f2f] rounded-xl w-full max-w-[520px] h-[64px] px-5 shadow-lg">
            <span className="text-gray-400 text-2xl mr-3">✉</span>

            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent outline-none text-[18px] text-white placeholder-gray-400"
            />

            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 transition text-[#2f2f2f] text-[14px] font-semibold px-5 py-3 rounded-lg">
              Join For Free
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
