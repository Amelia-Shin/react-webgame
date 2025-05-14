const React = require('react');
const Component = React.Component;
const Try = require('./Try');

function getNumbers() { // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }

    onSubmitForm = (e) => {
        const { result , value, tries, answer } = this.state;
        e.preventDefault();
        console.log(answer);
        if (value === answer.join('')) {
            this.setState({
                result: '홈런!',
                // 이전 tries 배열을 넣어주고, 새로운 배열을 넣어줘서 react 가 해당 배열이 변경되었는지 감지하게 해줌. (push쓰면 안됨)
                tries: [...tries, { try: value, result: '홈런!' }],
                
            });
            alert('게임을 다시 시작합니다.');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { // 10번 이상 틀렸을 때
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 었습니다!`,
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else { 
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
            }
            this.setState({
                tries: [...tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` }],
                value: '',
            });
        }
    }

    onChangeInput = (e) => {
        this.setState({
            value : e.target.value,
        });
    }

    render() {
        // 구조분해 방식을 사용해서 this.state 반복 줄이기
        const { result , value, tries} = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength = {4} value={value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            // key를 필수로 넘겨줘야 함
                            <Try key={`${i + 1}차 시도 : `} tryInfo={v} />
                        )
                    })}
                </ul>
            </>
        );
    }
}

// export const 는 변수명만 겹치지 않는다면 여러개 사용할 수 있음.
// export default 는 한 번만 쓸 수 있음.
// export const hello = 'hello';  // import { hello } 형식으로 가져올 수 있음
// export default NumberBaseball;  // import NumberBaseball; 형식으로 가져올 수 있음

// node 의 모듈 시스템으로 표현을 하면 아래와 같다. (node의 모듈 문법 = common.js)
/* 
    node 에서는 아래 문법만 지원하는데, 리액트에서 import 를 써도 문제 없이 잘 돌아간 이유 ?
    babel이 import를 require로 바꿔주기 때문에
*/
// const React = require('react'); 
// exports.hello = 'hello'; (=> module.exports = { hello: 'a' }; 같은 내용)
module.exports = NumberBaseball;
