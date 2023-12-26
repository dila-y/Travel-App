import React, { useState } from 'react';
// //import link from react-router-dom
// import { Link } from 'react-router-dom';
import './Navbar.css';



//imported icons 
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {

  //state to track and update navbar
  const[navBar , setNavBar] = useState("menu");

  //function to show navbar 
  const showNavbar = () => {
    setNavBar("menu showNavbar");
  }

  //function to remove navbar
  const removeNavbar = () => {
    setNavBar("menu ")
  }
  return (
    <div className="navBar">
      <div className="logoDiv">
      <BiLogoMediumOld className='icon'/>
      <span>y - Trips </span>
      </div>

      <div className={navBar}>

        <ul>
          <li className="navList">
            Destination
          </li>
          <li className="navList">
            About Us
          </li>
          <li className="navList">
            Feedback
          </li>
          <li className="navList">
            Gallery 
          </li>
        </ul>

      {/* icon to remove Navbar */}
      <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
      </div>

     {/* <Link to='./RegistrationForm' className="signUpBtn btn">
      Sign Up
     </Link>  */}

      <button className="signUpBtn btn">
        Sign Up
      </button>


      {/* icon to toggle Navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar}/>
      </div>
  );
};

export default Navbar;
