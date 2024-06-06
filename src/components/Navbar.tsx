"use client";
import { MovingBorder } from "@/components/ui/moving-border";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
  const links = [
    {
      text: "Github",
      link: "https://github.com/vincentobnza",
      icon: FaGithub,
    },
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/vincent-obnza/",
      icon: FaLinkedin,
    },
    {
      text: "Email",
      link: "vincentobenza.work@outlook.com",
      icon: MdOutlineEmail,
    },
  ];
  return (
    <div className="w-full max-w-screen-lg mx-auto m-2 p-1 flex justify-between items-center text-zinc-300 tracking-wide">
      <div className="flex">
        <Link href="/">
          <h1 className="text-sm font-medium text-zinc-200 z-10 underline space-y-10 underline-offset-8 decoration-4 decoration-emerald-500  -rotate-3">
            Vincent 🧑🏻‍💻
          </h1>
        </Link>
      </div>

      {/* social links */}
      <div className="flex gap-4 md:gap-6 z-10 ">
        {links.map((social, idx) => {
          const Icon = social.icon;
          return (
            <Link
              href={social.link}
              key={idx}
              aria-label={social.text}
              className="hover:scale-125 hover:text-white transition-all"
            >
              <Icon className="w-5 h-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
