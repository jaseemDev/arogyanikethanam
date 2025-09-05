import Image from "next/image";
import React from "react";
import Bingo from "../buttons/Bingo";

const MarketingBanner = () => {
  return (
    <div
      className="rounded-2xl relative w-full overflow-hidden after:content-[''] 
    after:absolute after:rounded-full after:-left-10 after:bottom-20 after:w-20 
    after:h-20 after:bg-[var(--accent-yellow)]"
    >
      <Image
        src="/marketing.jpg"
        alt="marketing banner"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
          borderRadius: "16px",
        }}
        unoptimized
      />
      <span className="bg-gradient-to-t bg-[var(--color-green-dark)] from-[var(--color-green-dark)] to-[var(--color-green)] opacity-[0.5] w-full h-full absolute top-0 lft-0 rounded-2xl"></span>
      <div className="absolute top-[50%] left-[50%] translate-[-50%] text-center flex flex-col justify-center items-center">
        <h3 className=" text-2xl text-center font-bold text-[var(--color-white)] my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum nisi ut tincidunt pulvinar.
        </h3>
        <Bingo label="Treat now" variant="contained" />
      </div>
    </div>
  );
};

export default MarketingBanner;
