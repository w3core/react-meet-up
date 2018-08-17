import React from 'react';
import ReactDOM from 'react-dom';
import { rootId, title } from '../config';

const App = ({ title }) => (<h1>{ title }</h1>);

const root = document.getElementById(rootId);

ReactDOM.render(<App title={ title } />, root);
