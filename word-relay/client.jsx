const React = require('react');
import { createRoot } from 'react-dom/client'; // React 18 부터 createRoot 사용

const WordRelay = require('./WordRelay'); // WordRelay.jsx 를 불러오기 때문에 webpack.config.js에서 entry에 추가하지 않음.

createRoot(document.querySelector('#root')).render(<WordRelay />); // React 18 부터 createRoot 사용