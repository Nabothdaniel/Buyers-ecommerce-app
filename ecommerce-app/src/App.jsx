import { Home } from "./pages/Home"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { PrimaryNav } from "./components/PrimaryNav"

const App =()=> {
  const Location = useLocation();

  return (
    <>
      <div className="">
      <Header/>
      <PrimaryNav/>
        {Location.pathname === '/' ?   <Home/> : <Outlet/> }
        <Footer/>
      </div>
      
    </>
  )
}

export default App
