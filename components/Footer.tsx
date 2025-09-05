import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const treatments = [
    "Panchakarma",
    "Herbal Medicine",
    "Yoga Therapy",
    "Dietary Consultation",
  ];
  const connectUs = ["About Us", "Blog", "Careers", "Contact"];
  const reachUs = [
    "123 Wellness St.",
    "Healthy City, HC 12345",
    "Phone: (123) 456-7890",
    "Email: info@arogyanikethanam.in",
  ];
  const socials = [
    {
      icon: "/facebook.svg",
      link: "https://facebook.com/arogyanikethanam",
    },
    { icon: "/instagram.svg", link: "https://twitter.com/arogyanikethanam" },
    {
      icon: "/x.svg",
      link: "https://instagram.com/arogyanikethanam",
    },
  ];

  return (
    <div className="bg-[var(--color-green-dark)] w-full rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 text-center p-8 text-[var(--background)] gap-8">
        <div className="flex justify-left lg:justify-center items-start">
          <Image
            src="/logo-w.svg"
            alt="Arogya Nikethanam"
            width={300}
            height={150}
            style={{ width: "200px", height: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col items-start">
          <h6
            className="text-xl z-1 font-semibold relative before:content-[''] before:absolute before:bg-[url('/leaf.png')]
            before:bg-no-repeat before:w-15 before:h-12 before:left-0 before:top-8 before:-translate-y-1/2 before:bg-contain 
             before:-rotate-10 before:z-[-1] mb-6"
          >
            Treatments
          </h6>
          <ul className="text-left">
            {treatments.map((treatment, index) => (
              <li key={index} className="my-2">
                <Link href="#" className="relative flex group">
                  <span
                    className="absolute left-0 top-1/2 -translate-x-8 
                  opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 
                  group-hover:translate-x-0 transition-all duration-300 ease-in-out transform-gpu pointer-events-none"
                  >
                    <Image
                      src="/leaf-footer.png"
                      alt="arrow right"
                      width={24}
                      height={24}
                      style={{
                        width: "24px",
                        height: "24px",
                        rotate: "-20deg",
                      }}
                    />
                  </span>
                  {treatment}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h6
            className="text-xl z-1 font-semibold relative before:content-[''] before:absolute before:bg-[url('/leaf.png')]
            before:bg-no-repeat before:w-15 before:h-12 before:left-0 before:top-8 before:-translate-y-1/2 before:bg-contain 
             before:-rotate-10 before:z-[-1] mb-6"
          >
            Important Links
          </h6>
          <ul className="text-left">
            {connectUs.map((connection, index) => (
              <li key={index} className="my-2">
                <Link href="#" className="relative flex group">
                  <span
                    className="absolute left-0 top-1/2 -translate-x-8 
                  opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 
                  group-hover:translate-x-0 transition-all duration-300 ease-in-out transform-gpu pointer-events-none"
                  >
                    <Image
                      src="/leaf-footer.png"
                      alt="arrow right"
                      width={24}
                      height={24}
                      style={{
                        width: "24px",
                        height: "24px",
                        rotate: "-20deg",
                      }}
                    />
                  </span>
                  {connection}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h6
            className="text-xl z-1 font-semibold relative before:content-[''] before:absolute before:bg-[url('/leaf.png')]
            before:bg-no-repeat before:w-15 before:h-12 before:left-0 before:top-8 before:-translate-y-1/2 before:bg-contain 
             before:-rotate-10 before:z-[-1]"
          >
            Reach us
          </h6>
          <ul className="text-left mt-6">
            {reachUs.map((info, index) => (
              <li key={index} className="my-2">
                <span className="relative flex group">{info}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-4">
            {socials.map((social, index) => (
              <li key={index} className="inline-block mr-4">
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--background)] hover:text-[var(--accent-yellow)] transition-colors duration-300"
                >
                  <Image
                    src={social.icon}
                    alt="social icon"
                    width={24}
                    height={24}
                    style={{ width: "24px", height: "24px" }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-[var(--background)] p-4">
        &copy; {new Date().getFullYear()} Arogya Nikethanam. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
