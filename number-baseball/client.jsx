// webpack에 있는 babel이 import를 require로 바꿔주기 때문에 import로 사용
import React from 'react';
import { createRoot } from 'react-dom/client'; 

const NumberBaseball = require('./NumberBaseball'); 

createRoot(document.querySelector('#root')).render(<NumberBaseball />);