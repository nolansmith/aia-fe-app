
import React from 'react';
import ReactDOM from 'react-dom';
import Error from '../src/components/error/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error message="An error" />, div);
});

