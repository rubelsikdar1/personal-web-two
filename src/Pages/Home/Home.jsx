import HerroAria from "../../Components/HerroAria/HerroAria";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
// import styles from './Home.module.css';
import Skill from './../../Components/SkillSction/Skill';
import Project from './../../Components/Project/Project';




const Home = () => {
    return (
        <div>
                <HerroAria/>
            <div className="container">
                <ServiceCard/>
            </div>
            <div>
                <Skill/>
            </div> 
            <div>
                <Project/>
            </div>
        </div>
    );
};

export default Home;