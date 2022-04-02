import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import TypeGrid from './TypeSection/TypeSection';
import VideoSection from './VideoSection/VideoSection';
import UserCommentsSection from './UserCommentsSection/UserCommentsSection';
import FooterSection from './FooterSection/FooterSection.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header className="home-header"></Header>
        <section><TypeGrid></TypeGrid></section>
        <section><VideoSection></VideoSection></section> 
        <section><UserCommentsSection></UserCommentsSection></section>     
        <FooterSection></FooterSection>
      </React.Fragment>
    );
  }
}

export default App;
