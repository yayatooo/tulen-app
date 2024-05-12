import React, { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "default";

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
}

export const ButtonComponents: React.FC<ButtonProps> = ({
  variant,
  children,
}) => {
  const buttonStyle = () => {
    switch (variant) {
      case "primary":
        return "rounded-full border-4 border-[#252524] font-bold text-2xl w-[17rem] h-[4rem] hover:bg-btn-primary hover:text-white hover:border-0";
      case "secondary":
        return "rounded-full bg-btn-primary text-white font-bold text-2xl w-[17rem] h-[4rem] hover:bg-primary hover:text-[#252524] hover:border-4 hover:border-[#252524]";
      default:
        return "rounded-full border-2 border-[#252524] px-6 py-3 font-bold text-lg hover:bg-btn-primary hover:text-white hover:border-[#9eef92]";
    }
  };

  return <button className={buttonStyle()}>{children}</button>;
};
