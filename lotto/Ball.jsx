import React, { memo } from 'react';

// hooks 가 아님. useState, useEffect 안썼기때문.
// 컴포넌트를 다른 컴포넌트로 한 번 더 감싸는 것을 하이오더 컴포넌트 (hoc)
// 컴포넌트를 memo로 한 번 더 감싸아서, 아래는 하이오더 컴포넌트임.
const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = 'red';
  } else if (number <= 20) {
    background = 'orange';
  } else if (number <= 30) {
    background = 'yellow';
  } else if (number <= 40) {
    background = 'blue';
  } else {
    background = 'green';
  }

  return (
    <div className="ball" style={{ background }}>{number}</div>
  )
});

export default Ball;