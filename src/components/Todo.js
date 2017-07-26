import React from 'react';
import {render} from 'react-dom';

export class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.setState({
      todos: [
        {
          id: 1,
          title: "牛乳買う",
          done: false
        },
        {
          id: 2,
          title: "醤油買う",
          done: false
        },
        {
          id: 3,
          title: "スプラトゥーン2買う",
          done: false
        },
      ]
    });
  }

  render () {
    const items = this.state.todos.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    });

    return <ul>{items}</ul>;
  }
}
