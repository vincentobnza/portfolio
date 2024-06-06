import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full min-h-[10vh] max-w-screen-lg mx-auto mt-10 p-8">
      <hr className="border-zinc-900" />

      <div className="w-full flex justify-between items-center mt-5">
        <Link href="/">
          <h1 className="text-sm font-medium text-zinc-200 z-10 underline space-y-10 underline-offset-8 decoration-4 decoration-emerald-500">
            Vincent 🧑🏻‍💻
          </h1>
        </Link>
        <Link href="https://github.com/vincentobnza">
          <h1 className="py-2 px-3 text-sm text-zinc-300">@vincentobnza</h1>
        </Link>
      </div>
    </div>
  );
}
