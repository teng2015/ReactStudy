import React from "react";

require("./index.css");

export default class List extends React.Component{
	static defaultProps = {
		data: []
	}

	constructor(props){
		super(props);
	}

	createTable = () => {
		var table = null,
			trList = [];

		if(this.props.data){
			if(Array.isArray(this.props.data)){

				for(var item of this.props.data){
					trList.push(
						<tr>
							<th>
								{item.label}
							</th>
							<td>
								{item.content}
							</td>
						</tr>
					);
				}
			}
		}

		return  <table>
					<tbody>
						{trList}
					</tbody>
				</table>;
	}

	render(){
		var table = this.createTable();
		return (
			<div className = "list">
				{table}
			</div>
		);
	}
}