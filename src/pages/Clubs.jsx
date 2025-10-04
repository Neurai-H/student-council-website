import React from "react";
import clubPeople from "../engagement.png";

const Clubs = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row lg:justify-between mt-16">
        
        <div className="flex flex-col lg:w-1/2">
          <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-start">
            <h1 className="text-2xl lg:text-3xl lg:ml-20 text-center lg:text-left font-semibold">
              We have several clubs managed <br /> by the student council!
            </h1>
            <img src={clubPeople} alt="icon" className="lg:ml-16 w-16 lg:w-24"/>
          </div>

          <div className="flex flex-wrap justify-center mt-8 items-center gap-12 flex-1">
            <div className="bg-gray-600/60 w-36 lg:w-40 h-36 lg:h-40 rounded-lg flex justify-center items-center text-white shadow-md motion-preset-fade">
              Chess Club!
            </div>
            <div className="bg-gray-600/60 w-36 lg:w-40 h-36 lg:h-40 rounded-lg flex justify-center items-center text-white shadow-md motion-preset-fade">
              AI Club!
            </div>
            <div className="bg-gray-600/60 w-36 lg:w-40 h-36 lg:h-40 rounded-lg flex justify-center items-center text-white shadow-md motion-preset-fade">
              Coming Soon!
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start mt-4 lg:w-1/2">
          <h1 className="text-2xl mb-8 lg:text-4xl font-semibold">Gallery - work in progress</h1>
          
          <div className="flex gap-4 flex-wrap justify-center mx-auto">
            <video src="/ChessClubVideo1.mp4" autoPlay loop muted className="w-64 sm:w-72 lg:w-80 aspect-video rounded-lg shadow-lg"/>
            <video src="/ChessClubVideo2.mp4" autoPlay loop muted className="w-64 sm:w-72 lg:w-80 aspect-video rounded-lg shadow-lg"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Clubs;
