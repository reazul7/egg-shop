import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/pages/index';
import Menu from './components/pages/menu';
import About from './components/pages/about';

function App() {
  return (
    <>
      <NavBar/>
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
