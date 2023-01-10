import React from 'react'
import "./Post.scss"
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const Post = ({post}) => {
  return (
   <div className="post">
    <div className="container">
      <div className="profileInfo">
        <div className="profile">
          <img src={post.profilePic} alt="" />

          <div className="details">
          <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}} >
          <span className='name'> {post.name} </span>
         
          </Link>
          <span className='date'> 1 min ago</span>

          </div>
         
          
        </div>
       
          <MoreHorizIcon/>
       

      </div>
      <div className="profileImg">
        <p> {post.desc} </p>
        <img src={post.img} alt="" />
      </div>
      <div className="reaction">
        <div className="items">
        <FavoriteBorderIcon/>
        13 Likes

        </div>
        <div className="items">
        <CommentIcon/>
        Comment

        </div>
        <div className="items">
        
        <ShareIcon/>
       Share

        </div>
        
        
        
       

      </div>
    </div>
   </div>
    
  )
}

export default Post