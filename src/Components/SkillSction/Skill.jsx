import styles from "./Skill.module.css";
import { FaDownload } from "react-icons/fa6";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  const skillData = [
    {
      sillName: "React Js",
      persent: 90,
    },
    {
      sillName: "Javascript",
      persent: 95,
    },
    {
      sillName: "Tailwind",
      persent: 80,
    },
    {
      sillName: "Bootstrap",
      persent: 96,
    },
    {
      sillName: "Wordpress",
      persent: 97,
    },
  ];
  return (
    <div>
      <div className="container">
        <div className={styles.mainBox}>
          <div className={styles.left}
               data-aos="fade-right"
          >
            <img src="/Profiling.gif" alt="" />
            <h1>My Special Skill Field  Here.</h1>
            <button className={styles.btn}>
              Get Resume <FaDownload />{" "}
            </button>
          </div>
          <div className={styles.right}
               data-aos="fade-left"
          >
            {skillData.map((value, index) => {
              return (
                <div key={index.toString()} className={styles.skillBox}>
                  <div className={styles.rightBoxTop}>
                    <div className={styles.text}>
                      <p>{value.sillName}</p>
                    </div>
                    <div className={styles.persent}>
                      <p>{value.persent}%</p>
                    </div>
                  </div>
                  <ProgressBar
                    completed={value.persent}
                    maxCompleted={100}
                    bgColor={"#E74C3C"}
                    animateOnRender={true}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
