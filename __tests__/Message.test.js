
import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../src/components/message/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Message text="Hello Test" maxHeight="150px" image="success" />, div);
});

