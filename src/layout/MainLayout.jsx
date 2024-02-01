import { Outlet } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
