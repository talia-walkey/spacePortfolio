import React, { Component } from 'react';
import './App.css';
import WebFont from 'webfontloader';
import mySocket from ‘socket.io-client’;

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

            <div id="images">
                <img src={require('./Image/AlynnaImg.png')} id="aimg" />
                <img src={require('./Image/TaliaImg.png')} id="timg" />
            </div>

        <div id="tbioBkg">
                I am a marker, developer, and designer with a Digital Design and Development Diploma from British Columbia Institute of Technology! I have skills in everything from design to development of web and mobile applications as well as I have learned the business skills to market them. 
        </div>
                <h1 id="tname">Talia Walkey</h1>
                <img src={require('./Image/speechleft.png')} id="speechleft" />
        <br/>
        <div id="abioBkg">
                Hello! I am an aspiring UX/UI designer currently studying Digital Design and Development at BCIT. I am a creative and quality driven individual, motivated to create new user experiences. I love to bring my ideas to life, either through graphics and/or websites.
        </div>
                <h1 id="aname">Alynna Alcira</h1>

                <img src={require('./Image/speechright.png')} id="speechright" />
      </div>
    );
  }
}

export default App;
