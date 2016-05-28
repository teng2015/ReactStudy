import React from 'react';
import $ from 'jquery';

require('./App.css');

import Customer from './customer/index.jsx';
import Order from './order/index.jsx';
import Product from './product/index.jsx';

var data = require("./../testData.js");

export default class App extends React.Component {
  state = {
    customer: [],
    order: [],
    product: {}
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="info-wrapper">
          <Customer data={this.state.customer}/>
          <Order data={this.state.order}/>
        </div>
        <Product data={this.state.product}/>
      </div>
    );
  }

  componentDidMount(){
    var result = data.data;
    this.setState({
      customer: result.customer,
      order: result.order,
      product: result.product
    });
  }
}
