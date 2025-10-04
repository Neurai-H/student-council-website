import React from "react"
import {AiFillPhone, AiOutlineClockCircle} from "react-icons/ai"
import {BsChatSquareDots} from "react-icons/bs"
import stucoLogo from "../OxbridgeLogo.jpg";

const TopBar = () => {
    return (
      <div className="flex justify-between items-center py-2 px-4">
          <div>
            <div className="flex items-center">
              <img src={stucoLogo} alt="Oxb Stuco Logo"/>
              <h1 className="mx-4 ">Oxbridge Academy Student Council</h1>
            </div>
          </div>

          <div>
            <button  onClick={() => window.open("https://oxbridgedu.az/", "_blank")}> Visit Our School's Website! </button>
          </div>            
      </div>
    )
}

export default TopBar;