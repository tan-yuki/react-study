import React from 'react';
import {render} from 'react-dom';

export class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
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


    this.setState((prevState, props) => {
      const maxId = prevState.todos.reduce((max, v) => Math.max(max, v.id), 0);
      const newTodo = {
        id: maxId + 1,
        title: prevState.inputText,
        done: false,
      };

      return {
        inputText: "",
        todos: [...this.state.todos, newTodo],
      };
    });
  }

  onChangeAddingInput(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  render () {
    const items = this.state.todos.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    });

    return (<div>
      <form onSubmit={(e) => this.onSubmitAddingInput(e)}>
        <input type="text"
               onChange={(e) => this.onChangeAddingInput(e)}
               value={this.state.inputText}
        />
        <input type="submit" value="Add" />
      </form>
      <ul>{items}</ul>
    </div>);
  }
}
