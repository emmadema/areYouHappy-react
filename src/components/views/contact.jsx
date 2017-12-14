import React, { Component } from "react";
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-href-component'
import {Entity, Scene} from 'aframe-react';
import ReactDOM from 'react-dom';


export default class Contact extends Component {
  //set the inital color for all the boxes to be blue
  constructor(props) {
    super(props);
    this.state = {color: 'blue'};
  }

  //changes the color fo the box randomly when it is clicked on
  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });

 
  }
  	render() {
    	return (
        //satrats the scene
    	<a-scene>
        //organizes all thre assets to be used in the doc
        <a-assets>
          <audio id="click-sound" src="audio/click.ogg"></audio>
          <img id="sky" src="https://ucarecdn.com/ede5311d-ff9b-4cac-91af-afb991c71639/"/>
          <img id="breathing" src="https://ucarecdn.com/24c8b81b-2c67-41b8-ab61-83cb9228d270/"/>
          <img id="help" src="https://ucarecdn.com/bf4319bc-5390-4a14-8e13-ef31fde03ef0/"/>
          <img id="laugh" src="https://ucarecdn.com/8f09c831-7a7d-41d8-bae4-9f8927c6d5e6/"/>
          <video id="play" autoPlay src="https://ucarecdn.com/9c514187-4f76-4c18-b555-f4bd563ae588/" />
        </a-assets>

        //sets up the 3d environment
 
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>        <Entity text={{value: 'Take a Look Around!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
        <Entity text={{value: 'Use the circle to click on the shapes', align: 'center'}} position={{x: 1, y: 2, z: -1.5}}/>

        //sets up the 360 city image
        <a-sky id="image-360" radius="12" src="#sky"></a-sky>

        <a-sphere
        position="4 10 -7"
        raduis="1.25" 
        color="#EF2D5E"
        >
        </a-sphere>


        //on click goes to breathing exercises
        <a-box 
        width="1"
        height="1"
        depth="1"
        position="1 0.5 -5" 
        src="#breathing"
        href="https://www.youtube.com/watch?v=u9Q8D6n-3qw">
        </a-box>

        //on click goes to help line
        <a-box 
        width="1"
        height="1"
        depth="1"
        position="5 1 1" 
        src="#help"
        href="https://suicidepreventionlifeline.org/">
        </a-box>

        //on click goes to sail cat
         <a-box 
        width="1"
        height="1"
        depth="1"
        position="4 5 -1" 
        color="#laugh"
        href="https://www.youtube.com/watch?v=Awf45u6zrP0">
        </a-box>

        /*add a video screen*/
        <a-video
        src="#play"
        width="8"
        height="5"
        position="-2 3 8"
        >
        </a-video>

        //changes the box color on click
        //used entity instaed of a-box for more specific settings
        //also adds a spinning animation
		    <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          position={{x: -4, y: 3, z: -1}}
          events={{click: this.changeColor.bind(this)}}>
          <a-animation 
            attribute="rotation"
            fill="forwards"
            dur="10000"
            to="10 360 40"
            repeat="indefinite"></a-animation>
        </Entity>

        //Allows the cursor to stay fixed to the screen and styles it
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" 
                  geometry="primitive: ring; radiusInner: 0.04; radiusOuter: 0.06"
                  animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}
                  material="color:grey; shader: flat"/>
        </Entity>
      </a-scene>
      		
    	);
  	}
}