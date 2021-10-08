import React from 'react';


import Header from "./HomeComponet/Header";
import Feature from "./HomeComponet/Feature";
import About from "./HomeComponet/About";
import about from "./HomeComponet/Image/about.png";
import Presentation from "./HomeComponet/Presentation";
import Contact from "./HomeComponet/Contact";
import './Home.css';
const Home = () => {
    return (
        <>
          <Header></Header> 
          <Feature></Feature>
          <Presentation/>
          <About image={about} title="Check all detail here" button="explore here"></About>
          <Contact></Contact>
        </>
    )
}

export default Home;