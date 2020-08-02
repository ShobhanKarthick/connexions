import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './Components/Styles.css';
import Home from './Components/Home';
import Play from './Components/Play';
import PlayArcade from './Components/PlayArcade';
import PlayId from './Components/PlayId';
import About from './Components/About';
import Upload from './Components/Upload';
import HowToPlay from './Components/HowToPlay';
import Popup from './Components/Popup';
import Edit from './Components/Edit/Edit';
import EditId from './Components/Edit/EditId';
import UploadTamilEvent from './Components/UploadTamilEvent'
import PlayTamilEvent from './Components/PlayTamilEvent'
import Leaderboard from './Components/Leaderboard';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/play" exact component={Play} />
      <Route path="/playarcade" exact component={PlayArcade} />
      <Route path="/leaderboard" exact component={Leaderboard} />
      <Route path="/play/id/:id" exact component={PlayId} />
      <Route path="/about" exact component={About} />
      <Route path="/upload" exact component={Upload} />
      <Route path="/tamilevent" exact component={UploadTamilEvent} />
      <Route path="/playtamilevent" exact component={PlayTamilEvent} />
      <Route path="/howtoplay" exact component={HowToPlay} />
      <Route path="/popup" exact component={Popup} />
      <Route path="/edit" exact component={Edit} />
      <Route path="/edit/:id" exact component={EditId} />
    </Router>
    
  );
}

export default App;
