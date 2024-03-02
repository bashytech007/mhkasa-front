import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-white">
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};
