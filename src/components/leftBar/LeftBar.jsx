import React, { useContext } from 'react'
import "./leftBar.scss"
import Friend from "../../img/friend.png"
import Course from "../../img/courses.png"
import Events from "../../img/events.png"
import Fund from "../../img/fundraiser.png"
import Gallery from "../../img/gallery.png"
import Gaming from "../../img/gaming.png"
import Group from "../../img/group.png"
import Market from "../../img/marketplace.png"
import Memory from "../../img/memories.png"
import Msg from "../../img/msg.png"
import Tutorial from "../../img/tutorial.png"
import Video from "../../img/video.png"
import Watch from "../../img/watch.png"
import { AuthContext } from '../../Context/AuthContext'

const LeftBar = () => {


  const {currentUser} = useContext(AuthContext)


  return (
    <div className="leftBar">
      <div className="menu">
        <div className="profile">
        <img src={currentUser.profilePic} alt="" />
        <span> 
          {currentUser.name}
        </span>

        </div>
       
        <div className="items">
          <img src={Friend} alt="" />
          <span>
            Friend
          </span>

        </div>
        <div className="items">
          <img src={Group} alt="" />
          <span>
            Group
          </span>

        </div>
        <div className="items">
          <img src={Market} alt="" />
          <span>
            Marketplace
          </span>

        </div>
        <div className="items">
          <img src={Watch} alt="" />
          <span>
            Watch
          </span>

        </div>
        <div className="items">
          <img src={Memory} alt="" />
          <span>
            Memories
          </span>
        </div>
        <hr />
        <span>
          Your Shortcuts
        </span>
        <div className="items">
          <img src={Events} alt="" />
          <span>
            Events
          </span>
        </div>
        <div className="items">
          <img src={Gaming} alt="" />
          <span>
            Gaming
          </span>
        </div>
        <div className="items">
          <img src={Gallery} alt="" />
          <span>
            Gallery
          </span>
        </div>
        <div className="items">
          <img src={Video} alt="" />
          <span>
            Videos
          </span>
        </div>
        <div className="items">
          <img src={Msg} alt="" />
          <span>
            Messages
          </span>
        </div>
        <hr />
        <span>
          Others
        </span>
        <div className="items">
          <img src={Fund} alt="" />
          <span>
            Fundraiser
          </span>
        </div>
        <div className="items">
          <img src={Tutorial} alt="" />
          <span>
            Tutorials
          </span>
        </div>
        <div className="items">
          <img src={Course} alt="" />
          <span>
            Courses
          </span>
        </div>


      </div>
    </div>
  )
}

export default LeftBar