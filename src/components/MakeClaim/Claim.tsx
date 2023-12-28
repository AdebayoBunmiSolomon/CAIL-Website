import React from "react";
import Hero from "../Hero";
import { Formik, Form, Field } from "formik";
import { Button } from "../ui/button";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowForward } from "react-icons/io";

const Claim = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [isFocused, setIsFocused] = React.useState(false);

  const initialValues = {
    fullname: "",
    email: "",
    dob: "",
    mobileNumber: "",
    policy: "",
    report: "",
  };

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }
  return (
    <div>
      <div>
        <Hero
          title="Make A Claim, its Fast And Easy. "
          subtitle="No Story!"
          description=""
        />
      </div>
      <div className="mt-6">
        <Tabs
          selectedIndex={selectedTab}
          onSelect={(index) => setSelectedTab(index)}
          className={"flex flex-col  "}
        >
          <TabList
            list-style="none"
            className={
              "flex outline-none items-center justify-center py-[10px] gap-2 rounded-3xl mx-[500px] bg-[#F4E6E6]"
            }
          >
            <Tab className={" outline-none bg-[#F4E6E6]"}>
              <h6
                className={` text-xs md:text-sm ${
                  selectedTab === 0 ? "text-[white]" : "text-[black]"
                } rounded-2xl ${
                  selectedTab === 0 ? "bg-[#900000]" : "bg-[#F4E6E6]"
                } px-2 py-1 cursor-pointer `}
              >
                Make claim
              </h6>
            </Tab>
            <Tab className={" outline-none bg-[#F4E6E6]"}>
              <h6
                className={` ${
                  selectedTab === 1 ? "text-[white]" : "text-[black]"
                } ${
                  selectedTab === 1 ? "bg-[#900000]" : "bg-[#F4E6E6]"
                } text-sm rounded-2xl px-2 py-1 cursor-pointer `}
              >
                Claim status
              </h6>
            </Tab>
          </TabList>

          <TabPanel>
            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
              >
                {({ handleChange }) => (
                  <Form className="px-10 py-10">
                    <h1 className="text-[#900000] font-semibold text-xl mb-4">
                      Fill the following details
                    </h1>
                    <div className="flex gap-4">
                      <div className=" flex flex-col gap-4  w-[60%]">
                        {" "}
                        <div className="grid grid-cols-2 gap-4 ">
                          <Field
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            onChange={handleChange}
                            className="border border-solid border-[#6C8396] p-2"
                          />
                          <Field
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            className="border border-solid border-[#6C8396] p-2"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <Field
                            type="text"
                            name="mobileNumber"
                            placeholder="Mobile Number"
                            onChange={handleChange}
                            className="border border-solid border-[#6C8396] p-2"
                          />
                          <Field
                            type={isFocused ? "date" : "text"}
                            name="dob"
                            placeholder="Date of Birth"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="border border-solid border-[#6C8396] p-2"
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          <Field
                            type="number"
                            name="policy"
                            placeholder="Policy Number"
                            onChange={handleChange}
                            className="border border-solid border-[#6C8396] p-2"
                          />{" "}
                        </div>
                      </div>
                      <div className=" flex flex-col gap-6  w-[30%]">
                        <Field
                          type="text"
                          name="report"
                          onChange={handleChange}
                          className="  border border-solid border-[#6C8396] p-2 pb-16"
                          placeholder="Report an Incident"
                        />
                        <Button type="submit" className="bg-[#900000] ">
                          <span className="flex justify-between gap-28 items-center ">
                            Make a Claim <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="my-4 justify-center items-center">claim status</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Claim;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
