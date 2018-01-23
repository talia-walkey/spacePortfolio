import React, { Component } from 'react';
import './App.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
            <div id="topPage">
                <img src={require('./Image/background.svg')} id="bkgImg" />
                <div id="welcome" class="nameHeading" id="welcomeDiv">Welcome to our landing page!</div>
            </div>

        <div id="tbioBkg">
                Talia Walkey <br/>
                I am a marker, developer, and designer with a Digital Design and Development Diploma from British Columbia Institute of Technology! Not only am I extremely diligent, organized, and focused, I am comfortable pitching myself, my company, and my product. I have skills in everything from design to development of web and mobile applications as well as I have learned the business skills to market them. I am proficient with front-end, and back-end development, along with Adobe Creative Suite. 
        </div>
        <br/>
        <div id="abioBkg">
                Alynna Alcira <br/>
                Hello! I am an aspiring UX/UI designer currently studying Digital Design and Development at BCIT. I am a creative and quality driven individual, motivated to create new and innovating user experiences. I love to bring my ideas to life, either through graphics, videos, and/or websites.
        </div>
      </div>
    );
  }
}

export default App;
