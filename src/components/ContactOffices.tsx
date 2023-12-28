import React from "react";
import { MockContact } from "@/assets/data/getContactData";
import OfficeCard from "./OfficeCard";

const ContactOffices = () => {
  return (
    <div>
      <div className=" mx-5 font-extrabold text-3xl p-2 mt-1">
        <h1 className="px-6 mt-4">Contact Offices</h1>
      </div>

      <div className="grid grid-cols-3 justify-center pr-6 w-[fit] mx-5 flex-1 gap-4 flex-wrap">
        {MockContact &&
          MockContact.map((office) => (
            <OfficeCard
              title={office.title}
              city={office.city}
              state={office.state}
              phone={office.phone}
              address={office.address}
            />
          ))}
      </div>
    </div>
  );
};

export default ContactOffices;
