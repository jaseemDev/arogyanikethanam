"use client";
import Image from "next/image";
import React from "react";
import heroImageDesk from "../../public/hero-bg-og-c.png";
import Bingo from "../buttons/Bingo";

import { menuItems } from "../../constants/navitems";
import Nav from "./Nav";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="bg-[var(--background-secondary)] rounded-3xl  flex flex-wrap items-end justify-end">
      <Nav menuItems={menuItems} />
      <div className="h-full lg:h-130 flex flex-wrap items-end justify-end">
        <div className="lg:w-[50%] w-full p-8 lg:p-16">
          <motion.h1
            className="text-3xl lg:text-5xl  text-[var(--background)] font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </motion.h1>
          <Bingo label="start now" />
        </div>
        <div className="w-full lg:w-[50%] p-8 lg:p-8 px-4">
          <Image
            src={heroImageDesk}
            alt="arogyanikethanam"
            width={1920}
            height={500}
            style={{
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
