import React from 'react';
import './App.css';
import Main from './components/Main'
import Logo from './components/Logo';
import Contact from './components/Contact';
//import Navi from './components/Navigator';

import {HashRouter, Route} from 'react-router-dom';

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <HashRouter>
          <React.Fragment>
            <Route path="/" component={Main}/>
            <Route path="/logo" component={Logo}/>
            <Route path="/Contact" component={Contact}/>     
          </React.Fragment>
        </HashRouter>

      </div>
    );
  }
}

export default App;
