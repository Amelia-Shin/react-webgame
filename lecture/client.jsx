const React = require('react');
const ReactDom = require('react-dom');

const WordReplay = require('./WordRelay'); // WordRelay.jsx 를 불러오기 때문에 webpack.config.js에서 entry에 추가하지 않음.

ReactDom.render(<WordReplay />, document.querySelector('#root'));   