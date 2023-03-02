import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import SliderAnimado from '../components/SliderAnimado';

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SliderAnimado />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>);
}

export default Home;
