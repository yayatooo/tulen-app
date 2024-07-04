import React from "react";

const CustomerPage: React.FC = () => {
  return (
    <main className="bg-[#0014d2] py-20">
      <div className="container flex xs:flex-col xl:flex-row justify-center gap-12">
        <h1 className="font-bold text-6xl text-[#bbf026] flex flex-col items-center gap-6">
          15+ <span className="text-2xl text-white">Years of Experience</span>
        </h1>
        <h1 className="font-bold text-6xl text-[#f6791c] flex flex-col items-center gap-6">
          168 <span className="text-2xl text-white">Project Delivered</span>
        </h1>
        <h1 className="font-bold text-6xl text-[#2ce3ef] flex flex-col items-center gap-6">
          56 <span className="text-2xl text-white">Team Member</span>
        </h1>
      </div>
    </main>
  );
};

export default CustomerPage