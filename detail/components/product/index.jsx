import React from "react";
import $ from "jquery";

require("./index.css");

export default class Product extends React.Component	{
	state = {
		isSelectAll: false,
		selectList: []
	}

	constructor(props) {
	    super(props);
	}

	selectAll = (e) => {
		var isSelectAll = !this.state.isSelectAll;
		if(isSelectAll){
			if(this.state.selectList.length<this.props.data.data.length){
				for(var i = 0, len = this.props.data.data.length; i < len; i++){
					this.state.selectList.push(i);
					$(this.refs["checkbox"+i]).prop("checked", true);
				}
			}
		}else{
			for(var i = 0, len = this.props.data.data.length; i < len; i++){
				var selectList = this.state.selectList.splice(i,1);
				this.setState({
					"selectList": selectList
				});
				$(this.refs["checkbox"+i]).prop("checked", false);
			}
		}

		this.setState({
			isSelectAll: !this.state.isSelectAll
		});


	}

	select = (e) => {
		var $selectBtn = $(e.target),
			isSelected = $selectBtn.prop("checked"),
			index = $selectBtn.attr("data-index");

		var isContained = false, j;
		for(var i = 0, len = this.state.selectList.length; i<len; i++){
			if(this.state.selectList[i] == index){
				isContained = true;
				j = i;
			}
		}

		if(isSelected && !isContained){
			this.state.selectList.push(index);

			if(this.state.selectList.length == this.props.data.data.length){
				this.setState({
					isSelectAll: true
				});
			}

			return false;
		}

		if(!isSelected&&isContained){
			this.state.selectList.splice(j, 1);

			this.setState({
				isSelectAll: false
			});
		}
	}

	createTable = () => {
		var head = [],
			body = [],
			table = null;

		var that = this;

			var titleList = this.props.data.title,
				dataList = this.props.data.data;

			if(titleList){
				for(var title of titleList){
					head.push(
						<th>
							{title}
						</th>
					);
				}
			}
			
			if(dataList){
				var i = 0;
				for(var item of dataList){
					var inner = [];
					for(var key in item){
						inner.push(
							<td>
								{item[key]}
							</td>
						);
					}
					if(typeof item.checked == 'undefined'){
						item.checked = false;
					}

					body.push(
						<tr>
							<td><input type="checkbox" ref={"checkbox"+i} name="check" onChange={this.select} data-index={i}/></td>
							{inner}
						</tr>
					);

					i++;
				}
			}
			

			return <table>
					<thead>
						<tr>
							<th><input type="checkbox" name="check" checked={this.state.isSelectAll} onChange={this.selectAll} /></th>
							{head}
						</tr>
					</thead>
					<tbody>
						{body}
					</tbody>
			   </table>
		
		return table;

	}
	render() {
		var table = this.createTable();
		return (
			<div>
				<h2>订单产品信息</h2>
				{table}
			</div>
		);
	}

	componentDidMount(){
		var dataList = this.props.data.data;
	
		if(dataList){
			for(var item of dataList){
				if(typeof item.checked == "undefined"){
					item.checked = false;
				}
			}
		}

		this.setState({
			"dataList": dataList
		});
	}
}