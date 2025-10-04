import React from "react";
import ContactForm from "../components/ContactForm.jsx";
import LoginForm from "../components/LoginForm.jsx";
import VotingForm from "../components/VotingForm.jsx";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="motion-translate-y-in-100 text-4xl my-16 text-center md:text-left">
        Your voice matters! :) Make an influence and help us improve here:
      </h1>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-6 items-stretch">
        <div className="bg-white p-6 rounded shadow flex justify-center items-center">
          <LoginForm />
        </div>

        <div className="bg-white p-6 rounded shadow flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl mb-6 text-red-700">
            1. A suggestion can be about anything.<br />2. A vote is chosen from three options
          </h2>
          <h2 className="text-xl mb-6 text-stone-500">
            Vote here. You can only do it once and only while logged in
          </h2>
          <VotingForm />
        </div>

        <div className="md:col-span-2 lg:col-span-1 bg-white p-6 rounded shadow flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
