import { onButtonClickAction } from "@/features/dashboard/actions";

export function DashboardForm() {
  return (
    <form
      action={onButtonClickAction}
      className="p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-3xl shadow-2xl border-8 border-yellow-400 max-w-md mx-auto transform hover:rotate-2 hover:scale-105 transition-all duration-500"
    >
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center drop-shadow-lg animate-bounce">
        🚀 Absurd Form 🚀
      </h2>

      <div className="mb-6">
        <label
          htmlFor="absurdInput"
          className="block text-2xl font-bold text-yellow-300 mb-2 text-center"
        >
          📝 Your Absurd Input 📝
        </label>
        <input
          id="absurdInput"
          type="text"
          placeholder="Type your name here..."
          name="name"
          className="w-full px-5 py-3 text-lg font-bold text-purple-700 bg-yellow-200 border-4 border-pink-500 rounded-full shadow-inner placeholder-pink-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 hover:scale-105 transition-all duration-300"
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-10 py-4 text-3xl font-extrabold text-yellow-300 bg-black border-4 border-yellow-400 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transform hover:scale-110 hover:rotate-6 transition-all duration-300"
        >
          🦄 Click Me! 🦄
        </button>
      </div>

      <p className="mt-6 text-center text-white font-mono text-lg animate-pulse">
        * This form does nothing important *
      </p>
    </form>
  );
}
