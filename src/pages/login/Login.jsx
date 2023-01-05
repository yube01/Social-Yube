import React from 'react'
import "./login.scss"



const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>
            Hey, Welcome     <br/> on board
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde eaque architecto dolore ratione praesentium quasi provident sequi voluptatum asperiores.
          </p>

          <div className="text">
          <span>
            Don't have a account?
          </span>
          <button>
            Register
          </button>

          </div>
         
        </div>
        <div className="right">
          <h1>
            Login
          </h1>
          <form >
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
          </form>
          <button>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login