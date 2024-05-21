import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ButtonComponents } from "@/app/ui/ButtonComponents";

export const ContactPage = () => {
  return (
    <main className="flex xs:flex-col xl:flex-row">
      <div className="bg-contactImage xs:h-screen xl:h-[130vh] text-center xs:w-full xl:w-6/12 bg-cover bg-center flex justify-center items-center">
        <h1 className="text-7xl text-white font-bold">Get in Touch</h1>
      </div>
      <div className="py-28 xs:px-6 xl:px-36 xl:w-6/12 xs:w-full">
        <p className="font-medium text-gray-500 py-12">
          We are glad that you want to get in touch with us. If you have any
          questions comments or feedback please fill free to contact.
        </p>
        <form className="space-y-8">
          <Input type="text" placeholder="Name" className="rounded-none p-8" />
          <Input
            type="email"
            placeholder="Email"
            className="rounded-none p-8 text-black"
          />
          <Input
            type="text"
            placeholder="Your Budget"
            className="rounded-none p-8 text-black"
          />
          <Input
            type=""
            placeholder="Your Budget"
            className="rounded-none p-8 text-black"
          />
          <Textarea
            placeholder="Additional Information"
            className="rounded-none p-8 text-black"
          />
          <ButtonComponents variant="secondary">Send Message</ButtonComponents>
        </form>
      </div>
    </main>
  );
};
