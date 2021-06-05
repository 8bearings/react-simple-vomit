//import react to use components
import React, { Component } from 'react';
import './Header.css';
//class based component named header
class Header extends Component {
  render() {
    // creates a variable to store and use the props of width and background Color
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
    //structuring how to use the header an props components
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}
//export to allow use in other components such as app
export default Header;


//document.querySelector("header").style.backgroundColor = "red"
