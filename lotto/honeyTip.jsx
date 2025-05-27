/* Hooks 꿀팁 */
// useEffect를 사용할 때, componentDidMount와 componentDidUpdate가 같이 실행되지만, componentDidUpdate만 실행시켜주고 싶다 할때 쓰는 꼼수!

import { useEffect, useRef } from "react";

const mounted = useRef(false);
useEffect(() => {
    if (!mounted.current) {
        mounted.current = true; // 컴포넌트가 처음 마운트될 때만 실행
        console.log("컴포넌트가 처음 마운트되었습니다.");
    } else {
        console.log("컴포넌트가 업데이트되었습니다.");
        // ajax 요청이나 다른 작업을 여기에 넣으면 된다.
    }
}, [/* 바뀌는 값 */]); // 빈 배열을 넣으면 componentDidMount와 동일하게 동작 (componentDidUpdate는 실행되지 않음) 