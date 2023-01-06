import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'



const Login = () => {
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
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Name' />
            <input type="password" placeholder='Password' />
          </form>
          <button>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login