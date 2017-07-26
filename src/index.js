import React from 'react';
import {render} from 'react-dom';
import {Clock} from './components/Clock';

class App extends React.Component {
  render () {
      return <Clock></Clock>
  }
}

render(<App/>, document.getElementById('root'));
