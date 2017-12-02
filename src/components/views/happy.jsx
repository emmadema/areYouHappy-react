import React, { Component } from "react";
import StackGrid from "react-stack-grid";

export default class Happy extends Component {
  render() {
    return (
      <StackGrid id="happy" columnWidth={160} gutterWidth={80} gutterHeight={20}>
      			<div key="key1"><img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px"/></div>
			    <div key="key2"><img src="https://i.imgur.com/YOtytAUb.jpg" height="200px" width="220px" /></div>
			    <div key="key3"><img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px"/></div>
			    <div key="key4"><img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" /></div>
			    <div key="key5"><img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" /></div>
			    <div key="key6"><img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" /></div>	       
		    </StackGrid>
    );
  }
}