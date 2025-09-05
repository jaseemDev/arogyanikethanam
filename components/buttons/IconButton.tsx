"use client";

import React, { ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode;
  activeIcon?: ReactNode;
  color?: string; // accepts CSS color value (hex, rgb, etc.)
  handleClick: () => void;
  isActive?: boolean;
  large?: boolean;
  rounded?: boolean;
  className?: string;
};

const IconButton = ({
  icon,
  activeIcon,
  color,
  handleClick,
  isActive,
  large,
  rounded,
  className,
}: IconButtonProps) => {
  return (
    <button
      className={`border-2 border-solid p-2 ${
        rounded ? "rounded-full" : "rounded-sm"
      } transition-colors duration-300 ease-in-out relative ${
        large ? `w-16 h-16` : "w-8 h-8"
      }  flex items-center justify-center ${
        isActive && "z-30"
      } ${className} hover:cursor-pointer`}
      style={{ borderColor: color || "currentColor" }}
      onClick={handleClick}
    >
      {/* Default icon */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 transform ${
          isActive ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        {icon}
      </span>

      {/* Active icon */}
      {activeIcon && (
        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 transform ${
            isActive ? "opacity-100 scale-100 " : "opacity-0 scale-90"
          }`}
        >
          {activeIcon}
        </span>
      )}
    </button>
  );
};

export default IconButton;
