import React from 'react';
import { render } from 'react-dom';
import { rootId, title } from '../config';

import loop, { A, B } from './es6';

console.log(loop, A, B);

const App = ({ title }) => (<h1>{ title }</h1>);

render(<App title={title} />, document.getElementById(rootId));
