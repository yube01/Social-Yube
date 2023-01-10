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
                profilePic:"https://images.pexels.com/photos/7726306/pexels-photo-7726306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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