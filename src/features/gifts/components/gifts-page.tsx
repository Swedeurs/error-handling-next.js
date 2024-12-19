import { giftsService } from "../instance";

export async function GiftsPage() {
  const gifts = await giftsService.getAll();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-600 p-6">
      <div className="p-8 bg-gradient-to-br from-yellow-500 via-red-500 to-green-500 border-[10px] border-white rounded-[30px] shadow-[0_0_30px_rgba(255,0,0,0.7)] transform hover:rotate-3 hover:scale-105 transition-all duration-500 max-w-md w-full">
        <h2 className="text-2xl font-extrabold text-white text-center drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] animate-wiggle mb-6 animate-pulse">
          🎁 Christmas Gifts 🎁
        </h2>

        <div className="mt-8 p-6 bg-white border-[8px] border-red-500 rounded-full text-center shadow-[0_0_25px_rgba(0,255,0,0.6)] hover:scale-105 transition-all duration-500 max-w-md w-full">
          <p className="text-2xl font-extrabold text-green-600 animate-bounce">
            🎄 Gift List 🎄
          </p>
          <div className="mt-4 text-sm text-red-500 font-extrabold animate-spin-slow drop-shadow-md">
            {gifts.map((gift, index) => (
              <p key={index} className="mb-4">
                {gift}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
