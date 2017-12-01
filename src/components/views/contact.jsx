import React, { Component } from "react";
import StackGrid from "react-stack-grid";

export default class Contact extends Component {

  	render() {
    	return (
      		<StackGrid id="contact" columnWidth={100} gutterWidth={70}>
  				<div key="key1"><img src="https://i.imgur.com/Huou7Gh.gif" /></div>
		        <div key="key2"><img src="https://i.imgur.com/Huou7Gh.gif" /></div>
		        <div key="key3"><img src="https://i.imgur.com/Huou7Gh.gif"/></div>
		        <div key="key4"><img src="https://i.imgur.com/Huou7Gh.gif" /></div>
		        <div key="key5"><img src="https://i.imgur.com/Huou7Gh.gif" /></div>
		        <div key="key6"><img src="https://i.imgur.com/Huou7Gh.gif" /></div>
		    </StackGrid>
 



    	);
  	}
}