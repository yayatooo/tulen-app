import React from "react";
import { ButtonSwitch } from "./ButtonSwitch";
import { PriceTable } from "./PriceTable";

const PriceListPage: React.FC = () => {
  return (
    <main className="bg-primary py-28">
      <div className="lg:container xs:px-6">
        <h1 className="xl:text-7xl xs:text-5xl font-bold mx-auto text-center w-10/12">
          We’ve got a pricing plan that’s perfect for you
        </h1>

        <ButtonSwitch />
        <div className="flex justify-center items-center gap-10 py-6 xs:flex-col xl:flex-row">
          <PriceTable price="$10" plan="Basic" />
          <PriceTable price="$25" plan="Personal" />
          <PriceTable price="$50" plan="ultimate" />
        </div>
      </div>
    </main>
  );
};

export default PriceListPage