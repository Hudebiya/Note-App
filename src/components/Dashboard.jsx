export default function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-center px-4">
      <div className="bg-stone-900/60 border border-stone-700 rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-amber-500 mb-2">Welcome! 🎉</h1>
        <p className="text-stone-400 mb-6">
          You're logged in as{" "}
          <span className="text-stone-200 font-medium">
            {user?.email || "Guest"}
          </span>
        </p>
        <button
          onClick={onLogout}
          className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}