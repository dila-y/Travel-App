import React, {useEffect} from 'react';
import './Subscribe.css';

//imported images 
import image from '../../assets/image3.jpg';

//import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

    return (
        <div className='subscribe section container'>
            <div className="secContainer grid">
                <div className='imgDiv'> 
                <img src={image} alt="Div Image" data-aos = "fade-down"/>
                </div>

                <div className="textDiv">
                <h4 data-aos = "fade-up">Best Way to Start Your Journey!</h4>
                <p data-aos = "fade-up">
                    We offer personalized itineraries tailored to individual preferences and interests. 
                </p>

                <button className='btn' data-aos = "fade-up">
                    Start here
                </button>
                </div>

            </div>

        </div>
    );
};

export default Subscribe; 