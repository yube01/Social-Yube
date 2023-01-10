import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx"
import { createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx"
import LeftBar from "./components/leftBar/LeftBar.jsx"; 
import RightBar from "./components/rightBar/RightBar.jsx";
import Home from "./pages/home/Home.jsx"
import Profile from "./pages/profile/Profile.jsx"
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext.js";
import { AuthContext } from "./Context/AuthContext.js";

const App = () => {

  const {currentUser} = useContext(AuthContext)

  const {darkMode} = useContext(DarkModeContext)
  

  const Layout  = ()=>{
    return(
      <div className={`theme-${darkMode ? "dark" :"light"}`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
          <Outlet/>

          </div>
      
          <RightBar/>
        </div>
      </div>
    )
  }


  //redirecting user to login page if not logged in 
  // else redirecting to home page
  // here children is layout
  const ProtectedRoute = ({children}) =>{
    if (!currentUser)
    return <Navigate to="/login"/>
    else
    return children

  }

  const router = createBrowserRouter([

    {
      path:"/",
      element: <ProtectedRoute> <Layout/> </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path :"/login",
      element:<Login/>

    },
    {
      path:"/register",
      element:<Register/>
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
