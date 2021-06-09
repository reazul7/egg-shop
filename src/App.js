import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
    </>
  );
}

export default App;
