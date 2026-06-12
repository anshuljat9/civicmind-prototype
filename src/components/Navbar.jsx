export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <span className="text-purple-500 text-xl">🛡️</span>

          <h2 className="text-xl font-bold text-white">
            CivicMind
          </h2>
        </div>

        <div className="flex items-center gap-4">

          <button className="text-slate-300 hover:text-white">
            EN
          </button>

          <button className="text-slate-300 hover:text-white">
            🌙
          </button>

          <button className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
            Start
          </button>

        </div>

      </div>
    </nav>
  );
}