import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './Components/Styles.css';
import Home from './Components/Home';
import Play from './Components/Play';
import About from './Components/About';
import Upload from './Components/Upload';
import HowToPlay from './Components/HowToPlay';
import Popup from './Components/Popup';
import Tutorial from './Components/Tutorial/Tutorial';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/play" exact component={Play} />
      <Route path="/about" exact component={About} />
      <Route path="/upload" exact component={Upload} />
      <Route path="/howtoplay" exact component={HowToPlay} />
      <Route path="/popup" exact component={Popup} />
      <Route path="/tutorial" exact component={Tutorial} />
    </Router>
    
  );
}

export default App;
