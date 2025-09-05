import Image from "next/image";
import Bingo from "../buttons/Bingo";

type TreatmentsProps = {
  title: string;
  description: string;
  image: string;
};

const Treatments = ({ title, description, image }: TreatmentsProps) => {
  return (
    <div className="rounded-2xl relative  ">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "1rem",
          objectFit: "cover",
        }}
        unoptimized
        quality={50}
      />
      <span className="bg-gradient-to-t bg-[var(--color-green-dark)] from-[var(--color-green-dark)] to-[var(--color-green)] opacity-[0.5] w-full h-full absolute top-0 lft-0 rounded-2xl"></span>
      <div className="absolute bottom-3 p-4 lg:p-8 text-[var(--color-white)]">
        <h4 className="text-xl font-bold my-3">{title}</h4>
        <p className="text-sm">{description}</p>
        <Bingo label="view more" variant="contained" className="mt-4" />
      </div>
    </div>
  );
};

export default Treatments;
