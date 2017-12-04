//This page uses a-frame to create an interactive 3d environment

import React, { Component } from "react";
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-href-component'
import {Entity, Scene} from 'aframe-react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router'

export default class Happy extends Component {

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
     goToSite() {

    	browserHistory.replace();
    }
  render() {
    return (
    	<Scene>
        //sets the texture for the ground and the sky
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        </a-assets>

        //sets up the 3d environment
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'dust', particleCount: 2000}}/>
        <Entity text={{value: 'Take a Look Around!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>

        //box brings you to funny cat videos
        <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          position={{x: 0, y: 1, z: -3}}
          href= 'https://google.com'
          events={{click: this.changeColor.bind(this)}}>
        </Entity>

        //box brings you to the suicide help line
        <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          position={{x: 5, y: 1, z: 1}}
          href= 'https://google.com'
          events={{click: this.changeColor.bind(this)}}>

        </Entity>

        //brings you tpo breathing exercises
		    <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          position={{x: 4, y: 5, z: -1}}
          events={{click: this.changeColor.bind(this)}}>

        </Entity>

        //brings you to help gorups in you area
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
      </Scene>
 
    );
  }
}