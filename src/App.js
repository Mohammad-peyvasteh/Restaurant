import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import FoodMenu from './components/FoodMenu';
import Category from './components/Category';
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <FoodMenu/>
      <Category/>
      <Footer/>
      
    </div>
  );
}

export default App;
