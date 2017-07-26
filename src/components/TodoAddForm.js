import React from 'react';
import {render} from 'react-dom';

export class TodoAddForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
    };
  }

  onSubmitAddingInput(e) {
    e.preventDefault();

    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: "",
    });
  }

  onChangeAddingInput(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  render () {
    return (<form onSubmit={(e) => this.onSubmitAddingInput(e)}>
      <input type="text"
             onChange={(e) => this.onChangeAddingInput(e)}
             value={this.state.inputText}
      />
      <input type="submit" value="Add" />
    </form>);
  }
}
