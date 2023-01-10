import React from 'react'
import "./stories.scss"
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
const Stories = () => {


    const {currentUser} = useContext(AuthContext)


    const stories = [
        {
            id:1,
            name:"Smith",
            img:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
           
        },
        {
            id:2,
            name:"Smih",
            img:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
            
        },
        {
            id:2,
            name:"Smih",
            img:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
            
        },
        {
            id:2,
            name:"Smih",
            img:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
            
        },
  

    ]

  return (
    <div className="stories">
        <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <button> + </button>
                <span> {currentUser.name} </span>
            </div>
        {stories.map(story=>(
            <div className="story">
                <img src={story.img} alt="" />
                <span> {story.name} </span>
            </div>
        ))}
    </div>
  )
}

export default Stories