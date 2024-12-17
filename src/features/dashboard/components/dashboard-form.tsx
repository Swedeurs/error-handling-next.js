import { onButtonClickAction } from "@/features/dashboard/actions";
import { dashboardService } from "../instance";

export async function DashboardForm() {
    const animal = await dashboardService.getOne();
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 p-4">
            <form
                action={onButtonClickAction}
                className="p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-3xl shadow-xl border-4 border-yellow-400 max-w-md w-full transform hover:rotate-2 hover:scale-105 transition-all duration-500"
            >
                <h2 className="text-3xl font-extrabold text-white mb-4 text-center drop-shadow-lg animate-bounce">
                    🚀 Absurd Form 🚀
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="absurdInput"
                        className="block text-lg font-bold text-yellow-300 mb-2 text-center"
                    >
                        📝 Your Absurd Input 📝
                    </label>
                    <input
                        id="absurdInput"
                        type="text"
                        placeholder="Type your name here..."
                        name="name"
                        className="w-full px-4 py-2 text-md font-bold text-purple-700 bg-yellow-200 border-2 border-pink-500 rounded-full shadow-inner placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:scale-105 transition-all duration-300"
                        required
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 py-2 text-xl font-extrabold text-yellow-300 bg-black border-2 border-yellow-400 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transform hover:scale-110 hover:rotate-3 transition-all duration-300"
                    >
                        🦄 Submit 🦄
                    </button>
                </div>
            </form>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 text-white font-extrabold text-2xl text-center rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 max-w-md w-full">
                🐾 Your Absurd Animal: 
                <span className="block mt-2 text-yellow-300 drop-shadow-md animate-spin-slow">
                    {animal || "Mystery Creature"}
                </span>
            </div>
        </div>
    );
}
