import { ButtonComponents } from "@/app/ui/ButtonComponents";
import { service } from "@/app/utility/data";
import Image from "next/image";
import React from "react";

export const ServicePage = () => {
  return (
    <main className="bg-primary py-28">
      <div className="container">
        <h1 className="font-bold text-8xl text-font">What We Do</h1>
        <div className="grid grid-cols-3 gap-8 py-16">
          {service.map((item) => {
            return (
              <div
                className="h-[395px] w-[370px] border-solid border-4 border-black rounded-2xl space-y-4 p-8 hover:border-dashed"
                key={item.id}
              >
                <Image src={item.image} width={64} height={64} alt="card" />
                <h1 className="font-bold text-3xl">{item.header}</h1>
                <p className="text-xl py-2">
                  Aliquam eleifend mi in nulla posuere sollicitudin. Quisque
                  egestas
                </p>
                <ButtonComponents>Discover More</ButtonComponents>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
