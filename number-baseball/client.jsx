// webpack에 있는 babel이 import를 require로 바꿔주기 때문에 import로 사용
const React = require('react');
import { createRoot } from 'react-dom/client'; 

const NumberBaseball = require('./NumberBaseballClass'); 

createRoot(document.querySelector('#root')).render(<NumberBaseball />);