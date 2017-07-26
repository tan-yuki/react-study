import React from 'react';
import {render} from 'react-dom';

export class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    this.clearInterval(this.timeId);
  }

  render () {
    return <p>It is {this.state.date.toLocaleTimeString()}.</p>;
  }
}
