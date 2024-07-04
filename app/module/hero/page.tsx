import { ButtonComponents } from "@/app/ui/ButtonComponents";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroPage: React.FC = () => {
  return (
    <main className="bg-primary py-24 text-[#252524]">
      <section className="container flex xs:flex-col xl:flex-row xs:px-6 gap-x-6 items-center">
        <section className="xs:w-full xl:w-8/12">
          <h1 className="xs:text-5xl xl:text-8xl font-bold py-12">
            Build, Grow & Manage Your Brand
          </h1>
        </section>
        <section>
          
          <Image
            src="./illustration-banner.svg"
            alt="hero"
            height={500}
            width={500}
          />
        </section>
      </section>
      <div className=" container flex gap-6 mt-8 xs:flex-col xl:flex-row items-center">
            <ButtonComponents variant="primary">Get Started</ButtonComponents>
            <ButtonComponents variant="primary">Learn More</ButtonComponents>
          </div>
      <ul className="container flex gap-8 font-bold xl:text-xl mt-20 xs:px-0 xs:justify-center xl:justify-start xl:px-6">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Dribble</li>
      </ul>
    </main>
  );
};

export default HeroPage