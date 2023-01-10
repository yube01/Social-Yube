import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()


export const DarkModeContextProvider = ({ children}) =>{
    const [ darkMode , setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode "))  || false // false means user has visited site for the first time
        );

        // function for toggling between dark and light mode
        const toggle = () =>{
            setDarkMode(!darkMode)
        }

        useEffect(() =>{
             localStorage.setItem("darkMode", darkMode)
        },[darkMode])


        return(
            //sending darkmode and toggle function
            <DarkModeContext.Provider value ={{darkMode , toggle}}>
                {children}
            </DarkModeContext.Provider>
        )
} 