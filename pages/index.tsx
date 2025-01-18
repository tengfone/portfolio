import type { NextPage } from 'next'
import React from 'react';
import AboutMe from '../components/Aboutme';
import HeroSplash from '../components/HeroSplash'
import Layout from '../components/Layout'
import { userData } from '../constants/user';
import useScroll from '../hooks/useScroll';

const title = `${userData.name}`;
const subtitle = "Home"

const Home: NextPage = () => {

  const scrollToSection = useScroll();

  return (
    <Layout title="Home" description={`${title} - ${subtitle}`}>
      <HeroSplash scrollToSection={scrollToSection} />
      <AboutMe />
    </Layout>
  )
}

export default Home
