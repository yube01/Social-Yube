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
import Posts from "../../components/posts/Posts"





const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/12366061/pexels-photo-12366061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='cover'  />
        <img src="https://images.pexels.com/photos/14336506/pexels-photo-14336506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='profilePic'/>
       

      </div>
      <div className="profileInfos">
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
        <span className='name'> John Smith</span>
        <div className="item">
        <div className="items">
          <FmdGoodIcon fontSize='small'/>
          <span> USA</span>
        </div>
        <div className="items">
          <LanguageIcon fontSize='small'/>
          <span> besocial.</span>
        </div>

        </div>
        
        <button>
          Follow
        </button>
      </div>
      <div className="right">
        <MailOutlineIcon/>
        <MoreVertIcon/>
      </div>

      </div>
      <Posts/>
      
    
    </div>
    
  )
}

export default Profile