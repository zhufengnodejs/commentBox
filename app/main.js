var React = require('react');

import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox.js';


ReactDOM.render(<CommentBox url="comments.json"/>, document.querySelector('#app'));
