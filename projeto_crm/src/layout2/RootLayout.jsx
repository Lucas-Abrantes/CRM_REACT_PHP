import NavBar from "../components/layout/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";

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