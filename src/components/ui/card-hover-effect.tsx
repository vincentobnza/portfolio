import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("w-full grid grid-cols-2 lg:grid-cols-4  py-10", className)}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;
        return (
          <div
            key={idx}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-800 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl w-full overflow-hidden bg-black group-hover:ring-2 ring-slate-500 relative z-20 transition-all duration-500 flex justify-center items-center">
              <div className="rounded-2xl border border-zinc-900 size-[200px] cursor-pointer flex flex-col justify-center items-center text-center space-y-10 z-50 py-10">
                <Icon className="text-zinc-100 size-8" />
                <p className="text-md font-bold text-zinc-200">{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
