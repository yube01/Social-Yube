import React, { useContext, useState } from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'



const Login = () => {

  const [inputs, setInputs]= useState({
    username:"",
   
    password:""
  })

  const [err , setErr]  =useState(null)


  const handleChange = (e)=>{
    setInputs((prev)=>
    ({
      ...prev,[e.target.name]:e.target.value
    }))
  }



  const {login} = useContext(AuthContext);

  const handleLogin = async(e)=>{
    e.preventDefault();
    try {
     await login(inputs);
    } catch (error) {
      setErr(err.response.data)
      
    }
   
  }

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
          <Link to="/register">
          <button>
            Register
          </button>
          </Link>
        

          </div>
         
        </div>
        <div className="right">
          <h1>
            Login
          </h1>
          <form >
            <input type="text" placeholder='Username' name='usernmame' onChange={handleChange} />
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />
          </form>
          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login