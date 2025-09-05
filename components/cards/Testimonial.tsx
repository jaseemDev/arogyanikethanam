"use client";

import { TestimonialData } from "@/types/testimonialData";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import IconButton from "../buttons/IconButton";

type TestimonialProps = {
  data: TestimonialData[];
};

const Testimonial = ({ data }: TestimonialProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // default mobile

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLeft = () => {
    // setSlideDirection("left");
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? data.length - visibleCount : prev - 1
    );
  };

  const handleRight = () => {
    // setSlideDirection("right");
    setCurrentIndex((prev) =>
      prev + 1 > data.length - visibleCount ? 0 : prev + 1
    );
  };

  // Prepare sliding wrapper width
  const wrapperWidth = `${(data.length / visibleCount) * 100}%`;
  const itemWidth = `${100 / data.length}%`;

  return (
    <div className="relative w-full overflow-hidden flex justify-center items-center">
      {/* Left Button */}
      <IconButton
        icon={<ChevronLeft color="var(--color-green)" />}
        handleClick={handleLeft}
        rounded
        color="var(--color-green)"
        className="absolute left-0 z-20"
      />

      {/* Sliding Wrapper */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: wrapperWidth,
            transform: `translateX(-${(currentIndex * 100) / data.length}%)`,
          }}
        >
          {data.map((item, idx) => {
            const isCenter = visibleCount === 3 && idx === currentIndex + 1;
            return (
              <div
                key={item.id}
                className={`flex-shrink-0 p-2 transform transition-transform duration-500 ${
                  isCenter ? "scale-100 z-10" : "scale-90"
                }`}
                style={{ width: itemWidth }}
              >
                <div className="bg-[var(--background-secondary-light)] rounded-xl relative min-h-140">
                  <Image
                    src={item.image}
                    alt={`testimonial-${item.id}`}
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "0.75rem",
                    }}
                    unoptimized
                  />
                  <div className="bg-[var(--background-secondary)] absolute m-4 bottom-2 p-4 rounded-lg">
                    <div className="relative">
                      <Quote
                        className="rotate-180 absolute top-[-10px]"
                        color="var(--color-green)"
                      />
                      <p className="text-center text-sm text-[var(--color-green-dark)] py-4">
                        {item.text}
                      </p>
                      <Quote
                        className="absolute bottom-[-10px] right-0"
                        color="var(--color-green)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Button */}
      <IconButton
        icon={<ChevronRight color="var(--color-green)" />}
        handleClick={handleRight}
        rounded
        color="var(--color-green)"
        className="absolute right-0 z-20"
      />
    </div>
  );
};

export default Testimonial;
