import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class Home extends Component {

  componentDidMount() {
    browserHistory.push('/');
  }

  render() {

    return (
      <div id="home" className="container background">
        <h1 id="heading">ARE YOU HAPPY?</h1>
        <button className="button" type="button" onClick={() => browserHistory.push(`happy`)}>YES</button>
        <button className="button" type="button" onClick={() => browserHistory.push(`contact`)}>NO</button>
      </div>
    );
  }
}