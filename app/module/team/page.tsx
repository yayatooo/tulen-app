import { ButtonComponents } from "@/app/ui/ButtonComponents";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const TeamPage: React.FC = () => {
  return (
    <main className="py-20 bg-sage">
      <h1 className="xl:text-8xl xs:text-5xl font-bold text-center">Our Team</h1>

      <div className="py-16 z-0">
      <Marquee>
        <Image src="/team/1.png" width={360} height={370} alt="team" />
        <Image src="/team/2.png" width={360} height={370} alt="team" />
        <Image src="/team/3.png" width={360} height={370} alt="team" />
        <Image src="/team/4.png" width={360} height={370} alt="team" />
        <Image src="/team/1.png" width={360} height={370} alt="team" />
        <Image src="/team/2.png" width={360} height={370} alt="team" />
        <Image src="/team/3.png" width={360} height={370} alt="team" />
      </Marquee>
      </div>

      <h1 className="text-2xl font-bold text-center xs:w-full xl:w-4/12 mx-auto">
        Aliquam eleifend mi in nulla posuere sollicitudin. Quisque egestas diam
        in arcu cursus
      </h1>
      <div className="flex justify-center py-8">
        <ButtonComponents variant="secondary">Join Our Team</ButtonComponents>
      </div>
    </main>
  );
};

export default TeamPage