import styles from "./Project.module.css";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div >
      <div className="container">
        <div className={styles.mainBox}>
          <div className={styles.heading}>
            <h1>My Protfilios</h1>
          </div>

          <div className={styles.box} >
            <div className={styles.protfiloBox} data-aos="zoom-in">
              <h2>Wather Update App</h2>
              <Link to={"https://my-wather-app.vercel.app/"}>
                <img src="/wather.png" alt="" />
              </Link>
              <Link to={"https://my-wather-app.vercel.app/"}>
                <button className={styles.btn}>GoTo Website</button>
              </Link>
            </div>
            <div className={styles.protfiloBox} data-aos="zoom-in">
              <h2>Resume Maker App</h2>
              <Link to={"https://resume-buider.vercel.app/"}>
                <img src="resume-builder.png" alt="" />
              </Link>
              <Link to={"https://resume-buider.vercel.app/"}>
                <button className={styles.btn}>GoTo Website</button>
              </Link>
            </div>
          </div>
        </div>
         <Link to={"/project"}><button className={styles.see}>See All Projects</button></Link>
      </div>
    </div>
  );
};

export default Project;
