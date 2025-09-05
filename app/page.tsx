"use client";

import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";
import Doctors from "@/components/sections/Doctors";
import Testimonials from "@/components/sections/Testimonials";
import Treatment from "@/components/sections/Treatment";
import SectionTitle from "@/components/sections/SectionTitle";
import { aboutDetails } from "@/constants/aboutDetails";
import MarketingBanner from "@/components/cards/MarketingBanner";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 lg:p-8 
    gap-16 py-12 lg:py-16"
    >
      <SectionTitle title={"About us"} />
      <About description={aboutDetails} />
      <SectionTitle title={"Treatments"} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full items-center flex flex-col gap-8"
      >
        <Treatment />
      </motion.div>

      <SectionTitle title="Doctors" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full items-center flex flex-col gap-8"
      >
        <Doctors />
      </motion.div>
      <SectionTitle title="case studies" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full items-center flex flex-col gap-8"
      >
        <Cases />
      </motion.div>

      <SectionTitle title="Voices of Healing" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full items-center flex flex-col gap-8"
      >
        <Testimonials />
      </motion.div>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full items-center flex flex-col gap-8"
        >
          <MarketingBanner />
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}
