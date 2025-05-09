const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {   
        text: 'Hello, Webpack!',
    };

    render() {
        return <h1>{this.state.text}</h1>;
    }
};

module.exports = WordRelay;


// component 로 쪼개서 외부에서도 쓰려면 const 선언과 module 선언 해줘야 한다.
// 이것이 모듈의 node system 이다. 