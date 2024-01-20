import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import styles from "./MainLayout.module.css"
import { motion, useScroll } from "framer-motion";

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <Navbar />
      {/* <ScrollRestoration /> */}
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />
        <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
