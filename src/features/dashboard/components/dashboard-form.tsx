import { onButtonClickAction } from "@/features/dashboard/actions";
import { dashboardService } from "../instance";

export async function DashboardForm() {
    const animal = await dashboardService.getOne();
    const name = await dashboardService.getLatestName();
    console.log(name);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-red-800 p-6">
            <form
                action={onButtonClickAction}
                className="p-8 bg-gradient-to-br from-green-500 via-red-500 to-yellow-300 border-[10px] border-white rounded-[30px] shadow-[0_0_30px_rgba(255,0,0,0.7)] transform hover:rotate-3 hover:scale-105 transition-all duration-500 max-w-md w-full"
            >
                <h2 className="text-2xl font-extrabold text-white text-center drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] animate-wiggle mb-6 animate-pulse">
                    🎅 Absurd Christmas Form 🎄
                </h2>

                <div className="mb-6">
                    <label
                        htmlFor="christmasInput"
                        className="block font-bold text-yellow-200 mb-4 text-center text-normal animate-bounce"
                    >
                        🎁 Enter Your Christmas Wish 🎁
                    </label>
                    <input
                        id="christmasInput"
                        type="text"
                        placeholder="Santa is watching..."
                        name="name"
                        className="w-full px-5 py-3 text-red-600 font-extrabold bg-white border-4 border-green-400 rounded-full placeholder-red-300 text-center shadow-inner focus:outline-none focus:ring-4 focus:ring-yellow-400 hover:scale-105 transition-all duration-300"
                        required
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-8 py-3 text-2xl font-extrabold text-red-700 bg-yellow-400 border-4 border-green-500 rounded-full shadow-lg hover:bg-green-400 hover:text-white hover:rotate-6 transform hover:scale-110 transition-all duration-300"
                    >
                        🎅 Send to Santa 🎅
                    </button>
                </div>
            </form>
            <div className="mt-8 p-6 bg-white border-[8px] border-red-500 rounded-full text-center shadow-[0_0_25px_rgba(0,255,0,0.6)] hover:scale-105 transition-all duration-500 max-w-md w-full">
                <p className="text-2xl font-extrabold text-green-600 animate-bounce">
                    🎄 Your Christmas Animal 🎄
                </p>
                <p className="mt-4 text-sm text-red-500 font-extrabold animate-spin-slow drop-shadow-md">
                    {name ? `${name} wants a ${animal} from Santa` : "No Christmas wishes yet!"}
                </p>
            </div>
        </div>
    );
}
