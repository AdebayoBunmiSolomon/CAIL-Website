import React from "react";
import { useState } from "react";
import { Button } from "../components/ui/button";

const NewsLetter = () => {
  const [email, setEmail] = useState<any>("");
  return (
    <div className="flex flex-col w-full  ">
      <div className=" text-xl md:text-3xl lg:text-5xl font-bold flex justify-start my-2">
        <p>Subscribe to our Newsletter</p>
      </div>
      <div className=" w-full flex items-center py-2 justify-between pl-4 pr-2 rounded-full border border-solid border-[#6C8396] h-[70px] ">
        {" "}
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          className="w-[600px] bg-transparent  px-2 outline-none focus:shadow-outline-blue text-[#6C8396]"
          placeholder="Enter your email adress"
        />
        <Button
          onClick={() => {
            console.log(email);
          }}
          className="bg-[#900000]  h-full"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
