//calls the childrenfor the routes

import React, { Component } from "react";
import Favicon from 'react-favicon';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Favicon url="https://vignette.wikia.nocookie.net/khanacademy/images/f/f4/Questionmark.png/revision/latest?cb=20140129121517"></Favicon>
        {this.props.children}
      </div>
    );
  }
}