"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiDjango } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: RiReactjsFill,
    },
    {
      text: "Next.js",
      Icon: RiNextjsFill,
    },
    {
      text: "Tailwind CSS",
      Icon: RiTailwindCssFill,
    },
    {
      text: "Python",
      Icon: FaPython,
    },
    {
      text: "MySQL",
      Icon: GrMysql,
    },
    {
      text: "Django",
      Icon: DiDjango,
    },
    {
      text: "PHP",
      Icon: FaPhp,
    },
    {
      text: "Framer",
      Icon: FiFramer,
    },
  ];
  return (
    <div className="max-w-screen-lg mx-auto text-center flex flex-col justify-center items-center mt-24">
      <h1 className="text-xl font-black underline underline-offset-8 decoration-4 -rotate-3 decoration-yellow-500">
        Skills Expertise 📚
      </h1>
      <div className="w-40 h-1 bg-emerald-400 rounded-full mt-2 -rotate-3 translate-x-8 "></div>

      <div className="flex justify-center items-center max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
