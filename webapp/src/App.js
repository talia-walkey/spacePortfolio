import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="topPage">
            <img src={require('./Image/bkgImg2.jpg')} id="bkgImg" />
        <div id="welcome" class="nameHeading" id="welcomeDiv">Welcome to our landing page!</div>
            <button id="findOutMore">Find Out More</button>
        </div>

<div id="introBio">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie nibh est, nec semper eros interdum vitae. Curabitur ultricies consectetur lobortis. Curabitur vehicula, diam vitae finibus sodales, magna lacus convallis tortor, quis tempus velit turpis a purus. Etiam pulvinar, nibh quis blandit pulvinar, erat arcu imperdiet risus, ut porttitor urna mauris ut mi. In a vestibulum justo. Aenean eros augue, ullamcorper et tortor in, venenatis tincidunt metus. Praesent vulputate lectus turpis, nec maximus nunc venenatis at.

    Praesent sed nisl at justo sagittis sagittis eget id felis. Proin interdum mi id nisi sagittis commodo. Maecenas volutpat purus purus, sit amet tempus arcu congue tempor. Vestibulum fringilla eleifend magna ultricies iaculis. Nulla posuere a arcu nec gravida. Donec sit amet molestie nibh. Aenean arcu sem, porta ac vehicula in, maximus vel elit. Vestibulum ut sapien at lacus ornare cursus. Integer porta sed metus quis convallis. Aliquam erat volutpat. Quisque eu mauris malesuada, finibus purus id, rutrum mauris. Curabitur congue neque eu augue pharetra, aliquet mattis metus efficitur. Quisque eu consectetur libero. Aliquam erat volutpat. Phasellus at enim vel leo volutpat tincidunt consectetur sed nunc. Aenean molestie in arcu sed laoreet.
</div>

<br/>
<br/>
        
        <div id="tbioBkg">
            <div class="nameHeading">Talia Walkey</div>
            <div class="leftBox"><img src={require('./Image/tbioImg.png')} id="tbioImg"/></div>
        
            <div class="rightBox">
                I am a marker, developer, and designer with a Digital Design and Development Diploma from British Columbia Institute of Technology! Not only am I extremely diligent, organized, and focused, I am comfortable pitching myself, my company, and my product. I have skills in everything from design to development of web and mobile applications as well as I have learned the business skills to market them. I am proficient with front-end, and back-end development, along with Adobe Creative Suite. 
            </div>

        </div>
        <br/>
        <div id="abioBkg">
            <div class="nameHeading">Alynna Alcira</div>
            <div class="leftBox"><img src={require('./Image/abioImg.jpg')} id="abioImg" /></div>
            
            <div class="rightBox">
                Hello! I am an aspiring UX/UI designer currently studying Digital Design and Development at BCIT. I am a creative and quality driven individual, motivated to create new and innovating user experiences. I love to bring my ideas to life, either through graphics, videos, and/or websites. I have digital design skills within Adobe's Creative Cloud in Photoshop, Illustrator, Premiere Pro, and After Effects. My development skills include HTML, CSS, and JavaScript.
            </div>
        </div>
      </div>
    );
  }
}

export default App;
