import { doctorsDetails } from "@/constants/doctorsDetails";
import React from "react";
import Doctor from "../cards/Doctor";
import Bingo from "../buttons/Bingo";

const Doctors = () => {
  return (
    <>
      <div className="text-center text-[var(--color-green-dark)] lg:max-w-[80%]">
        <p>
          Quisque vehicula libero sit amet ex consectetur, at dictum justo
          gravida. Quisque blandit ex vel tincidunt malesuada. Maecenas
          imperdiet ultricies est, at consequat lorem molestie at. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Etiam tempor eros a urna vehicula lobortis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:max-w-[80%]">
        {doctorsDetails.map((doctor) => (
          <Doctor data={doctor} key={doctor.id} />
        ))}
      </div>
      <div className="flex flex-row justify-end w-full lg:max-w-[80%]">
        <Bingo label="view all" />
      </div>
    </>
  );
};

export default Doctors;
