import React from 'react'
import "./navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import NightlightIcon from '@mui/icons-material/Nightlight';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to = "/" style={{textDecoration:"none"}}>
        <span>
          BeSocial.
        </span>
        </Link>
       
        <HomeIcon/>
        <NightlightIcon/>
        <GridViewIcon/>
        <div className="search">
        <SearchIcon/>
          <input type="text" placeholder='Search' />

        </div>
        
        

      </div>
      <div className="right">
        <PersonIcon/>
        <EmailIcon/>
        <NotificationsIcon/>
        <div className="person">
          <img src="https://images.pexels.com/photos/9746/people-mother-family-father.jpg" alt="" />
          <span>
            John Curry
          </span>
        </div>
      </div>
    </div>
  )
}

export default navbar