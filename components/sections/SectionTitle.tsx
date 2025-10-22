import { motion } from "motion/react";
import React from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="border-1 border-[var(--accent-yellow-light)] px-6 py-3 rounded-full shadow-[0_0_8px_1px_var(--accent-yellow-light)]
      min-w-[200px] text-center uppercase text-semibold text-[var(--color-green-dark)] w-fit mx-auto mb-8 my-4"
    >
      <p> {title}</p>
    </motion.div>
  );
};

export default SectionTitle;
