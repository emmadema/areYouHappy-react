import React, { Component } from "react";
import StackGrid from "react-stack-grid";

export default class Contact extends Component {

  	render() {
    	return (
      		<StackGrid id="contact" className="container" columnWidth={160} gutterWidth={80} gutterHeight={20}>
      			<div className="article" key="key1">
      				<img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
      				<div className="middle">
      					<div className="text">Testing</div>
      				</div>
      			</div>
			    <div className="article" key="key2">
			    	<img src="https://i.imgur.com/YOtytAUb.jpg" height="200px" width="220px" className="image" />
			    	<div className="middle">
      					<div className="text">Testing</div>
      				</div>
			    </div>
			    <div className="article" key="key3">
			    	<img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
			    	<div className="middle">
      					<div className="text">Testing</div>
      				</div>
			    </div>
			    <div className="article" key="key4">
			    	<img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
			    	<div className="middle">
      					<div className="text">Testing</div>
      				</div>
			    </div>
			    <div className="article" key="key5">
			    	<img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
			   		<div className="middle">
      					<div className="text">Testing</div>
      				</div>
			    </div>
			    <div className="article" key="key6">
			    	<img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
			    	<div className="middle">
      					<div className="text">Testing</div>
      				</div>
			    </div>	       
		    </StackGrid>
    	);
  	}
}