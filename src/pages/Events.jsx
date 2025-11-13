import OutsideBG from "../OutsideEventsBG.jpeg";
import EventCard from "../components/EventCard.jsx";
import CurrentEventCard from "../components/CurrentEventCard.jsx";

// Past Event Pictures
import HackathonPicture from "../EventPictures/HackathonEventifySTUCO.jpeg";
import HalloweenPartyPicture from "../EventPictures/HalloweenPartySTUCO.jpeg";
import SecretSantaPicture from "../EventPictures/SecretSanta2024STUCO.jpeg";
import ChessTournamentPicture from "../EventPictures/RapidChessTournamentSTUCO.jpeg"
import MovieNightPaddingtonPicture from "../EventPictures/MovieNightSTUCO2024.jpeg"
import OxbridgeMUN2024 from "../EventPictures/OxbridgeMUNSTUCO2024-5.jpeg"
import SponsorPets from '../EventPictures/SponsorAPet.png'
import FootballMatch from "../EventPictures/TeachersVsStudentsFootball2025.png"

// This year's Event Pictures
import LogicWizard from "../EventPictures/LogicWizard.png"
import IcebreakerGames from "../EventPictures/IcebreakerGameDay.png"
import BeautyOfScience from "../EventPictures/beauty_of_science_poster.png"


// Future Event Pictures
import SharkTank from "../EventPictures/SharkTankGame.png";
import AirplaneOrigami from "../EventPictures/paperAirplanePicture.png"
import WhoWantsToBeA from "../EventPictures/whowantstobe.png"
import MusicFestival from "../EventPictures/MusicFestivalPic.png"
import VolleyballCompetition from "../EventPictures/VolleyballEvent.png"
import MiniOlympics from "../EventPictures/MiniOlympicsEvent.png"



const past_events = [
  { eventImage: HalloweenPartyPicture, eventName: "Haloween Party", eventDate: "October, 2024", eventDescription: "Party with fun costumes, pop music, and sweets in the canteen", eventColor: "bg-orange-300" },
  { eventImage: SecretSantaPicture, eventName: "Shaxta Baba", eventDate: "December, 2023", eventDescription: "Present collection for Talysh children, Secret Santa event for Oxbridge students.", eventColor: "bg-blue-300" },
  { eventImage: HackathonPicture, eventName: "Hackathon with Eventify", eventDate: "January, 2025", eventDescription: "Programming competition that was open to all university and high-school students", eventColor: "bg-green-300" },
  { eventImage: ChessTournamentPicture, eventName: "Chess Tournament", eventDate: "March, 2025", eventDescription: "Chess tournament with 'Rapid' time control", eventColor: "bg-yellow-300" },
  { eventImage: MovieNightPaddingtonPicture, eventName: "Movie Night", eventDate: "February, 2024", eventDescription: "Padington movie, popcorn, and bonding.", eventColor: "bg-rose-300" },
  { eventImage: OxbridgeMUN2024, eventName: "Oxbridge MUN", eventDate: "March, 2024", eventDescription: "Model United Nations at Oxbridge Academy", eventColor: "bg-indigo-300" },
  { eventImage: SponsorPets, eventName: "Sponsor A Pet", eventDate: "2025", eventDescription: "Pet Sponsoring Program for primary and secondary school classes", eventColor: "bg-purple-300" },
  { eventImage: FootballMatch, eventName: "Farewell Football Match", eventDate: "October, 2024", eventDescription: "Football game with teachers against year 12 students", eventColor: "bg-emerald-300" },
]; 
const future_events = [
  { eventImage: AirplaneOrigami, eventName: "Origami Airplane Competition", eventDate: "2025", eventDescription: "Team competition about crafting paper airplanes", eventColor: "bg-purple-300" },
  { eventImage: VolleyballCompetition, eventName: "Volleyball tournament", eventDate: "2025?", eventDescription: "Fun tournament of our beloved sport game", eventColor: "bg-teal-300" },
  { eventImage: MusicFestival, eventName: "Music Festival", eventDate: "2025", eventDescription: "A lovely musical show: musical instruments and vocals", eventColor: "bg-sky-300" },
  { eventImage: WhoWantsToBeA, eventName: "Who wants to be a scientist?", eventDate: "2025", eventDescription: "Secondary school competition in collaboration with the science department", eventColor: "bg-yellow-300" },
  { eventImage: SharkTank, eventName: "Student Shark Tank", eventDate: "2025", eventDescription: "Show-inspired competition for business students to solve real-life problems.", eventColor: "bg-indigo-300" },
  { eventImage: MiniOlympics, eventName: "Mini Olympics", eventDate: "2025", eventDescription: "Fun and short PE minigames - collaboration with the PE department", eventColor: "bg-red-300" },
];
const current_events = [
  { eventImage: IcebreakerGames, eventName: "Icebreaker Games Event", eventDate: "October 10th", eventDescription: "Year 10 and 11 bond while playing crazy and fun games with teams", moreDetails: "/beauty_of_science"},
  { eventImage: BeautyOfScience, eventName: "Beauty Of Science", eventDate: "October 17th", eventDescription: "Students present fascinating Ted-talks about science to year 7 and 8", moreDetails: "/beauty_of_science"},
  { eventImage: LogicWizard, eventName: "Logic Wizardry Competition", eventDate: "October 24th", eventDescription: "Evil witches and Harry Potter observe year 7 solving magic puzzles in teams", moreDetails: "/beauty_of_science"},
]
const Events = () => {
  return (
    <div>
      <div className="relative">
        <img src={OutsideBG} alt="Events Banner" className="w-full h-auto" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-12 border-2 border-black p-2 sm:p-4 bg-stone-700/70 w-11/12 sm:w-2/3">
          <h1 className="text-xl sm:text-3xl font-bold text-white text-center sm:text-left"> Events: 2024-Present </h1>
        </div>
      </div>

      <div className="flex items-center justify-center w-full p-4 sm:p-6 border-4 border-gray-400 my-8 sm:my-16">
        <h1 className="text-3xl sm:text-6xl font-bold my-2 sm:my-4 text-center hover:motion-preset-confetti"> Our Past Events </h1>
      </div>
      <h1 className="text-xl sm:text-xl my-2 mb-8 sm:my-4 mb-8 text-center"> Note: we have selected only the most recent & significant ones for now </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 justify-items-center">
        {past_events.map((event, index) => (<EventCard key={index} {...event} />))}
      </div>


     <div className="flex items-center justify-center w-full p-4 sm:p-6 border-4 border-gray-400 my-8 sm:my-16">
        <h1 className="text-3xl sm:text-6xl font-bold my-2 sm:my-4 text-center hover:motion-preset-confetti">This Year's Events</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 justify-items-center">
        {current_events.map((event, index) => (<CurrentEventCard key={index} {...event} />))}
      </div>


      <div className="flex items-center justify-center w-full p-4 sm:p-6 border-4 border-gray-400 my-8 sm:my-16">
        <h1 className="text-3xl sm:text-6xl font-bold my-2 sm:my-4 text-center hover:motion-preset-confetti">Upcoming Events</h1>
      </div>
     <h1 className="text-xl sm:text-xl my-2 mb-8 sm:my-4 mb-8 text-center"> Note: The first 2 are definite, the other events are only suggestions and ideas yet</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 justify-items-center">
        {future_events.map((event, index) => (<EventCard key={index} {...event} />))}
      </div>

    </div>
  );
};

export default Events;
