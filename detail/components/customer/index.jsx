import React from "react";
import List from "./../list/index.jsx";

require("./index.css");

export default class Customer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="customer">
				<h2>客户信息</h2>
				<List  data={this.props.data}/>
			</div>
		);
	}
}