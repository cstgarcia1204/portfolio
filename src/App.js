import React from 'react';
import './App.css';
import Contact from './components/Contact';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.ibb.co/YXYBr09/logock.png" className="App-logo" alt="logo" />
          <h1>
          Web Developer_
          </h1>
          <h2>
            Cinthia Karen Sánchez de Tagle García
          </h2>
        </header>
        <BrowserRouter>
        <li type='circle'>
                    <Link to="/Contact">Contact</Link>
                </li>
            <Route path="/contact" component={Contact}/>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
