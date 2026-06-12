import Navbar from "../components/Navbar";
import Chat from "./Chat";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          <div className="inline-block px-4 py-2 rounded-full bg-purple-900/40 text-purple-300 mb-6">
            Privacy First AI Assistant
          </div>

          <h1 className="text-6xl md:text-7xl font-bold">
            CivicMind
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            Helping citizens discover government schemes,
            check eligibility, fill applications and connect
            with CSC centers.
          </p>

          <a
            href="#chat"
            className="mt-10 inline-block px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
          >
            Start Assistant
          </a>

          <div className="grid md:grid-cols-3 gap-6 mt-20">

            <div className="p-6 border border-slate-800 rounded-2xl">
              <h2 className="text-4xl font-bold text-purple-400">
                50Cr+
              </h2>
              <p className="text-slate-400">
                Citizens Can Benefit
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-2xl">
              <h2 className="text-4xl font-bold text-purple-400">
                ₹0
              </h2>
              <p className="text-slate-400">
                Cost To Citizens
              </p>
            </div>

            <div className="p-6 border border-slate-800 rounded-2xl">
              <h2 className="text-4xl font-bold text-purple-400">
                CSC
              </h2>
              <p className="text-slate-400">
                Assisted Support
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Chat Section */}
      <Chat />
    </>
  );
}