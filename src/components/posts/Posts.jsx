import React from 'react'
import "./posts.scss"
import Post from "../post/Post"

const Posts = () => {

  const posts = [
    {
      id:1,
      name:" Smiht John",
      userId:1,
      profilePic:"https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloremque?",
      img:"https://images.pexels.com/photos/2231814/pexels-photo-2231814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:2,
      name:" Smiht John",
      userId:1,
      profilePic:"https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloremque?",
      img:"https://images.pexels.com/photos/3049414/pexels-photo-3049414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]


  return (
    <div className="posts">
      {posts.map(post =>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts