const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('희원');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        // console.log(e.target.children.word);
        // if (word[word.length - 1] === value[0]) {
        if (word[word.length - 1] ===  e.target.children.word.value[0]) {
            // setWord(value);
            setWord(e.target.children.word.value);
            setResult('딩동댕!');
            // setValue('');
            e.target.children.word.value = '';
        } else {
            setResult('땡!');
            // setValue('');
            e.target.children.word.value = '';
        }
        inputRef.current.focus();
    }

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value);
    }   

    return (
        <>
            <h1>{word}</h1>
            <form onSubmit={onSubmitForm}>
                <label id="label" htmlFor="wordInput">글자를 입력하세요.</label>
                {
                /* 
                Controlled Input
                    <input ref={inputRef} value={value} onChange={(e)=>setValue(e.currentTarget.value)} />
                
                Uncontrolled Input : onSubmitForm 안에서만 쓰이는 거면 Uncontrolled Input을 사용해도 됨. 
                    <input ref={inputRef} />
                */
                }
                <input id="word" ref={inputRef} />
                {/* <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} /> */}
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );     
};

module.exports = WordRelay;


// component 로 쪼개서 외부에서도 쓰려면 const 선언과 module 선언 해줘야 한다.
// 이것이 모듈의 node system 이다. 