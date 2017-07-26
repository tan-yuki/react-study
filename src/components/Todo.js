import React from 'react';
import {render} from 'react-dom';
import {TodoAddForm} from './TodoAddForm';
import {TodoItem} from './TodoItem';

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

  addTodo(title) {
    const maxId = this.state.todos.reduce((max, v) => Math.max(max, v.id), 0);
    const newTodo = {
      id: maxId + 1,
      title: title,
      done: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  deleteTodo(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({
      todos: newTodos,
    });
  }

  updateTodo(id, attrs) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }

      return Object.assign({}, todo, attrs);
    });

    this.setState({
      todos: newTodos
    });
  }

  onChangeAddingInput(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  render() {
    const items = this.state.todos.map((todo) => {
      return <TodoItem key={todo.id}
                       id={todo.id}
                       markAsDone={todo.done}
                       updateTodo={(id, title) => this.updateTodo(id, title)}
                       deleteTodo={(id) => this.deleteTodo(id)} />
    });

    return (<div>
      <TodoAddForm addTodo={(title) => this.addTodo(title)} />
      <ul>{items}</ul>
    </div>);
  }
}
