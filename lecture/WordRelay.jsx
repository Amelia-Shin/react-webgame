const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {  
        word: '희원',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState((prevState) => {
                return {
                    word: prevState.value,
                    result: '딩동댕',
                    value: '',
                };
            });
        } else {
            this.setState({
                result: '땡',
                value: '',
            });
        }
        this.input.focus();
    }

    onChangeInput = (e) => {
        this.setState({
            value: e.currentTarget.value,
        });
    }   

    input;
    onRefInput = (c) => {
        this.input = c;
    }   
    render() {
        return (
            <>
                <h1>{this.state.word}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        ); 
    }
};

module.exports = WordRelay;


// component 로 쪼개서 외부에서도 쓰려면 const 선언과 module 선언 해줘야 한다.
// 이것이 모듈의 node system 이다. 