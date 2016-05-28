import React from 'react';

require('./App.css');

/* export default () => <h1>你这个小妖精哇~</h1>;*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>我是列表哦</h1>
    );
  }
}
