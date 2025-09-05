import { caseDetails } from "@/constants/caseDetails";
import React from "react";
import Case from "../cards/Case";
import Bingo from "../buttons/Bingo";

const Cases = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:max-w-[80%]">
        {caseDetails.map((item) => (
          <Case key={item.id} data={item} />
        ))}
      </div>
      <div className="flex flex-row justify-end w-full lg:max-w-[80%]">
        <Bingo label="view all" />
      </div>
    </>
  );
};

export default Cases;
