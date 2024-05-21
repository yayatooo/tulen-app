import React from "react";
import Image from "next/image";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

export const TestimonialsPage = () => {
  return (
    <main className="py-20 bg-[#252425]">
      <div className="container">
        <h1 className="xl:text-8xl xs:text-4xl font-bold text-center text-white">
          Testimonials
        </h1>
        <p className="text-2xl font-bold text-gray-400 text-center">
          95% Say their teamwork is more efficieent
        </p>
      </div>
      <div className="py-20 flex xl:flex-row xs:flex-col container items-center justify-between">
        <div className="xl:w-7/12 xs:w-full">
          <h1 className="text-4xl text-white font-serif leading-relaxed">
            The theme incorporates very good components that greatly facilitate
            the task of designing the pages. The support also works very well,
            they attend quickly and solve the problems that arise or if not,
            they tell you how to configure the components to get the desired
            result.
          </h1>

          <div className="mt-24 flex justify-between items-center">
          <div>
          <h1 className="text-3xl font-bold text-[#97fe87]">Bessie Cooper</h1>
          <p className="text-xl font-semibold text-gray-400">CEO Amazon</p>
        </div>
        <div className="text-2xl text-white space-x-8">
          <button>
            <GrCaretPrevious />
          </button>
          <button>
            <GrCaretNext />
          </button>
        </div>
          </div>
        </div>
        <div>
          <Image src="/team-1.png" width={368} height={546} alt="team" />
        </div>
      </div>
    </main>
  );
};
