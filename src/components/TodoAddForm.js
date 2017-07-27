import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

export class TodoAddForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
    };
  }

  addTodo(newTitle) {
    setTimeout(() => {
      this.props.addTodo(newTitle);
      this.setState({
        inputText: "",
      });
    }, 300);
  }

  onSubmitAddingInput(e) {
    e.preventDefault();

    this.addTodo(this.state.inputText);
  }

  onChangeAddingInput(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  render() {
    return (<form onSubmit={(e) => this.onSubmitAddingInput(e)}>
      <input type="text"
             onChange={(e) => this.onChangeAddingInput(e)}
             value={this.state.inputText}
      />
      <input type="submit" value="Add" />
    </form>);
  }
}

TodoAddForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
