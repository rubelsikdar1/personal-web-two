import styles from "./HerroAria.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const HerroAria = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className={styles.herroBg}>
        <div className={styles.blur}>
      <div className="container">
        <div className={styles.herroContainent}>
          <div className={styles.herroLeft} data-aos="zoom-in" data-aos-duration="1000">
            <h2>Hello! I’m</h2>
            <h1>Rubel Sikdar</h1>
            <p>
              <Typewriter
                words={["Front-End Web Developer", "Expert In: Framework : React Js , Next Js","Expert In: CSS Library : Tailwind , Bootstrap" ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                
                />
            </p>
            <button>Check Resume </button>
          </div>
          <div className={styles.herroRight} data-aos="zoom-in" data-aos-duration="1000">
            <div className={styles.round}></div>
            <div className={styles.photo}>
              <img src="./herro.png" alt="" />
            </div>
            <div className={styles.icons}>
              <div className={`${styles.linkedin} ${styles.icon}`}>
                <FaLinkedin />
              </div>
              <div className={`${styles.email} ${styles.icon}`}>
                <MdOutlineMailOutline />
              </div>
              <div className={`${styles.facebook} ${styles.icon}`}>
                <FaFacebookF />
              </div>
              <div className={`${styles.whatsApp} ${styles.icon}`}>
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HerroAria;
