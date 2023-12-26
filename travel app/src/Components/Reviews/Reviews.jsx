import React,{useEffect} from 'react';
import './Reviews.css';

//icons import
import { AiFillStar } from "react-icons/ai";


//imported images
import image1 from '../../assets/user1.jpg';
import image2 from '../../assets/user2.jpg';
import image3 from '../../assets/user3.jpg';
import image4 from '../../assets/user4.jpg';
import image5 from '../../assets/01.jpg';

//import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const Reviews= () => {

 useEffect(() => {
        Aos.init({duration: 2000})
    }, []);


    return (
        <div className='review section container'>
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="redText"data-aos = "fade-up" >
                        FROM OUR CLIENTS
                    </span>

                    <h3 data-aos = "fade-up">Real Travel History From Our Clients</h3>

                    <p data-aos = "fade-up">
                        By choosing us as their tour agency, customer can expect an enriching and enjoyable travel experience,
                        filled with unforgettable memories that will last a lifetime. 
                    </p>

                    <span className="stars flex" data-aos = "fade-up">
                    <AiFillStar className='icon' />
                    <AiFillStar className='icon' />
                    <AiFillStar className='icon' />
                    <AiFillStar className='icon' />
                    <AiFillStar className='icon' />
                    </span>

                    <div className="clientsImages flex" >
                        <img src={image1} alt="client image" data-aos = "fade-up"/>
                        <img src={image2} alt="client image" data-aos = "fade-up"/>
                        <img src={image3} alt="client image" data-aos = "fade-up"/>
                        <img src={image4} alt="client image" data-aos = "fade-up"/>
                     
                    </div>
                </div>

                <div className="imgDiv">
                    <img src={image5} alt="Div Image" data-aos = "fade-down"/>
                </div>
            </div>

        </div>
    );
};

export default Reviews; 