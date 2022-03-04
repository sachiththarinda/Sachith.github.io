import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './components/Responsive.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
  
    <Router>
    
      <Switch>
      <Route path='/' exact component={Home} />
      
      
      </Switch>
      
  </Router>
    
    
  )
  
}

export default App;
