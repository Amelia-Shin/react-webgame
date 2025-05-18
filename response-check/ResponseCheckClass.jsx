import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    
  };

  renderAverage = () => {
    {/* false, undefined, null 은 태그없음 을 의미 */}
    const { result } = this.state;
    return result.length === 0 
        ? null 
        : <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>;
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div
            id="screen"
            className={state}
            onClick={this.onClickScreen}
        >
            {message}
        </div>
        {this.renderAverage()}
      </>
    )
  }
}

export default ResponseCheck;