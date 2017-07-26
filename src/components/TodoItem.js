import React from 'react';
import {render} from 'react-dom';

export class TodoItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      updatingText: this.props.title,
      isEditing: false
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

    this.props.updateTodo(this.props.id, this.state.updatingText);

    this.setState({
      isEditing: false
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

    return (<li key={this.props.id}>
      {todoContents}
      <a href="#" onClick={(e) => this.onClickDeleteLink(e)}>削除</a>
    </li>);
  }
}
