import React, { Component } from "react";

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// -> (setState/props 바뀔 떄 -> shouldComponentUpdate(부모 컴포넌트가 리렌더링 되었을 때 자식 컴포넌트 불펼요한 리렌더링 안되도록) -> render -> ComponentDidUpdate) 
// 부모 컴포넌트가 자식 컴포넌트를 없앴을 때 -> componentWillUnmout -> 자식 컴포넌트 삭제

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] == imgCoord;
    })[0];
}

class RSP extends Component {

    state = {
        result: '',
        imgCoord: rspCoords.바위,
        score: 0,
    };

    interval;

    // 처음 렌더링이 실행되었을 때 componentDidMount 실행 (비동기 요청)
    componentDidMount() {
        this.interval = setInterval(this.changeHand, 100);
    }

    // 컴포넌트가 제거되기 직전에 componentWillUnmount가 실행 (비동기 요청 정리)
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changeHand = () => {
        const {imgCoord} = this.state;
        if (imgCoord === rspCoords.바위) {
            this.setState({
                imgCoord: rspCoords.가위,
            });
        } else if (imgCoord === rspCoords.가위) {
            this.setState({
                imgCoord: rspCoords.보,
            });
        } else if (imgCoord === rspCoords.보) {
            this.setState({
                imgCoord: rspCoords.바위,
            });
        }
    }

    // 고차함수 ! () => 추가
    onClickBtn = (choice) => () => {
        const {imgCoord} = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            this.setState({
                result: '비겼습니다.',
            });
        } else if ([-1, 2].includes(diff)) {
            this.setState((prevState) => {
                return {
                    result: '이겼습니다.',
                    score: prevState.score + 1,
                };
            });
        } else {
            this.setState((prevState) => {
                return {
                    result: '졌습니다.',
                    score: prevState.score - 1,      
                };
            });
        }
        
        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 100);
        }, 1000);
    };

    render() {
        const { result, score, imgCoord } = this.state;
        return (
          <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
              <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
              <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
              <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
          </>
        );
      }
}

export default RSP;
