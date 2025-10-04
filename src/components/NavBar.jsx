import React, { useState } from "react";
import { FaBars, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";  

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      {/* Desktop menu */}
      <ul className="hidden sm:flex px-4 gap-6">
        <li>
          <Link to="/" className="hover:text-2xl hover:bg-gray-600 hover:rounded-full hover:p-4">Home</Link>
        </li>
        <li>
          <Link to="/team" className="hover:text-2xl hover:bg-gray-600 hover:rounded-full hover:p-4">Our Team</Link>
        </li>
        <li>
          <Link to="/events" className="hover:text-2xl hover:bg-gray-600 hover:rounded-full hover:p-4">Events</Link>
        </li>
        <li>
          <Link to="/clubs" className="hover:text-2xl hover:bg-gray-600 hover:rounded-full hover:p-4">Clubs</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-2xl hover:bg-gray-600 hover:rounded-full hover:p-4">Contribute</Link>
        </li>
      </ul>

      <div className="flex justify-between">
        <a href="https://www.facebook.com/people/Oxbridge-Baku/100078740981755/?sk=photos" target="_blank" rel="noopener noreferrer"><FaFacebookF className="mx-4" /></a>
        <a href="https://www.instagram.com/oxbridgebaku/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram className="mx-4" /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter className="mx-4" /> </a>
        <a href="https://www.instagram.com/oxbridgestuco?igsh=YWd2aDcyczhnajJm" target="_blank" rel="noopener noreferrer"><FaInstagram className="mx-4" /></a>
      </div>

      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>

      <div
        className={ nav ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500" }>

        <ul className="w-full h-full text-center pt-12">
          <li className="text-2xl py-8">
            <Link to="/" onClick={handleNav}>Home</Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/events" onClick={handleNav}>Events</Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/clubs" onClick={handleNav}>Clubs</Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/contact" onClick={handleNav}>Contribute</Link>
          </li>
           <li className="text-2xl py-8">
            <Link to="/team" onClick={handleNav}>Meet Our Team</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
