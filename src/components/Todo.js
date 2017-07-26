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

  onSubmitAddingInput(e) {
    e.preventDefault();

    const maxId = prevState.todos.reduce((max, v) => Math.max(max, v.id), 0);

    this.setState({
      todos: [...this.state.todos, {
        id: maxId + 1,
        title: this.inputTextInAddingForm,
        done: false,
      }],
    });
  }

  onChangeAddingInput(e) {
    this.inputTextInAddingForm = e.target.value;
  }

  render () {
    const items = this.state.todos.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    });

    return (<div>
      <form onSubmit={(e) => this.onSubmitAddingInput(e)}>
        <input type="text" onChange={(e) => this.onChangeAddingInput(e)} />
        <input type="submit" value="Add" />
      </form>
      <ul>{items}</ul>
    </div>);
  }
}
