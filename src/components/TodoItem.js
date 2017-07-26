import React from 'react';
import {render} from 'react-dom';

export class TodoItem extends React.Component {
  render() {
    return <li key={this.props.id}>{this.props.title}</li>;
  }
}
