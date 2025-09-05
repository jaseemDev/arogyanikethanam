import { treatments } from "@/constants/treatments";
import React from "react";
import Treatments from "../cards/Treatments";
import Bingo from "../buttons/Bingo";

const Treatment = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:max-w-[80%]">
        {treatments.map((treatment) => (
          <Treatments
            key={treatment.id}
            title={treatment.title}
            image={treatment.image}
            description={treatment.description}
          />
        ))}
      </div>
      <div className="flex flex-row justify-end w-full lg:max-w-[80%]">
        <Bingo label="view all" />
      </div>
    </>
  );
};

export default Treatment;
