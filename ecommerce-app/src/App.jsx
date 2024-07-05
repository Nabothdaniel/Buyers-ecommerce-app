import { Home } from "./pages/Home"
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/naviagtion/Header";
import { Footer } from "./components/naviagtion/Footer";
import { PrimaryNav } from "./components/naviagtion/PrimaryNav";
import {ToastContainer} from 'react-toastify';
import { useScrollToTop } from "./hooks/useScrollToTop";
const App =()=> {
  const Location = useLocation();

  return (
    <>
      <div className="">
      <Header/>
      <PrimaryNav/>
        {Location.pathname === '/' ?   <Home/> : <Outlet/> }
        <Footer/>
        <ToastContainer/>
      </div>  
      <UseScrollToTop/>    
    </>
  )
}

export default App
