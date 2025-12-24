import proposalImg from "../assets/feature-proposal.webp";
import collaboratorsImg from "../assets/feature-collaborators.webp";
import createDocImg from "../assets/feature-document.jpeg";

export default function Features() {
  return (
    <section className="-mt-29 relative z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Get booked and paid
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Send a proposal, collect a signature,
              and take payment without switching tabs.
            </p>

            {/* BIGGER IMAGE */}
            <div className="mt-14 flex justify-center">
              <img
                src={proposalImg}
                alt="Proposal Flow"
                className="w-[300px] md:w-[340px]"
              />
            </div>
          </div>

          {/* CARD 2 (CENTER) */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-900 whitespace-nowrap">
              Find collaborators you can trust
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Bring in a planner, DJ, photographer, or
              anyone else you need from a vetted marketplace
              when your week fills up.
            </p>

            {/* BIGGER IMAGE */}
            <div className="mt-12 flex justify-center">
              <img
                src={collaboratorsImg}
                alt="Collaborators"
                className="w-[320px] md:w-[360px]"
              />
            </div>

            
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              A few clicks to polished docs
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Create brochures, contracts, and email
              campaigns in minutes. Stay top of mind
              with automated follow ups.
            </p>

            {/* BIGGER IMAGE */}
            <div className="mt-14 flex justify-center">
              <img
                src={createDocImg}
                alt="Create Document"
                className="w-[280px] md:w-[320px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
