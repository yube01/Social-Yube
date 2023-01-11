import React from 'react'
import "./Profile.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';




const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/12366061/pexels-photo-12366061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='cover'  />
        <img src="https://images.pexels.com/photos/14336506/pexels-photo-14336506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='profilePic'/>
        <h1>
          John Smith
        </h1>

      </div>
      <div className="left">
        <a href="https://www.facebook.com">
          <FacebookIcon/>
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon/>
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon/>
        </a>
        <a href="https://www.linkedin.com">
          <LinkedInIcon/>
        </a>
        <a href="https://www.pinterest.com">
          <PinterestIcon/>
        </a>
        
      </div>
      <div className="center">
        <div className="items">
          <FmdGoodIcon/>
          <span> USA</span>
        </div>
        <div className="items">
          <LanguageIcon/>
          <span> besocial.</span>
        </div>
      </div>
      <div className="right">
        <MailOutlineIcon/>
        <MoreVertIcon/>
      </div>
    </div>
  )
}

export default Profile