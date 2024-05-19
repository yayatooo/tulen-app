import React from "react";
import { ButtonSwitch } from "./ButtonSwitch";
import { PriceTable } from "./PriceTable";

export const PriceListPage = () => {
  return (
    <main className="bg-primary py-28">
      <div className="container">
        <h1 className="text-7xl font-bold mx-auto text-center w-10/12">
          We’ve got a pricing plan that’s perfect for you
        </h1>

        <ButtonSwitch />
        <div className="flex justify-center gap-10 py-6">
          <PriceTable price="$10" plan="Basic" />
          <PriceTable price="$25" plan="Personal" />
          <PriceTable price="$50" plan="ultimate" />
        </div>
      </div>
    </main>
  );
};
