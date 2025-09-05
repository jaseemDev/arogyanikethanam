import { MoveRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

type BingoProps = {
  label: string;
  variant?: string;
  className?: string;
};

const Bingo = ({ label, variant, className }: BingoProps) => {
  return (
    <motion.button
      className={`relative flex items-center justify-between px-6 py-3 rounded-full
    text-[var(--color-green-dark)] font-light
    transition-colors before:duration-500 ease-in-out
    before:content-[''] before:bg-[var(--accent-yellow)] ${
      variant === "contained" ? "before:w-full" : "before:w-10"
    } before:h-10 before:absolute
    before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2
    hover:before:w-full hover:cursor-pointer group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
    >
      <span className="relative z-10 uppercase mx-1">{label}</span>
      <span className="relative z-10 uppercase mx-1 group-hover:translate-x-1 duration-500 ease-in-out">
        <MoveRight />
      </span>
    </motion.button>
  );
};

export default Bingo;
