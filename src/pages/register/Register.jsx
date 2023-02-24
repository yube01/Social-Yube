import React, { useState } from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'
import axios from "axios"


const Login = () => {



  const [inputs, setInputs]= useState({
    username:"",
    email:"",
    name:"",
    password:""
  })

  const [err , setErr]  =useState(null)


  const handleChange = (e)=>{
    setInputs((prev)=>
    ({
      ...prev,[e.target.name]:e.target.value
    }))
  }

  

  const handleClick = async(e)=>{
    e.preventDefault();

    try {
      await axios.post("http://localhost:5555/api/auth/register", inputs)
    } catch (err) {
      setErr(err.response.data)
      
    }
    console.log(err)


  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>
            Hey,
            What's up
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde eaque architecto dolore ratione praesentium quasi provident sequi voluptatum asperiores.
          </p>

          <div className="text">
          <span>
            Do you have a account?
          </span>

          <Link to="/login">
          <button>
            Login
          </button>
          </Link>
         

          </div>
         
        </div>
        <div className="right">
          <h1>
            Register
          </h1>
          <form >
            <input type="text" placeholder='Username' name="username" onChange={handleChange} />
            <input type="email" placeholder='Email' name="email" onChange={handleChange} />
            <input type="text" placeholder='Name'  name="name" onChange={handleChange} />
            <input type="password" placeholder='Password' name="password" onChange={handleChange} />
            
           
            
          </form>
          <button onClick={handleClick}>
            Register
          </button>
         
        </div>
      </div>
    </div>
  )
}

export default Login