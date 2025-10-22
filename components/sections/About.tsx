import { aboutDescription } from "@/types/aboutDescription";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

type aboutDescriptionProps = {
  description: aboutDescription[];
};

const About = ({ description }: aboutDescriptionProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full text-[var(--color-green-dark)] lg:max-w-[80%]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="mb-4 text-3xl relative text-center before:content-[''] before:absolute before:w-12 before:h-12 before:bg-[var(--accent-yellow)] before:rounded-full before:left-[-1rem] before:top-1/2 before:-translate-y-1/2">
        <span className="z-10 relative ">
          dolorem ipsum quia dolor sit amet
        </span>
      </h1>
      {description?.map((desc) => (
        <p key={desc.id} className="text-center my-4">
          {desc.text}
        </p>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      >
        <Image
          src="/leaf.png"
          alt="section end"
          width={100}
          height={100}
          className="mt-8"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
