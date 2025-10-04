import React from "react";
import MemberCard from "../components/MemberCard";

// PICTURES)

import AnonymousMember from "../STUCO_members/Anonymous_member.png";
import NurayHuseynliPhoto from "../STUCO_members/Nuray_Huseynli_Picture.jpg";
import AydanGaragurbanliPhoto from "../STUCO_members/AydanGaragurbanliSTUCOpicture.JPG";
import JavadOrujovPhoto from "../STUCO_members/Javad_Orujov_Picture.jpg";
import SaraAsadovaPhoto from "../STUCO_members/Sara_Asadova_Picture.jpg";
import TahirMammadovPhoto from "../STUCO_members/Tahir_Picture.jpg";
import MehribanTahirovaPhoto from "../STUCO_members/Mehriban_Tahirova_Picture.jpg";
import AyazPhoto from "../STUCO_members/Ayaz_Picture.jpg";
import GozelPhoto from "../STUCO_members/Gozel_Picture.jpg";
import GulnazHeydarovaPhoto from "../STUCO_members/Gulnaz_Heydarova_Picture.jpg";
import NazliIsmikhanliPhoto from "../STUCO_members/Nazli_Ismikhanli_Picture.jpg";
import NigarPhoto from "../STUCO_members/Nigar_Picture.jpg";
import JamalPhoto from "../STUCO_members/Jamal_Picture.jpg";
import AbbasPhoto from "../STUCO_members/Abbas_Picture.jpg";
import Zarifa_Aliyeva_Photo from "../STUCO_members/Zarifa_Aliyeva_Picture.jpg";
import Sharmin_Photo from "../STUCO_members/Sharmin_Picture.jpg";
import Lina_Photo from "../STUCO_members/Lina_Picture.jpg";
import VanessaChokarovaPhoto from "../STUCO_members/Vanessa_Picture.jpg"


const headMembers = [
  { name: "Novrasta Huseynova",
    grade: "Teacher",
    status: "Council Supervisor",
    photo: AnonymousMember,},

  { name: "Nuray Huseynli",
    grade: "12th Grade",
    status: "President",
    photo: NurayHuseynliPhoto,},

  { name: "Zarifa Aliyeva",
    grade: "10th Grade",
    status: "Vice President",
    photo: Zarifa_Aliyeva_Photo,},

  { name: "Javad Orujov",
    grade: "10th Grade",
    status: "Treasurer",
    photo: JavadOrujovPhoto,},
]

const eventCoordinators = [
  { name: "Nazli Ismikhanli",
    grade: "10th Grade",
    status: "Academic Event Coordinator",
    photo: NazliIsmikhanliPhoto,},

  { name: "Vanessa Chokarova",
    grade: "10th Grade",
    status: "Sport Event Coordinator",
    photo: VanessaChokarovaPhoto,},

  { name: "Tahir Mammadov",
    grade: "10th Grade",
    status: "Charity Event Coordinator",
    photo: TahirMammadovPhoto,},
];

const otherMembers = [
  { name: "Abas Mazanli",
    grade: "11th Grade",
    status: "Secretary",
    photo: AbbasPhoto,},

  { name: "Kamal Zulfugarli",
    grade: "11th Grade",
    status: "IT manager",
    photo: AnonymousMember,},

  { name: "Jamal Bashirov",
    grade: "6th Grade",
    status: "Environment & Ecology Initiator",
    photo: JamalPhoto,},

  { name: "Sara Asadova",
    grade: "11th Grade",
    status: "Head of Logistics",
    photo: SaraAsadovaPhoto,},

]

const socialMembers = [
  { name: "Sharmin Badalbayli",
    grade: "10th Grade",
    status: "Social Media Manager",
    photo: Sharmin_Photo,},

  { name: "Lina Abdullayeva",
    grade: "10th Grade",
    status: "Social Media Manager",
    photo: Lina_Photo,},

  { name: "Aydan Garagurbanli",
    grade: "Faculty Member",
    status: "Public Relations Manager",
    photo: AydanGaragurbanliPhoto,},

  { name: "Mehriban Tahirova",
    grade: "10th Grade",
    status: "Cinematography Council",
    photo: MehribanTahirovaPhoto},
]

