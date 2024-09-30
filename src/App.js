import React from 'react';
import './App.css'; 
import Navbar from './Navbar';
import Hero from './Hero';  
import MenuItem from './MenuItem';
import AboutUs from './AboutUs';
import Rooms from './Rooms';
import Amenities from './Amenities';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />         
      <MenuItem />
      <AboutUs />
      <Rooms />
      <Amenities />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
