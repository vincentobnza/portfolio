"use client";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import Link from "next/link";

import { SiAxios } from "react-icons/si";
import { LiaAnkhSolid } from "react-icons/lia";

export default function Projects() {
  const projects = [
    {
      title: "Shopify Landing Page",
      subtitle: "A Shopify clone made with Next JS and Tailwind CSS.",
      tech: [RiNextjsFill, RiTailwindCssFill],
      link: "https://shopify-landing-page-eight.vercel.app/",
    },
    {
      title: "MP3d",
      subtitle: "Convert any youtube video to MP3.",
      tech: [RiReactjsFill, RiTailwindCssFill, SiAxios],
      link: "https://mp3d.netlify.app/",
    },
  ];
  return (
    <div className="max-w-screen-lg mx-auto text-center flex flex-col justify-center items-center mt-24 mb-10">
      <h1 className="text-xl font-black underline underline-offset-8 decoration-4 rotate-3 decoration-yellow-500">
        Featured Projects 🎯
      </h1>
      <div className="w-[13rem] h-1 bg-emerald-400 rounded-full mt-2 rotate-3 -translate-x-6"></div>

      <div className="w-full max-w-screen-lg mx-auto mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 p-5">
        {projects.map((project, idx) => {
          return (
            <Link
              href={project.link}
              key={idx}
              className="bg-black relative w-full p-10 flex flex-col justify-start items-start text-left border border-zinc-700 rounded-lg hover:rotate-3 duration-300"
            >
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-zinc-950 to-slate-950 transform scale-[0.80] bg-zinc-950 rounded-full blur-3xl" />
              <h1 className="text-lg md:text-xl font-black mb-3 z-50">
                {project.title}
              </h1>
              <p className="text-xs md:text-sm text-zinc-400 z-50">
                {project.subtitle}
              </p>
              <div className="flex space-x-2 mt-5 z-50 text-zinc-200">
                {project.tech.map((Icon, index) => (
                  <Icon key={index} className="w-6 h-6" />
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
