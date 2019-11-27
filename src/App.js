import React from 'react';
import './App.css';
import Main from './components/Main'
import Logo from './components/Logo';
import Contact from './components/Contact';
import Projects from './components/Projects'
import About from './components/About';
//import Navi from './components/Navigator';

import {HashRouter, Route} from 'react-router-dom';

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <HashRouter>
          <React.Fragment>
            <Route path="/" component={Main}/>
            <Route path="/Logo" component={Logo}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/About" component={About}/>
          </React.Fragment>
        </HashRouter>

      </div>
    );
  }
}

export default App;
