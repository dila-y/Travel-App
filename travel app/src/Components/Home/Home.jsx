import React, {useEffect} from 'react';
import './Home.css';
import { AiOutlineSwapRight } from "react-icons/ai";

//import assets
import Video from '../../assets/video.mp4';
import image1 from '../../assets/22.jpg';
import image2 from '../../assets/7.jpg';
import image3 from '../../assets/55.jpg';
import image4 from '../../assets/77.jpg';

//import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    return (

        <div className='Home'>
           <div className="videoBg">
            <video src={Video}autoPlay loop muted playsInline></video>
           </div> 

           <div className="sectionText">
            <h1 data-aos = "fade-up">Discover Your Travel Dreams with Us!</h1>
            <p data-aos = "fade-up"> 
            Explore the most daring landscape on Earth while there is still time to do so.
            </p>
            <button className="btn flex">GET STARTED <AiOutlineSwapRight className='icon' /></button>
       
           </div>

        <div className="popularPlaces">
            <div className="content">
                <h3 data-aos="fade-up"> Popular Places </h3>
               <div className="images flex" data-aos="fade-up">
                <img src={image1} alt="Destination Image" /> 
                <img src={image2} alt="Destination Image" />
                <img src={image3} alt="Destination Image" />
                <img src={image4} alt="Destination Image" />
               </div>
                
            </div>
        </div>

        </div>
    );
};

export default Home;
