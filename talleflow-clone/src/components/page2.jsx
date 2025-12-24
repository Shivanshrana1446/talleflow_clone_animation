import { FileText, CheckCircle, Plus } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Get booked and paid
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Send a proposal, collect a signature, and take payment without
              switching tabs.
            </p>

            <div className="mt-10 flex items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2 text-emerald-500">
                <FileText />
                <span className="text-sm font-medium">Proposal</span>
              </div>

              <div className="w-10 h-[2px] bg-emerald-200" />

              <div className="flex flex-col items-center gap-2 text-gray-300">
                <FileText />
                <span className="text-sm">Contract</span>
              </div>

              <div className="w-10 h-[2px] bg-gray-200" />

              <div className="flex flex-col items-center gap-2 text-gray-300">
                <FileText />
                <span className="text-sm">Payment</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Find collaborators you can trust
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Bring in a planner, DJ, photographer, or anyone else you need from
              a vetted marketplace.
            </p>

            <div className="mt-10 bg-gray-50 rounded-2xl p-10 flex items-center justify-center">
              <CheckCircle size={48} className="text-emerald-500" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              A few clicks to polished docs
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Create brochures, contracts, and email campaigns in minutes.
              Stay top of mind with automated follow ups.
            </p>

            <div className="mt-10 flex justify-center">
              <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium shadow-md transition">
                <Plus size={18} />
                Create a Document
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
