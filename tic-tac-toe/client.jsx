const React = require('react');
import { createRoot } from 'react-dom/client'; 

import TicTacToe from './TicTacToe'; 

createRoot(document.querySelector('#root')).render(<TicTacToe />); 