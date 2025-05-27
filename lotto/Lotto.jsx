import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Ball from "./Ball";

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    console.log(winNumbers + ',' + bonusNumber);
    return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  // 함수 실행한 값을 저장해두기 위해서는 useMemo 사용 
  const lottoNumbers = useMemo(() => getWinNumbers(), []); // 2번째 인자가 바뀌지 않는 한, getWinNumbers()는 2번 실행되지 않음
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }

    timeouts[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);

    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    }
  }, [timeouts.current]); // input이 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount(첫 렌더링때 실행)랑 componentDidUpdate(state가 바뀔때마다 실행) 둘 다 수행

  // useCallback 은 함수를 기억하는 역할 (함수형 컴포넌트가 변경되어도, onClickRedo 함수가 재생성되지 않음)
  // * 자식 컴포넌트에 함수를 props로 넘겨줄 때, useCallback을 사용하면 자식 컴포넌트가 불필요하게 리렌더링 되는 것을 방지할 수 있음
  const onClickRedo = useCallback(() => {
    console.log(winNumbers); // useCallback 인자 값이 빈 상태에서 debug 찍어보면, winNumbers 초기 값을 계속 찍음 (처음의 winNumbers 를 기억하고 있어서)
    // 최신의 winNumbers 값을 가지고 오고 싶다면 useCallback 인자 값에도 winNumbers 를 넣어주면 됨.
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
}

export default Lotto;