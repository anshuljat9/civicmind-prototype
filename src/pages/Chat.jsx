import { useState } from "react";

export default function Chat() {
  const [selected, setSelected] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <section
      id="chat"
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full">

        {!selected && (
          <div className="bg-slate-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              CivicMind Assistant
            </h2>

            <div className="bg-slate-700 p-4 rounded-xl mb-6">
              Namaste 👋
              <br />
              Please select your category.
            </div>

            <div className="grid md:grid-cols-2 gap-4">

              <button
                onClick={() => setSelected("farmer")}
                className="bg-purple-600 hover:bg-purple-700 p-4 rounded-xl"
              >
                👨‍🌾 Farmer
              </button>

              <button
                onClick={() => setSelected("student")}
                className="bg-purple-600 hover:bg-purple-700 p-4 rounded-xl"
              >
                🎓 Student
              </button>

              <button
                onClick={() => setSelected("woman")}
                className="bg-purple-600 hover:bg-purple-700 p-4 rounded-xl"
              >
                👩 Woman
              </button>

              <button
                onClick={() => setSelected("worker")}
                className="bg-purple-600 hover:bg-purple-700 p-4 rounded-xl"
              >
                👷 Worker
              </button>

            </div>

          </div>
        )}

        {/* FARMER */}

        {selected === "farmer" && (
          <div className="bg-slate-800 rounded-2xl p-8">

            <button
              onClick={() => setSelected("")}
              className="mb-6 text-purple-400 hover:text-purple-300"
            >
              ← Back
            </button>

            <h2 className="text-3xl font-bold mb-6">
              👨‍🌾 Farmer Eligibility Check
            </h2>

            <div className="space-y-4">

              <input
                type="number"
                placeholder="Age"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="text"
                placeholder="State"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="number"
                placeholder="Land Size (Acres)"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="number"
                placeholder="Annual Income"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <button
                onClick={() => {
                  setIsAnalyzing(true);

                  setTimeout(() => {
                    setIsAnalyzing(false);
                    setShowResults(true);
                  }, 2000);
                }}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
              >
                Analyze Eligibility
              </button> 

              {isAnalyzing && (
                <div className="mt-6 bg-blue-900/30 border border-blue-700 p-5 rounded-xl">
                  <h3 className="text-blue-400 font-bold text-lg">
                    🤖 CivicMind AI
                  </h3>

                  <p className="mt-2">
                     Analyzing eligibility...
                  </p>
                </div>
              )}                           

              {showResults && (
                <div className="mt-6 bg-green-900/30 border border-green-700 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-green-400">
                  ✅ PM Kisan Samman Nidhi
                </h3>

                <p className="mt-2">
                  Benefit: ₹6000 per year
                </p>

    <button className="mt-4 bg-purple-600 px-4 py-2 rounded-lg">
      Apply Through CSC
    </button>
  </div>
)}

            </div>

          </div>
        )}

        {/* STUDENT */}

        {selected === "student" && (
          <div className="bg-slate-800 rounded-2xl p-8">

            <button
              onClick={() => setSelected("")}
              className="mb-6 text-purple-400 hover:text-purple-300"
            >
              ← Back
            </button>

            <h2 className="text-3xl font-bold mb-6">
              🎓 Student Eligibility Check
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="number"
                placeholder="Age"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="text"
                placeholder="State"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="text"
                placeholder="Course / Degree"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="number"
                placeholder="Family Annual Income"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl">
                Check Scholarships
              </button>

            </div>

          </div>
        )}

        {/* WOMAN */}

        {selected === "woman" && (
          <div className="bg-slate-800 rounded-2xl p-8">

            <button
              onClick={() => setSelected("")}
              className="mb-6 text-purple-400 hover:text-purple-300"
            >
              ← Back
            </button>

            <h2 className="text-3xl font-bold mb-6">
              👩 Women Eligibility Check
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="number"
                placeholder="Age"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="text"
                placeholder="State"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="text"
                placeholder="Marital Status"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="number"
                placeholder="Family Annual Income"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl">
                Check Schemes
              </button>

            </div>

          </div>
        )}

        {/* WORKER */}

        {selected === "worker" && (
          <div className="bg-slate-800 rounded-2xl p-8">

            <button
              onClick={() => setSelected("")}
              className="mb-6 text-purple-400 hover:text-purple-300"
            >
              ← Back
            </button>

            <h2 className="text-3xl font-bold mb-6">
              👷 Worker Eligibility Check
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="number"
                placeholder="Age"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="text"
                placeholder="State"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="text"
                placeholder="Occupation"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <input
                type="number"
                placeholder="Monthly Income"
                className="w-full p-3 rounded-xl bg-slate-700 outline-none"
              />

              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl">
                Check Schemes
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}