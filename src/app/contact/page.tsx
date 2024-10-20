import Link from "next/link";

export default function Contactpage() {
  return (
    <div className="mt-5 flex justify-center ">
      <div className="flex flex-wrap justify-center gap-6 w-[75%]">
        {/* Individual contact box for Phone */}
        <div className="bg-rose-500 w-[400px] p-7 rounded-3xl text-center">
          <h1 className="text-slate-700 underline font-bold text-2xl">Phone</h1>
          <p className="font-bold text-xl mt-2">+923351368673</p>
        </div>

        {/* Individual contact box for Email */}
        <div className="bg-rose-500 w-[400px] p-7 rounded-3xl text-center">
          <h1 className="text-slate-700 underline font-bold text-2xl">Email</h1>
          <p className="font-bold text-xl mt-2">emadahmed7427@gmail.com</p>
        </div>

        {/* Individual contact box for LinkedIn */}
        <div className="bg-rose-500 w-[300px] p-5 rounded-3xl text-center">
          <h1 className="text-slate-700 underline font-bold text-2xl">LinkedIn</h1>
          <p className="font-bold text-xl mt-2">Emaad Ahmed</p>
        </div>

        {/* Individual contact box for Instagram */}
        <div className="bg-rose-500 w-[300px] p-5 rounded-3xl text-center">
          <h1 className="text-slate-700 underline font-bold text-2xl">Instagram</h1>
          <p className="font-bold text-xl mt-2">mr.emad09</p>
        </div>

        {/* Individual contact box for Discord */}
        <div className="bg-rose-500 w-[300px] p-5 rounded-3xl text-center">
          <h1 className="text-slate-700 underline font-bold text-2xl">Discord</h1>
          <p className="font-bold text-xl mt-2">emad_ahmed7001</p>
        </div>
      </div>
    </div>
  );
}
