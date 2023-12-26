import React, {useEffect} from 'react';
import './Portfolio.css';

//import image
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import image from '../../assets/2.jpg';

//import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
 useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

    return (
        <div className='portfolio section container'>
            <div className="secContainer grid">
                <div className="leftContent">
                    <div className="secHeading">
         <h3 data-aos = "fade-up" >Why Should You Choose Us</h3>
         <p data-aos = "fade-up" >
            We have extensive knowledge and experience in the travel industry.
         </p>
        </div>

        <div className="grid">
            <div className="singlePortfolio flex" data-aos = "fade-up"> 
            <div className="iconDiv">
                <img src={icon1} alt="icon image" />
            </div>
           
            <div className="infor">
            <h4> Safety and Support</h4>
            <p>
                Our top priority is the safety and well-being of our clients.
                We maintain high safety standards and have emergency support available during the trip. 
            </p>
            </div>
            </div>


            <div className="singlePortfolio flex" data-aos = "fade-up"> 
            <div className="iconDiv">
                <img src={icon2} alt="icon image" />
            </div>
           
            <div className="infor">
            <h4> Diverse Range of Destination</h4>
            <p>
                Whether it is a domestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and preferences.
            </p>
            </div>
       
            </div>


            <div className="singlePortfolio flex" data-aos = "fade-up"> 
            <div className="iconDiv">
                <img src={icon3} alt="icon image" />
            </div>
           
            <div className="infor">
            <h4> 24/7 Customer Support </h4>
            <p>
                Our dedicated customer support team s available round the clock 
                to address any queries or concerns before, during or after the trip.
            </p>
            </div>
       
            </div>


        </div>
                </div>

                <div className="rightContent" data-aos = "fade-down">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio; 