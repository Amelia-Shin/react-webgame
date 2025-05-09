const React = require('react');
import { createRoot } from 'react-dom/client'; // React 18 부터 createRoot 사용

const Gugudan = require('./Gugudan');

createRoot(document.querySelector('#root')).render(<Gugudan />); // React 18 부터 createRoot 사용
