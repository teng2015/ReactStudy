import React from "react";
import List from "./../list/index.jsx";

require("./index.css");

export default class Order extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="order">
				<h2>订单信息</h2>
				<List  data={this.props.data}/>
			</div>
		);
	}
}