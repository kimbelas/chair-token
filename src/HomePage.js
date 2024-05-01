import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import About from './components/About';
import Footer from './components/Footer';
import Break from './components/Break';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero id="hero" />
      <Break />
      <About id="about" />
      <Break />
      <Why id="why" />
      <Break />
      <Footer id="join-us" />
    </div>
  );
}

export default HomePage;
