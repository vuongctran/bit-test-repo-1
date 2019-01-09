import React, { Component } from 'react';
import Component1 from './components/component1';
import Component2 from './components/component2';

class App extends Component {
  render() {
    return (
      <div>
        <Component1 />
        <Component2 />
      </div>
    );
  }
}

export default App;
