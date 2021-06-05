// allowing us to use react
import React, { Component } from 'react';
//connecting the css file to style page
import './App.css';
//inherit each of these components to be able to use
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';
// makes react class into react component
class App extends Component {
//creating the layout for you to use the components
  render() {
    return (
      //parent element to wrap your components
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside> 
        <Footer></Footer>
      </div>
      //the above uses the separate components to build the UI structure using props in header component(backcolor & width)
    ); 
  }
}
//export the app to be used in index.js file
export default App;
