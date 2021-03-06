import React, {useState, useEffect} from 'react';
import './App.css';
import {
  Switch,
  Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/pages/index';
import Menu from './components/pages/menu';
import About from './components/pages/about';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('dropdown resized')
      }
    }

    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <>
      <NavBar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/menu" exact component={Menu}/>
        <Route path="/about" exact component={About}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
