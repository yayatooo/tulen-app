import React from "react";
import Image from "next/image";
import { PartnerText } from "./PartnerText";
import { PartnerGrid } from "./PartnerGrid";

export const PartnerPage = () => {
  return (
    <>
     <PartnerText/>
     {/* <div className="flex justify-center z-30">
      <Image
        src="/partner-section.png"
        alt="banner"
        height={778}
        width={1170}
      />
    </div> */}
     <PartnerGrid />
    </>
  );
};
