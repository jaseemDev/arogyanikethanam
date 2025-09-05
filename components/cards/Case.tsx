import { CaseData } from "@/types/caseData";
import Image from "next/image";
import React from "react";

type CaseProps = {
  data: CaseData;
};

const Case = ({ data }: CaseProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-xl border-1 p-2 border-[var(--accent-yellow)]">
      <div className="relative">
        <Image
          src={data.image}
          alt={data.title}
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          unoptimized
        />
        <span className="bg-gradient-to-t bg-[var(--color-green-dark)] from-[var(--color-green-dark)] to-[var(--color-green)] opacity-[0.5] w-full h-full absolute top-0 lft-0 rounded-2xl"></span>
      </div>
      <div>
        <h4
          className="text-lg font-semibold text-[var(--color-green-dark)] relative after:absolute after:content-[''] 
          after:top-4 after:right-0 after:h-[50] after:w-[50] after:bg-[url('/leaf.png')] after:bg-no-repeat after:bg-left after:bg-contain after:-rotate-25"
        >
          {data.title}
        </h4>
        <p className="text-sm mt-4">{data.description}</p>
      </div>
    </div>
  );
};

export default Case;
