import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import './components/Responsive.css'
import Home from './components/Home'
import  Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
  
    <Router>
    <Navbar/>
      <Switch>
      <Route path='/' exact component={Home} />
      
      
      </Switch>
      <ScrollUpButton/>
  </Router>
    
    
  )
  
}

export default App;
