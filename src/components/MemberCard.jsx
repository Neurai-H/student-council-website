import React from "react";

const MemberCard = ({ photo, name, grade, status }) => {
  return (
    <div className="w-40 sm:w-48 md:w-52 bg-white text-black rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={photo}
        alt={name}
        className="
          w-24 h-24 sm:w-28 sm:h-28
          rounded-full object-cover mb-4
          bg-white
          [transform:translateZ(0)]
          [backface-visibility:hidden]
        "
      />
      <h3 className="font-bold text-lg text-center">{name}</h3>
      <p className="text-sm text-gray-600">{grade}</p>
      <p className="text-sm font-semibold mt-1">{status}</p>
    </div>
  );
};

export default MemberCard;
