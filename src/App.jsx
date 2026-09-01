import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Brand from './components/Brand/Brand';
import How from './components/How/How';
import Comfort from './components/Comfort/Comfort';
import Card from './components/Card/Card';
import Favorite from './components/Favorite/Favorite';
import Customer from './components/Customer/Customer';
import Props from "./components/Props/Props";
import Sections from "./components/Sections/Section";
const App = () => {
  return (
      <>
          <Header/>
          <Hero/>
          <Brand/>
          <How/>
          <Comfort/>
          <Card/>
          <Favorite/>
          <Customer/>
          <Props/>
          <Sections/>
      </>
  )
}

export default App
