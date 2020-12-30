import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import Calc from './components/Calc';

export default () => {
  const mountNode = document.getElementById('root');
  ReactDOM.render(<Calc />, mountNode);
};
