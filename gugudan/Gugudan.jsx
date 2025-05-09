const React = require('react');

const { useState, useRef } = React;

const Gugudan = () => {
    //state 가 바뀔때마다 아래 통째로 재실행 된다.
    //hooks 쓸때는 state를 다 쪼개서 사용 (만약, 객체로 한번에 묶어서 사용하면 setState할 때 귀찮아짐)
    //-> state를 부분 변경할때를 생각해보면 된다. 
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('정답: ' + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            // ref로 DOM에 접근하려면 current를 붙여줘야한다.
        } else {
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    }
    return (
        <>
            <div>{first} 곱하기 {second} 는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value}/>
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    )
}
       
module.exports = Gugudan;