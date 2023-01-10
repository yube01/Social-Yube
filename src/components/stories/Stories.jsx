import React from 'react'
import "./stories.scss"
const Stories = () => {


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
        {
            id:2,
            name:"Smih",
            img:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
            
        },

    ]

  return (
    <div className="stories">
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