import React from "react";
import Image from "next/image";
import { partner } from "@/app/utility/data";

export const PartnerGrid = () => {
  return (
    <section className="pb-20 xs:pt-[15rem] xl:pt-[30rem] container flex justify-center">
      <div  className="grid grid-cols-3 gap-8">
        {partner.map((item) => (
          <div key={item.id}>
            <Image src={item.image} height={200} width={370} alt="partner" />
          </div>
        ))}
      </div>
    </section>
  );
};
