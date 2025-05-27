const React = require('react');
import { createRoot } from 'react-dom/client';

import Lotto from './LottoClass'; 

createRoot(document.querySelector('#root')).render(<Lotto />);