"use client";

import React, { useEffect } from 'react'
import Hero from './Hero/Hero';
import Trending from '../Trending/Trending';
import Latest from './Latest/Latest';
import Highlights from './Highlights/Highlights';
import LatestPost from './LatestPost/LatestPost';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(()=>{
    const initAos = async()=>{
      await import ('aos');
      AOS.init({
        duration:1000,
        easing: "ease",
        once:true,
        anchorPlacement: "top-bottom",

      });
    };

    initAos();
  },[]);


  return (
    <div>
      <Hero />
      <Trending /> 
      <Latest />
      <Highlights />
      <LatestPost />
    </div>
  )
}

export default Home;