import { useState } from "react";
import { getSchemeRecommendations } from "../services/gemini";

export default function Chat() {
  const [selected, setSelected] = useState("");
  const [language, setLanguage] = useState("english");

  // Farmer
  const [age, setAge] = useState("");
  const [stateName, setStateName] = useState("");
  const [land, setLand] = useState("");
  const [income, setIncome] = useState("");

  // Student
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentState, setStudentState] = useState("");
  const [course, setCourse] = useState("");
  const [studentIncome, setStudentIncome] = useState("");

  // Woman
  const [womanName, setWomanName] = useState("");
  const [womanAge, setWomanAge] = useState("");
  const [womanState, setWomanState] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [womanIncome, setWomanIncome] = useState("");

  // Worker
  const [workerName, setWorkerName] = useState("");
  const [workerAge, setWorkerAge] = useState("");
  const [workerState, setWorkerState] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workerIncome, setWorkerIncome] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleFarmerCheck() {
  try {
    setLoading(true);

    const response = await getSchemeRecommendations({
      category: "Farmer",
      age,
      state: stateName,
      land,
      income,
      language,
    });

    setResult(response);
  } catch (error) {
    console.error("FULL ERROR:", error);

    setResult(
      "❌ " +
        (error?.message ||
          error?.toString() ||
          "Unknown Error")
    );
  } finally {
    setLoading(false);
  }
}

  async function handleStudentCheck() {
  try {
    setLoading(true);

    const response = await getSchemeRecommendations({
    category: "Student",
    name: studentName,
    age: studentAge,
    state: studentState,
    course,
    income: studentIncome,
    language,
  });

    setResult(response);
  } catch (error) {
    console.error("FULL ERROR:", error);

    setResult(
      "❌ " +
        (error?.message ||
          error?.toString() ||
          "Unknown Error")
    );
  } finally {
    setLoading(false);
  }
}
  async function handleWomanCheck() {
  try {
    setLoading(true);

    const response = await getSchemeRecommendations({
    category: "Woman",
    name: womanName,
    age: womanAge,
    state: womanState,
    maritalStatus,
    income: womanIncome,
    language,
  });

    setResult(response);
  } catch (error) {
    console.error("FULL ERROR:", error);

    setResult(
      "❌ " +
        (error?.message ||
          error?.toString() ||
          "Unknown Error")
    );
  } finally {
    setLoading(false);
  }
}

  async function handleWorkerCheck() {
  try {
    setLoading(true);

    const response = await getSchemeRecommendations({
    category: "Worker",
    name: workerName,
    age: workerAge,
    state: workerState,
    occupation,
    income: workerIncome,
    language,
  });
    setResult(response);
  } catch (error) {
    console.error("FULL ERROR:", error);

    setResult(
      "❌ " +
        (error?.message ||
          error?.toString() ||
          "Unknown Error")
    );
  } finally {
    setLoading(false);
  }
}
  function speakResult(text) {
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang =
    language === "hindi"
      ? "hi-IN"
      : "en-US";

  speech.rate = 0.85;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}


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

    {/* LANGUAGE SELECTOR */}

    <div className="flex gap-3 mb-6">
      <button
        onClick={() => setLanguage("english")}
        className={`px-4 py-2 rounded-lg ${
          language === "english"
            ? "bg-purple-600"
            : "bg-slate-700"
        }`}
      >
        🇬🇧 English
      </button>

      <button
        onClick={() => setLanguage("hindi")}
        className={`px-4 py-2 rounded-lg ${
          language === "hindi"
            ? "bg-purple-600"
            : "bg-slate-700"
        }`}
      >
        🇮🇳 Hindi
      </button>
    </div>

    <div className="bg-slate-700 p-4 rounded-xl mb-6">
      Namaste 👋
      <br />
      Please select your category.
    </div>

            <div className="grid md:grid-cols-2 gap-4">

              <button
                onClick={() => {
                  setResult("");
                  setSelected("farmer");
                }}
                className="bg-purple-600 hover:bg-purple-700 p-4 rounded-xl"
              >
                👨‍🌾 Farmer
              </button>

              <button
                onClick={() => {
                  setResult("");
                  setSelected("student");
                }}
                className="bg-purple-600 hover:bg-purple-700 p-4 rounded-xl"
              >
                🎓 Student
              </button>

              <button
                onClick={() => {
                  setResult("");
                  setSelected("woman");
                }}
                className="bg-purple-600 hover:bg-purple-700 p-4 rounded-xl"
              >
                👩 Woman
              </button>

              <button
                onClick={() => {
                  setResult("");
                  setSelected("worker");
                }}
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
              onClick={() => {
                setSelected("");
                setResult("");
              }}
              className="mb-6 text-purple-400"
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="text"
                placeholder="State"
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="number"
                placeholder="Land Size (Acres)"
                value={land}
                onChange={(e) => setLand(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="number"
                placeholder="Annual Income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <button
                onClick={handleFarmerCheck}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
              >
                Check Schemes
              </button>

            </div>

          </div>
        )}

        {/* STUDENT */}

        {selected === "student" && (
          <div className="bg-slate-800 rounded-2xl p-8">

            <button
              onClick={() => {
                setSelected("");
                setResult("");
              }}
              className="mb-6 text-purple-400"
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
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="number"
                placeholder="Age"
                value={studentAge}
                onChange={(e) => setStudentAge(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="text"
                placeholder="State"
                value={studentState}
                onChange={(e) => setStudentState(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="text"
                placeholder="Course / Degree"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="number"
                placeholder="Family Annual Income"
                value={studentIncome}
                onChange={(e) => setStudentIncome(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <button
                onClick={handleStudentCheck}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
              >
                Check Scholarships
              </button>

            </div>

          </div>
        )}
        {/* WOMAN */}

        {selected === "woman" && (
          <div className="bg-slate-800 rounded-2xl p-8">

            <button
              onClick={() => {
                setSelected("");
                setResult("");
              }}
              className="mb-6 text-purple-400"
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
                value={womanName}
                onChange={(e) => setWomanName(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="number"
                placeholder="Age"
                value={womanAge}
                onChange={(e) => setWomanAge(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="text"
                placeholder="State"
                value={womanState}
                onChange={(e) => setWomanState(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <select
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              >
                <option value="">Select Marital Status</option>
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
              </select> 

              <input
                type="number"
                placeholder="Family Annual Income"
                value={womanIncome}
                onChange={(e) => setWomanIncome(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <button
                onClick={handleWomanCheck}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
              >
                Check Schemes
              </button>

            </div>

          </div>
        )}

        {/* WORKER */}

        {selected === "worker" && (
          <div className="bg-slate-800 rounded-2xl p-8">

            <button
              onClick={() => {
                setSelected("");
                setResult("");
              }}
              className="mb-6 text-purple-400"
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
                value={workerName}
                onChange={(e) => setWorkerName(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="number"
                placeholder="Age"
                value={workerAge}
                onChange={(e) => setWorkerAge(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="text"
                placeholder="State"
                value={workerState}
                onChange={(e) => setWorkerState(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="text"
                placeholder="Occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <input
                type="number"
                placeholder="Monthly Income"
                value={workerIncome}
                onChange={(e) => setWorkerIncome(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-700"
              />

              <button
                onClick={handleWorkerCheck}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
              >
                Check Schemes
              </button>

            </div>

          </div>
        )}

        {/* COMMON AI RESULT */}

        {loading && (
          <div className="mt-6 bg-blue-900/30 border border-blue-700 p-5 rounded-xl">
            <h3 className="text-blue-400 font-bold text-lg">
              🤖 CivicMind AI
            </h3>

            <p className="mt-2">
              Analyzing eligibility...
            </p>
          </div>
        )}

        {result && (
          <div className="mt-6 bg-green-900/30 border border-green-700 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-green-400">
              ✅ AI Recommended Schemes
            </h3>

            <div className="mt-3 whitespace-pre-wrap">
              {result}
            </div>

            <div className="mt-4 flex gap-3 flex-wrap">
              <button
                onClick={() => speakResult(result)}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
              >
                🔊 {language === "hindi"
                  ? "Listen in Hindi"
                  : "Listen in English"}
              </button>

              <button
                onClick={() => window.speechSynthesis.cancel()}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                ⏹ Stop
              </button>
            </div>
          </div>
        )}        

        {result && (
          <div className="mt-6 bg-yellow-900/20 border border-yellow-700 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-400">
              📄 Required Documents
            </h3>

            <ul className="mt-3 space-y-2">
              <li>✅ Aadhaar Card</li>
              <li>✅ Bank Passbook</li>
              <li>✅ Income Certificate</li>
              <li>✅ Passport Size Photo</li>
            </ul>
          </div>
        )}        

      </div>
    </section>
  );
}