const radioTeam = [
  { name: "Ayaz Aliyev",
    grade: "11th Grade",
    status: "Head of Radio Team",
    photo: AyazPhoto,
  },
  {
    name: "Nigar Alizade",
    grade: "10th Grade",
    status: "Host 1",
    photo: NigarPhoto,
  },
  {
    name: "Gozel Karimli",
    grade: "11th Grade",
    status: "Host 2",
    photo: GozelPhoto,
  },

  {
    name: "Gulnaz Heydarova",
    grade: "10th Grade",
    status: "Music Manager",
    photo: GulnazHeydarovaPhoto,
  },  
]

export default function Team() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100">
      <h1 className="mt-12 text-3xl font-bold text-center motion-preset-confetti"> Meet Our Official Team for 2025-2026!</h1>

      <h1 className="mt-12 text-4xl font-bold text-center"> Head Members </h1>
      
      <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-6xl">
        {headMembers.map((member, index) => (
          <MemberCard key={index}
            photo={member.photo}
            name={member.name}
            grade={member.grade}
            status={member.status}/>))  }
      </div>

      <h1 className="mt-12 text-4xl font-bold text-center"> Event Coordinators </h1>
     <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-6xl">
        {eventCoordinators.map((member, index) => (
          <MemberCard key={index}
            photo={member.photo}
            name={member.name}
            grade={member.grade}
            status={member.status}/>))  }
      </div>

     <h1 className="mt-12 text-4xl font-bold text-center"> Crucial Assistants </h1>
     <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-6xl">
        {otherMembers.map((member, index) => (
          <MemberCard key={index}
            photo={member.photo}
            name={member.name}
            grade={member.grade}
            status={member.status}/>))}
      </div>

     <h1 className="mt-12 text-4xl font-bold text-center"> Social Initiators </h1>
     <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-6xl">
        {socialMembers.map((member, index) => (
          <MemberCard key={index}
            photo={member.photo}
            name={member.name}
            grade={member.grade}
            status={member.status}/>))}
      </div>

     <h1 className="mt-12 text-4xl font-bold text-center"> Radio Team </h1>
     <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-6xl">
        {radioTeam.map((member, index) => (
          <MemberCard key={index}
            photo={member.photo}
            name={member.name}
            grade={member.grade}
            status={member.status}/>))  }
      </div>

      <div className="mt-16 w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Responsibility List
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-gray-300 text-left text-3xl font-bold">Role</th>
                <th className="px-6 py-3 text-gray-300 text-left text-3xl font-bold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-700 bg-rose-500 text-white">
              <tr>
                <td className="px-6 py-4">President</td>
                <td className="px-6 py-4">Leads the council, represents students, oversees all activities.</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Vice-President </td>
                <td className="px-6 py-4">Coordinates academic initiatives and supports the president.</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Treasurer</td>
                <td className="px-6 py-4">Manages finances, budgets, and fundraising.</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Event Coordinator</td>
                <td className="px-6 py-4">Helps organize and execute events of a particular type they are responsible for. </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Logistics Member</td>
                <td className="px-6 py-4">Handles materials, setups, and event resources. </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Secretary</td>
                <td className="px-6 py-4">Keeps records of meeting notes, handles communication with administration</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Environment & Ecology Initiator</td>
                <td className="px-6 py-4">Promotes eco-friendliness, helps organize environmental events and campaigns.</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Social Media Manager</td>
                <td className="px-6 py-4">Creates content and manages social media posts.</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Public Relations Manager</td>
                <td className="px-6 py-4">Works with SMMs, manages posters and presentations.</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Head of Radio Team</td>
                <td className="px-6 py-4">Leads the radio team, organizes schedules and ideas about the scripts, steps in when someone is absent.</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Radio Team Hosts</td>
                <td className="px-6 py-4">Present scripts about holidays, updates, and other engaging topics. Create thematic music playlists.</td>
              </tr>
            </tbody>
          </table>

        </div>
          <div className="flex flex-column bg-gray-400/60 rounded-md border-1 border-gray-600 p-4 mt-16">
            <h1 className="6xl"> Meeting 1 (onsite) - Brief Introduction - 19/09/2025 </h1>
          </div>
          <div className="flex flex-column bg-gray-400/60 rounded-md border-1 border-gray-600 p-4 mt-8">
            <h1 className="6xl"> Meeting 2 (online) - Plans for October - 05/10/2025 </h1>
          </div>
      </div>
    </div>
  );
}
