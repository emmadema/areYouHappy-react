import React, { Component } from "react";
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-href-component'
import {Entity, Scene} from 'aframe-react';
import ReactDOM from 'react-dom';


export default class Contact extends Component {
  //set the inital color fo all the boxes to be blue
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
    		  	<a-scene>
        //sets the texture for the ground and the sky
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
          <img id="breathing" src="https://ucarecdn.com/24c8b81b-2c67-41b8-ab61-83cb9228d270/"/>
          <img id="help" src="https://ucarecdn.com/bf4319bc-5390-4a14-8e13-ef31fde03ef0/"/>
          <img id="laugh" src="https://ucarecdn.com/8f09c831-7a7d-41d8-bae4-9f8927c6d5e6/"/>
        </a-assets>

        //sets up the 3d environment
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'dust', particleCount: 2000}}/>
        <Entity text={{value: 'Take a Look Around!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
        <Entity text={{value: 'Use the circle to click on the shapes', align: 'center'}} position={{x: 1, y: 2, z: -1.5}}/>

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

        //changes the box color on click
		    <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          position={{x: -4, y: 3, z: -1}}
          events={{click: this.changeColor.bind(this)}}>
        </Entity>

        //Allows the cursor to stay fixed to the screen and makes it larger 
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