import HerroAria from "../../Components/HerroAria/HerroAria";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
// import styles from './Home.module.css';




const Home = () => {
    return (
        <div>
                <HerroAria/>
            <div className="container">
                <ServiceCard/>
            </div>
            
        </div>
    );
};

export default Home;