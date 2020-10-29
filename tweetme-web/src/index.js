import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TweetsConponent} from './tweets'

const appEl = document.getElementById('root')
if (appEl) {
  ReactDOM.render(<App />, appEl);
}

const e = React.createElement

const tweeetEl = document.getElementById('tweetme-2')
if (tweeetEl) {
  ReactDOM.render(e(TweetsConponent, tweeetEl.dataset), tweeetEl);
}