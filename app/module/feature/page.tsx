import Image from "next/image";
import React from "react";
import { HiSparkles } from "react-icons/hi2";

export const FeaturePage = () => {
  return (
    <main className="py-20 bg-feature">
      <div className="container flex xs:flex-col xl:flex-row  justify-center gap-x-20">
        <Image
        className="rounded-full"
          src="/feature-section.png"
          width={504}
          height={756}
          alt="feature"
        />
        <div className="xl:w-5/12 xs:w-full xs:text-center xl:text-start">
          <h1 className="font-bold text-5xl text-white py-12">
            Simplify operations and drive growth.
          </h1>
          <div className="xl:w-7/12 xs:w-full space-y-8">
            <h3 className="py-3 px-6 bg-creamy rounded-full font-medium text-2xl flex items-center gap-4">
              <span className="text-btn-primary">
                <HiSparkles />
              </span>
              Easy Integration
            </h3>
            <h3 className="py-3 px-6 bg-tosca rounded-full font-medium text-2xl flex items-center gap-4">
              <span className="text-btn-primary">
                <HiSparkles />
              </span>
              Trandy Design
            </h3>
            <h3 className="py-3 px-6 bg-sage rounded-full font-medium text-2xl flex items-center gap-4">
              <span className="text-btn-primary">
                <HiSparkles />
              </span>
              Fast Pefromance
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};
