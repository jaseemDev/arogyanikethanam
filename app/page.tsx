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
    <div className="font-sans flex flex-col min-h-screen p-2 lg:p-8 gap-16 py-12 lg:py-16">
      <section
        id="aboutUs"
        className="flex flex-col items-center justify-center w-full scroll-mt-20"
      >
        <SectionTitle title={"About us"} />
        <About description={aboutDetails} />
      </section>
      <section id="treatments" className="w-full  scroll-mt-20">
        <SectionTitle title={"Treatments"} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full items-center flex flex-col gap-8"
        >
          <Treatment />
        </motion.div>
      </section>

      <section id="doctors" className="w-full  scroll-mt-20">
        <SectionTitle title="Doctors" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full items-center flex flex-col gap-8"
        >
          <Doctors />
        </motion.div>
      </section>
      <section id="case-studies" className="w-full  scroll-mt-20">
        <SectionTitle title="case studies" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full items-center flex flex-col gap-8"
        >
          <Cases />
        </motion.div>
      </section>

      <section id="testimonials" className="w-full  scroll-mt-20">
        <SectionTitle title="Voices of Healing" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full items-center flex flex-col gap-8"
        >
          <Testimonials />
        </motion.div>
      </section>
      <section className="w-full scroll-mt-20" id="contact-us">
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
      </section>
    </div>
  );
}
