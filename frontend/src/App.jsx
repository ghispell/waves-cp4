import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu"; // Assurez-vous d'importer votre composant SideMenu
import Footer from "./components/Footer";
import "./styles/root.scss";
import { motion } from "framer-motion";

function App() {
  const variants = {
    open: { x: 0, transition: { type: "spring", stiffness: 100 } },
    closed: { x: "-100%" },
  };
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="main relative">
      {/* <motion.div
        animate={isSideMenuOpen ? "open" : "closed"}
        variants={variants}
      >
        <SideMenu onClose={toggleSideMenu} />
      </motion.div> */}
      {isSideMenuOpen && <SideMenu onClose={toggleSideMenu} />}
      <div>
        <Navbar onMenuClick={toggleSideMenu} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
