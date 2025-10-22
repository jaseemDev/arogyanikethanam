"use client";
import Image from "next/image";
import Link from "next/link";
import { Navlinks } from "@/types/navlinks";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.svg";
import { Menu, X } from "lucide-react";
import IconButton from "../buttons/IconButton";
import { useEffect, useState } from "react";

type NavProps = {
  menuItems: Navlinks[];
};

const Nav = ({ menuItems }: NavProps) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20); // add shadow after scrolling 20px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={`w-[80%] p-8 lg:py-4 lg:px-12  mx-auto flex items-center fixed left-[50%] -translate-x-[50%] z-30 bg-[var(--background-secondary)] rounded-2xl
      ${
        isScroll ? "shadow-lg top-[2%]" : "shadow-none top-[4%]"
      } transition-all duration-300 ease-in-out
    `}
    >
      {/* Logo */}
      <div>
        <Image
          src={logo}
          alt="arogyanikethanam logo"
          width={200}
          height={100}
        />
      </div>

      {/* Desktop Menu */}
      <ul className="flex mx-auto text-[var(--color-green-dark)] font-semibold hidden lg:flex">
        {menuItems.map((item) => {
          const active = pathname && pathname === item.link;
          return (
            <li key={item.id} className="mx-4">
              {item.link ? (
                <Link
                  href={item.link}
                  className={`relative px-2
                    after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-10
                    after:h-[50] after:w-75 after:bg-[url('/leaf.png')] after:bg-no-repeat after:bg-left after:bg-contain
                    after:scale-0 after:transition-transform after:duration-300
                    ${active ? "after:scale-100" : "hover:after:scale-100"}
                  `}
                >
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu */}
      <div className="mx-auto mr-0 relative sm:block lg:hidden">
        <IconButton
          icon={<Menu color="var(--color-green-dark)" />}
          activeIcon={<X color="var(--color-green-dark)" />}
          color="var(--color-green-dark)"
          handleClick={handleButtonClick}
          isActive={isActive}
        />

        {/* Mobile Dropdown */}
        <div
          className={`absolute right-[-10px] bg-[var(--background)] p-4 shadow-md z-20 rounded-2xl top-[-10px] w-83
            transition-all duration-500 ease-in-out
            ${
              isActive
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col text-[var(--color-green-dark)] font-semibold">
            {menuItems.map((item) => {
              const active = pathname === item.link;
              return (
                <li key={item.id} className="my-4">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className={`relative px-2
                        after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-10
                        after:h-[50] after:w-75 after:bg-[url('/leaf.png')] after:bg-no-repeat after:bg-left after:bg-contain
                        after:scale-0 after:transition-transform after:duration-300
                        ${active ? "after:scale-100" : "hover:after:scale-100"}
                      `}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
