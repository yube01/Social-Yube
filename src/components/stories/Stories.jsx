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
            profilePic:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
           
        },
        {
            id:2,
            name:"Smih",
            profilePic:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
            
        },
        {
            id:3,
            name:"Smih",
            profilePic:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
            
        },
        {
            id:4,
            name:"Smih",
            profilePic:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
            
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
            <div className="story" key={story.id}>
                <img src={story.profilePic} alt="" />
                <span> {story.name} </span>
            </div>
        ))}
    </div>
  )
}

export default Stories