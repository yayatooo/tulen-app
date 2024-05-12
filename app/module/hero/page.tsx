import { ButtonComponents } from "@/app/ui/ButtonComponents";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const HeroPage = () => {
  return (
    <main className="bg-primary py-24 text-[#252524]">
      <section className="container flex gap-x-6 items-center">
        <section className="w-8/12">
          <h1 className="text-8xl font-bold py-12">
            Build, Grow & Manage Your Brand
          </h1>
          <div className="flex gap-6 mt-8">
            <ButtonComponents variant="primary">Get Started</ButtonComponents>
            <ButtonComponents variant="primary">Learn More</ButtonComponents>
          </div>
        </section>
        <section>
          I
          <Image
            src="./illustration-banner.svg"
            alt="hero"
            height={500}
            width={500}
          />
        </section>
      </section>
      <ul className="container flex gap-8 font-bold text-xl mt-20">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Dribble</li>
      </ul>
    </main>
  );
};
