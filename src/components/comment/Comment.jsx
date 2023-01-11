import React from 'react'
import "./comment.scss"
import { useContext } from 'react'
import {AuthContext} from "../../Context/AuthContext"
const Comment = () => {


    const {currentUser} = useContext(AuthContext);


 const comments = [
    {
        id:1,
        name:" Smiht John",
        userId:1,
        profilePic:"https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloremque?",
        
      },
      {
        id:2,
        name:" Smiht John",
        userId:1,
        profilePic:"https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloremque?",
       
      },
]



  return (
    <div className="comments">
        <div className="write">
        <img src= {currentUser.profilePic} alt="" />
        <input type="text" placeholder='Enter a comment' />
        <button> Send </button>

        </div>
       
        

        {comments.map(comment=>(
            <div className="comment">
                <img src= {comment.profilePic} alt="" />
                <div className="info">
                    <span> {comment.name} </span>
                    <p> {comment.desc} </p>
                </div>
                <span className='date'>
                    1 min ago 
                </span>
            </div>
        ))}

    </div>
  )
}

export default Comment