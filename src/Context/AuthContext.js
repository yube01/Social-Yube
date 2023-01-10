import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({ children}) =>{
    const [ currentUser , setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))  || null 
        );

        
        const login = () =>{

            setCurrentUser({
                id:1,
                name:"John Smith",
                profilePic:"https://images.pexels.com/photos/9746/people-mother-family-father.jpg"
            });
            
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