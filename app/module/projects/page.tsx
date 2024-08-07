import React from "react";
import Image from "next/image";
import { work } from "@/app/utility/data";

const ProjectsPage: React.FC = () => {
  return (
    <main className="py-20 container">
      <h1 className="xl:text-8xl xs:text-5xl text-center text-font font-bold">Latest Work</h1>
      <div className="flex justify-center gap-x-6 py-8 xs:overflow-auto">
        <button className="border-black border-2 py-2 px-8 text-xl hover:bg-[#bbf026]">
          All
        </button>
        <button className="border-black border-2 py-2 px-8 text-xl hover:bg-[#bbf026]">
          Design
        </button>
        <button className="border-black border-2 py-2 px-8 text-xl hover:bg-[#bbf026]">
          Media
        </button>
        <button className="border-black border-2 py-2 px-8 text-xl hover:bg-[#bbf026]">
          Mobile
        </button>
        <button className="border-black border-2 py-2 px-8 text-xl hover:bg-[#bbf026]">
          Web
        </button>
      </div>
      <div className="grid xl:grid-cols-3 gap-y-12 justify-items-center items-center py-16">
        {work.map((item, index) => (
          <div key={index} className="flex justify-center items-center object-cover">
            <Image src={item.image} width={370} height={470} alt="gallery" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage