import React, { useState, useRef } from 'react';

const ResponseCheck = () => {
    // setState 처럼 state가 바뀌면 return 부분이 렌더링됨.
    // useRef는 값이 바뀌어도 return 부분이 다시 실행되지 않음.
    const [ state, setState ] = useState('waiting');
    const [ message, setMessage ] = useState('클릭해서 시작하세요.');
    const [ result, setResult ] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef(0);
    const endTime = useRef(0);
    // 이전 개발에 대해서, DOM에 직접 접근할 때만 ref를 사용했음.

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
        
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); //2s ~ 3s
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색이 된 후에  클릭하세요.');
        } else if (state === 'now') { // 반응속도 체크
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
        }
    };

    const renderAverage = () => {
        return result.length === 0 
            ? null
            :<>
                <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
                <button onClick={onReset}>리셋</button>
            </> 
        };

    
    const onReset = () => {
        setResult([]);
    };

    return (
        <>
        <div
            id="screen"
            className={state}
            onClick={onClickScreen}
        >
            {message}
        </div>
        {renderAverage()}
        </>
    );
}

export default ResponseCheck;