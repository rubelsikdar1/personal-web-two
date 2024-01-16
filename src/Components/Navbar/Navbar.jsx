import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className={styles.fullPage}>
            <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.logoAnHumbarger}>
                        <img src="./logo.png" alt="" />
                        <i className={styles.HumbargerHide}><GiHamburgerMenu /></i>
                    </div>
                    <div className={styles.menuItem}>
                        <ul className={styles.ul}>
                            <NavLink to={"home"}> <li>Home</li></NavLink>
                            <NavLink to={"about"}> <li>About</li></NavLink>
                            <NavLink to={"service"}> <li>Service</li></NavLink>
                            <NavLink to={"blog"}> <li>Blog</li></NavLink>
                            <NavLink to={"project"}> <li>Project</li></NavLink>
                            <NavLink to={"contact"}> <li>Contact</li></NavLink>
                        </ul>
                    </div>
                    <div className={styles.button}>
                        <Link><button>Hire Me </button></Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;