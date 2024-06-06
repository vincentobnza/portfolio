import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-[70vh] w-full max-w-screen-lg flex flex-col justify-center items-center mx-auto text-center relative">
      <h3 className="font-medium text-sm md:text-sm text-zinc-200 mb-5">
        {"Nice to meet you, I'm Vincent 👋"}
      </h3>

      <h1 className="text-4xl md:text-5xl font-black text-zinc-100 lg:leading-snug">
        A Creative{" "}
        <b className="bg-gradient-to-b from-green-500 to-emerald-500 bg-clip-text text-transparent">
          Web Designer
        </b>{" "}
        from the Philippines
      </h1>

      <div className="absolute w-32 h-8 rounded-full border bg-zinc-900 border-zinc-700 right-10 top-14 rotate-0 md:rotate-12 flex justify-center items-center text-center text-zinc-100 hover:-rotate-12 duration-300 cursor-pointer">
        <p className="text-[10px] md:text-xs">🛠️ Open for work</p>
      </div>
      <div className="absolute w-32 h-8 rounded-full border bg-zinc-900 border-zinc-700 left-10 bottom-14 rotate-0 md:-rotate-12 flex justify-center items-center text-center text-zinc-100 hover:rotate-12 duration-300 cursor-pointer">
        <p className="text-[10px] md:text-xs">🔎 Part-time Job</p>
      </div>

      <Link href="https://www.facebook.com/Vincenttt.05" className="mt-12">
        <h1 className="py-2 px-3 underline underline-offset-8 decoration-4 decoration-emerald-500 text-sm hover:-rotate-3 duration-300 ">
          Contact Me 📢
        </h1>
      </Link>
    </div>
  );
}
