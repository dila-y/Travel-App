import React, {useEffect} from 'react';
import './Destination.css';

//import icons 
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

//imported images
import image1 from '../../assets/33.jpg';
import image2 from '../../assets/5.jpg';
import image3 from '../../assets/7.jpg';
import image4 from '../../assets/44.jpg';
import image5 from '../../assets/88.jpg';
import image6 from '../../assets/55.jpg';
import image7 from '../../assets/77.jpg';
import image8 from '../../assets/11.jpg';

//import aos
import Aos from 'aos';
import 'aos/dist/aos.css'


//array that contain all destination data.looping through this data
const destination = [
    {
        id: 1,
        img: image1,
        name: 'Maui Island ', 
        location: 'Hawaii, U.S.',
        rating: 4.7,
    },

    {
        id: 2,
        img: image2,
        name: 'Barcelona', 
        location: 'Spain',
        rating: 4.4,
    },

    {
        id: 3,
        img: image3,
        name: 'Ponte Vecchino', 
        location: 'Venice, Italy',
        rating: 4.5,
    },

    {
        id: 4,
        img: image4,
        name: 'Seycheles ISland', 
        location: 'Indian Ocean',
        rating: 4.9,
    },

    {
        id: 5,
        img: image5,
        name: 'Boredeaux', 
        location: 'France',
        rating: 4.4,
    },

    {
        id: 6,
        img: image6,
        name: 'Bristol', 
        location: 'England',
        rating: 4.7,
    },

    {
        id: 7,
        img: image7,
        name: 'Mount Fuji', 
        location: 'Japan',
        rating: 4.8,
    },

    {
        id: 8,
        img: image8,
        name: 'Olkhon ISland', 
        location: 'Russia',
        rating: 4.5,
    },
];


const Destination = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className='destination section container'>
            <div className="secContainer">

                <div className="secTitle">
                    <span className="redText">
                        Explore Now
                    </span>

                    <h3 data-aos = "fade-up">
                        Find Your Dream Destination 
                    </h3>
                    <p data-aos = "fade-up">
                        Fill in the fields below to find the best spot for your next trip 
                    </p>
                </div>

               <div className="searchField grid">

                <div className="inputField flex" data-aos = "fade-up">
                    <MdLocationPin className='icon'/>
                    <input type="text" placeholder='location' />
                </div>

                
                <div className="inputField flex" data-aos = "fade-up" >
                    <BsFillCreditCardFill className='icon'/>
                    <input type="text" placeholder='Budget' />
                </div>

                
                <div className="inputField flex" data-aos = "fade-up">
                    <BsFillCalendarDateFill className='icon'/>
                    <input type="text" placeholder='Date' />
                </div>

                <button className="btn flex" data-aos = "fade-up">
                <BiSearchAlt2 className='icon'/> Search 
                </button>
               </div>
                
                <div className="secMenu">
                    <ul className="flex" data-aos = "fade-up">
                        <li className="active">All</li>
                        <li>Recommended</li>
                        <li>Beach</li>
                        <li>Park</li>
                        <li>Nature</li>
                        <li>Mountain</li>
                    </ul>
                </div>

                <div className="destinationContainer grid">
                    {destination.map(destination => {
                        return (
                            <div className="singleDestination" key={destination.id} data-aos = "fade-up">
                            <div className="imgDiv" data-aos = "fade-up">
                               <img src={destination.img} alt="Destination Image" />
       
                               <div className="descInfo flex">
                                   <div className="text">
                                       <span className="name">{destination.name}
                                        
                                       </span>
                                       <p className="flex">
                                       <TiLocation className='icon'/>{destination.location}
                                      
                                       </p>
                                   </div>
                       <span className="rating">
                           {destination.rating}
                       </span>
                               </div>
                            </div>
                           </div> 
                        )
                    })}
               
                </div>
            </div> 
        </div>
    );
};

export default Destination;
