import React from 'react'
import Hero from './Hero/Hero';
import Trending from '../Trending/Trending';
import Latest from './Latest/Latest';
import Highlights from './Highlights/Highlights';
import LatestPost from './LatestPost/LatestPost';

const Home = () => {
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