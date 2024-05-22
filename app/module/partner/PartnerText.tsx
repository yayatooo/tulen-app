import React from "react";
import Image from "next/image";

export const PartnerText = () => {
  return (
    <>
      <section className="bg-font xl:pb-[35rem]">
        <div className=" py-20 xs:px-6 container">
          <h1 className="font-bold text-white xs:text-4xl xl:text-7xl leading-snug">
            Magna eget est Consequat interdum varius sit amet mattis vulputate.
            <span className="text-primary"> Sem et tortor</span> consequat id.
            Aliquam ut porttitor diam{" "}
            <span className="text-btn-primary">sollicitudin tempor id</span>
          </h1>
        </div>
        <div className="absolute z-10 inset-0 xs:top-[107rem] xl:top-[125rem] flex justify-center items-center">
          <Image
            src="/partner-section.png"
            alt="banner"
            height={778}
            width={1170}
            className="mx-auto"
          />
        </div>
      </section>
    </>
  );
};
