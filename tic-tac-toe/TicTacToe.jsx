import React, { useReducer, useCallback } from 'react';
import Table from './Table';

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

// dispatch 가 실행될 때 reducer 함수 호출
const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:
            return {
                // spread 문법 (...) : 객체를 새롭게 복사하여 새로운 객체를 생성
                ...state, // 기존 state를 복사
                winner: action.winner, // 승자 설정 (state 얕은 복사)
            };
        case CLICK_CELL:
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]]; // 해당 행을 복사하여 새로운 배열 생성
            tableData[action.row][action.cell] = state.turn; // 클릭한 셀에 현재 턴의 플레이어 표시
            return {
                ...state,
                tableData, // 업데이트된 테이블 데이터
            };
        case CHANGE_TURN:
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O', // 턴을 O와 X로 번갈아가며 변경
            };
    }
};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onClickTable = useCallback(() => {
        dispatch({ type: SET_WINNER, winner: 'O' }); // dispatch를 통해 action을 보냄
    }, []);

    return (
        <>
            <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
};

export default TicTacToe;