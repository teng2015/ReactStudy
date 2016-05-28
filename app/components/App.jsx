import React from 'react';

require('./App.css');

import Table from "./Table/App.jsx";
import Tab from "./Tab/App.jsx";
import SubTab from "./SubTab/App.jsx";
import Filter from "./Filter/App.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<Tab />
      	<SubTab />
      	<Filter />
      	<Table />
      </div>
    );
  }
}
