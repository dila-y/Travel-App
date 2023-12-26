import React from 'react';
import './App.css';


import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/navbar';
import Middle from './Components/Middle/Middle';
import Destination from './Components/Destination/Destination';
import Portfolio from './Components/Portfolio/Portfolio';
import Reviews from './Components/Reviews/Reviews';
import Questions from './Components/Questions/Questions';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Destination />
      <Portfolio />
      <Reviews />
      <Questions />
      <Subscribe />
      <Footer />
 
 
    </div>
  );
}

export default App;
