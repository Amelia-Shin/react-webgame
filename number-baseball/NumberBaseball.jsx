// ES 의 2015버전 모듈 문법
import React, { Component } from 'react';

class NumberBaseball {

}

// export const 는 변수명만 겹치지 않는다면 여러개 사용할 수 있음.
// export default 는 한 번만 쓸 수 있음.
// export const hello = 'hello';  // import { hello } 형식으로 가져올 수 있음
export default NumberBaseball;  // import NumberBaseball; 형식으로 가져올 수 있음

// node 의 모듈 시스템으로 표현을 하면 아래와 같다. (node의 모듈 문법 = common.js)
/* 
    node 에서는 아래 문법만 지원하는데, 리액트에서 import 를 써도 문제 없이 잘 돌아간 이유 ?
    babel이 import를 require로 바꿔주기 때문에
*/
// const React = require('react'); 
// exports.hello = 'hello'; (=> module.exports = { hello: 'a' }; 같은 내용)
// module.exports = NumberBaseball;
