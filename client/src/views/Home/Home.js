import React from 'react';


import Header from "./Header";
import Feature from "./Feature";
import About from "./About";
import about from "./Image/about.png";
import Presentation from "./Presentation";
import Contact from "./Contact";
import './Home.css';

const Home = () => {
  return (
    <>
      <Header></Header>
      <Feature></Feature>
      <Presentation />
      <About image={about} title="Check all detail here" button="explore here"></About>
      <Contact></Contact>
    </>
  )
}

export default Home;