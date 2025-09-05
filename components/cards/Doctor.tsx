import { DoctorsDescription } from "@/types/doctorsDescription";
import Image from "next/image";
import React from "react";
import Bingo from "../buttons/Bingo";

type DoctorProps = {
  data: DoctorsDescription;
};

const Doctor = ({ data }: DoctorProps) => {
  return (
    <div className="bg-[var(--color-green)] rounded-2xl flex flex-col justify-between">
      <div className="bg-[var(--color-green-dark)] rounded-2xl shadow-xl">
        <Image
          src={data.image}
          alt={data.name}
          width={100}
          height={100}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          unoptimized
        />
      </div>
      <div className="p-6 text-[var(--background)]">
        <h4 className="text-xl font-semibold flex self-start">{data.name}</h4>
        <p className="text-md font-light">{data.degree}</p>
        <p className="text-sm font-light my-4">{data.description}</p>
        <Bingo label="read more" />
      </div>
    </div>
  );
};

export default Doctor;
