import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TweetsConponent, TweetDetailComponent} from './tweets'

const appEl = document.getElementById('root')
if (appEl) {
  ReactDOM.render(<App />, appEl);
}

const e = React.createElement

const tweeetEl = document.getElementById('tweetme-2')
if (tweeetEl) {
  ReactDOM.render(e(TweetsConponent, tweeetEl.dataset), tweeetEl);
}

const tweetDetailElements = document.querySelectorAll('.tweetme-2-detail')
tweetDetailElements.forEach(container => {
  ReactDOM.render(e(TweetDetailComponent, container.dataset), container);
})