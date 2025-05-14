// webpack에 있는 babel이 import를 require로 바꿔주기 때문에 import로 사용
import React from 'react';
import { createRoot } from 'react-dom/client'; 

// const NumberBaseball = require('./NumberBaseballClass'); 
/* 
react hooks 사용 시 아래 const 쓰면 에러남
Error : Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
Solve : import 또는 require 중 한가지로 통일성 있게 써줘야함. (다른 모듈 시스템이기 때문에)
 */
// const NumberBaseball = require('./NumberBaseball'); 
import NumberBaseball from './NumberBaseball'; 

createRoot(document.querySelector('#root')).render(<NumberBaseball />);