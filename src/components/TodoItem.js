import React from 'react';
import {render} from 'react-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      updatingText: this.props.title,
      isEditing: false,
    };
  }

  onClickDeleteLink(e) {
    e.preventDefault();

    this.props.deleteTodo(this.props.id);
  }

  onDoubleClickText(e) {
    this.setState({
      isEditing: true,
    });
  }

  onChangeEditingInputText(e) {
    this.setState({
      updatingText: e.target.value,
    });
  }

  onKeyDownEditingInputText(e) {
    if (e.keyCode !== 13) {
      return;
    }

    this.props.updateTodo(this.props.id, {
      title: this.state.updatingText,
    });

    this.setState({
      isEditing: false
    });
  }

  onChangeCheckbox(e) {
    this.props.updateTodo(this.props.id, {
      done: !this.props.markAsDone,
    });
  }

  render() {
    const todoContents = (() => {
      if (this.state.isEditing) {
        return (<input type="text"
          value={this.state.updatingText}
          onChange={(e) => this.onChangeEditingInputText(e)}
          onKeyDown={(e) => this.onKeyDownEditingInputText(e)}
        />);
      }

      return (<span onDoubleClick={(e) => this.onDoubleClickText(e)}>
        {this.props.title}
      </span>);
    })();

    const className = cn({
      checked: this.props.markAsDone
    });

    return (<li className={className}>
      <input type="checkbox"
             onChange={(e) => this.onChangeCheckbox(e)}
             checked={this.props.markAsDone} />
      {todoContents}
      <a href="#" onClick={(e) => this.onClickDeleteLink(e)}>削除</a>
    </li>);
  }
}

TodoItem.propTypes = {
  id:         PropTypes.number.isRequired,
  title:      PropTypes.string.isRequired,
  markAsDone: PropTypes.bool.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
