import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar"

function RootLayout() {
  return (
    <>
        <NavBar/>
        <Outlet />
        <Footer/>     
    </>
  );
}

export default RootLayout;