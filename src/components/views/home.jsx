import React, { Component } from "react";
import { browserHistory } from 'react-router';


export default class Home extends Component {

  componentDidMount() {
    browserHistory.push('/');
  }

  render() {

    return (
      <div id="home">
          <button type="button" onClick={() => browserHistory.push(`contact`)}>Sad</button>
          <button type="button" onClick={() => browserHistory.push(`happy`)}>Happy</button>
        This is the home page.
      </div>
    );
  }
}