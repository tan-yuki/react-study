import React from 'react';
import {render} from 'react-dom';

export class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
  }

  render () {
    return <p>It is {this.state.date.toLocaleTimeString()}.</p>;
  }
}
