
import React from "react";	
import { Formik, Form, Field} from "formik";
import { ContactValidation } from "./ContactValidation";
import { Button } from "./ui/button";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <div className="md:grid md:grid-cols-3 flex-col md:flex-row lg:flex-row gap-10 py-4 mx-10 mt-5">
      <div className="col-span-2 flex flex-col">
        <h1 className="text-[#900000] font-semibold text-2xl">
          Share your ideas, inquiries and provide feedback
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={ContactValidation}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange}) => (
            <Form className="grid grid-cols-1 gap-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <Field
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="border border-solid border-[#6C8396] p-2"
                  placeholder="Full Name"
                />
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="border border-solid border-[#6C8396] p-2"
                  placeholder="Email"
                />
              </div>
              <div className="grid grid-cols-2">
                <Field
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  placeholder="Subject"
                  className="col-span-2 border border-solid border-[#6C8396] p-2 pb-4"
                />
              </div>
              <div className="grid grid-cols-2">
                <Field
                  type="text"
                  name="message"
                  onChange={handleChange}
                  placeholder="Message"
                  className="col-span-2 border border-solid border-[#6C8396] p-2 pb-10"
                />
              </div>
              <div>
                <Button type="submit"  className="px-16 mt-4">
                  Send
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="col-span-1 rounded-lg flex flex-col gap-4 p-6 bg-[#F5F5F5]">
        <div>
          <h1 className="font-semibold text-lg">The Office</h1>
          <p className="text-sm">
            Address: 16A, Commercial Avenue, Sabo, Yaba, Lagos
          </p>
          <p className="text-sm">Phone: (+234)12774000-9</p>
          <p className="text-sm">Email: carecentre@custodianinsurance.com</p>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Business Hours</h1>
          <p className="text-sm">Monday - Friday: 9am to 5pm</p>
          <p className="text-sm">Saturday: Closed</p>
          <p className="text-sm">Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm