import { onButtonClickAction } from "@/features/dashboard/actions";

export function DashboardForm() {
    return (
        <form
            action={onButtonClickAction}
            className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-sm mx-auto"
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Dashboard Form
            </h2>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md border-2 border-blue-700 transition-all duration-300"
                >
                    Click me!
                </button>
            </div>
        </form>
    );
}
