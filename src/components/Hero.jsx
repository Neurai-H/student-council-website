import React from "react";
import backgroundPhoto from "../OxbridgeFlagBearers.png";

const Hero = () => {
  return (
    <div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${backgroundPhoto})` }}>
      <div className="flex flex-col items-center h-full bg-black/50 text-white text-center p-4">
        <h1 className="pb-2 leading-[1.3] text-4xl sm:text-5xl md:text-6xl font-bold mt-32 mb-2 text-transparent bg-clip-text  bg-gradient-to-r from-white via-rose-200 to-white bg-[length:200%_auto] animate-shine">
          Welcome to Oxbridge Student Council -  </h1>

        <h2 className="text-yellow-100 text-2xl"> a place where passion, structure, and collaboration meet</h2>
        <h2 className="text-2xl sm:text-2xl md:text-2xl text-yellow-100 m-4"> We: </h2>

        <div className="flex justify-center gap-6 w-full max-w-6xl mx-auto p-4">
            <div className="flex-1 min-w-[150px] max-w-[250px] aspect-square bg-red-500 rounded-md
                            flex items-center justify-center p-4 text-center
                            transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:brightness-125">
                <p>Organize social, academic, and charity events</p>
            </div>

            <div className="flex-1 min-w-[150px] max-w-[250px] aspect-square bg-red-500 rounded-md
                            flex items-center justify-center p-4 text-center
                            transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:brightness-125">
                <p>Enhance communication between students and staff</p>
            </div>

            <div className="flex-1 min-w-[150px] max-w-[250px] aspect-square bg-red-500 rounded-md
                            flex items-center justify-center p-4 text-center
                            transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:brightness-125">
                <p>Help students to participate in interscholastic events</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
