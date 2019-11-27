import React from 'react';
//import Navi from './Navigator'
//import Logo from './Contact'
import {Redirect} from 'react-router-dom'



class Main extends React.Component {

  constructor(args){
    super(args)//rquerido por la subclase component
    this.state={
          isContactClicked: false
    }
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSubmit(){
    this.setState((prevState)=>{
      return {isContactClicked : true/*!prevState.isContactClicked*/}
      
    })
  }

  
  render() {
    return (
      <div className="mainLogo">
        {this.state.isContactClicked ? (
          <div>
          <Redirect to='/projects' />
          </div>
            
          ) : (
          <div>
            <Redirect to='/logo' />
            <marquee className="nameContact" onClick={this.handleSubmit}> Welcome!! Click here to see my Projects</marquee>
          </div>
            )}
      </div>
    );
  }
}

export default Main;