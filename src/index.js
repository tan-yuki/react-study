import React from 'react';
import {render} from 'react-dom';
import {Clock} from './components/Clock';
import {Todo} from './components/Todo';

class App extends React.Component {
  render () {
    return (<div>
      <Clock></Clock>
      <Todo></Todo>
    </div>);
  }
}

render(<App/>, document.getElementById('root'));
