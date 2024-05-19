import React from "react";
import { ButtonComponents } from "@/app/ui/ButtonComponents";
import { Checked } from "./Checked";

interface TablePriceProps {
    price: string,
    plan: string
}

export const PriceTable: React.FC<TablePriceProps> = ({price,plan}) => {
  return (
    <div className="relative flex flex-col items-center border-4 border-black w-[370px] h-[570px] p-8">
      <div className="absolute -top-7 flex justify-center w-full">
          <svg
            width="45"
            height="51"
            viewBox="0 0 44 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.7287 25.4175C28.0249 29.3747 25.2726 32.589 21.8643 50.835C18.4561 32.589 15.7037 29.3747 0 25.4175C15.7037 21.4604 18.4561 18.2461 21.8643 0C25.2726 18.2461 28.0249 21.4604 43.7287 25.4175Z"
              fill="#242424"
            />
          </svg>
      </div>
      <h1 className="font-bold text-5xl">{price}/mth</h1>
      <h3 className="font-bold text-3xl">{plan} Plan</h3>
      <div className="py-10 space-y-8 font-bold w-11/12">
        <p className="flex items-center gap-6">
          <span className="w-12">
            <Checked />
          </span>
          Aliquam eleifend mi in nulla posuere sollicitudin.
        </p>
        <p className="flex items-center gap-6">
          <span className="w-12">
            <Checked />
          </span>
          Congue eu consequat ac felis. Feugiat in fermentum
        </p>
        <p className="flex items-center gap-6">
          <span className="w-12">
            <Checked />
          </span>
          Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras
        </p>
      </div>
      <ButtonComponents>Get Plan Now</ButtonComponents>
    </div>
  );
};
