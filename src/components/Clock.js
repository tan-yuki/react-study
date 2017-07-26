import React from 'react';
import {render} from 'react-dom';

export class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render () {
    return <p>It is {this.state.date.toLocaleTimeString()}.</p>;
  }
}
