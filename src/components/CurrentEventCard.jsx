import { MdOutlineRemoveModerator } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const CurrentEventCard = ({ eventImage, eventName, eventDate, eventDescription, eventColor, moreDetails }) => {
  return (
    <div className={`rounded-lg shadow-lg flex flex-col w-72 h-84 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
      <img src={eventImage} alt={eventName} className="w-full h-48 object-cover"/>

      <div className={`flex flex-col flex-grow p-4 ${eventColor}`}>
        <h2 className="text-lg text-gray-800 font-bold mb-1">{eventName}</h2>
        <p className="text-sm text-gray-700 mb-2">{eventDate}</p>
        <p className="text-sm text-gray-800 line-clamp-4">{eventDescription}</p>
        <Link to={moreDetails} className="color-red-600 w-70 h-30">
        
          Click for more information!
        
        </Link>
      </div>

    </div>
  );
};

export default CurrentEventCard;