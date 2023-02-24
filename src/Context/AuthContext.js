import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({ children}) =>{
    const [ currentUser , setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))  || null 
        );

        
        const login = async(inputs) =>{
            const res = await axios.post("http://localhost:5555/api/auth/login",inputs,{
                 withCredentials:true
            })

           
            setCurrentUser(res.data)
        }

        useEffect(() =>{
             localStorage.setItem("user", JSON.stringify(currentUser)) //local storage can only accept current info in string
        },[currentUser])


        return(
            //sending darkmode and toggle function
            <AuthContext.Provider value ={{ currentUser , login}}>
                {children}
            </AuthContext.Provider>
        )
} 