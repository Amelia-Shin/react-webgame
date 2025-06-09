import React, { useEffect, useReducer, useCallback } from 'react';
// 비동기 처리를 할 때는 useEffect를 사용
import Table from './Table';

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['', '', ''], 
        ['', '', ''], 
        ['', '', '']
    ],
    recentCell: [-1, -1], 
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

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
                recentCell: [action.row, action.cell], // 최근 클릭한 셀 위치 저장
            };
        case CHANGE_TURN:
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O', // 턴을 O와 X로 번갈아가며 변경
            };
        case RESET_GAME:
            return {
                ...state,
                tableData: [
                    ['', '', ''], 
                    ['', '', ''], 
                    ['', '', '']
                ], // 테이블 데이터 초기화
                winner: '', // 승자 초기화
                turn: 'O', // 턴 초기화
                recentCell: [-1, -1], // 최근 클릭한 셀 위치 초기화
            };
        default:   
            return state; // 기본적으로 현재 상태 반환
    }
};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, recentCell } = state;
    
    const onClickTable = useCallback(() => {
        dispatch({ type: SET_WINNER, winner: 'O' }); // dispatch를 통해 action을 보냄
    }, []);

    useEffect(() => {
        const [row, cell] = recentCell;
        if (row < 0) {
            return;
        }
        let win = false;
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) { // 가로줄 체크
            win = true;
        }
        if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) { // 세로줄 체크
            win = true;
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) { // 대각선 체크
            win = true;
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) { // 반대 대각선 체크
            win = true;
        }
        if (win) { // 승리시
            dispatch({ type: SET_WINNER, winner: turn });
            dispatch({ type: RESET_GAME });
        } else {
            let all = true; // all이 true면 무승부라는 뜻
            tableData.forEach((row) => { // 무승부 검사
              row.forEach((cell) => {
                if (!cell) {
                  all = false;
                }
              });
            });
            if (all) {
              dispatch({ type: SET_WINNER, winner: null });
              dispatch({ type: RESET_GAME });
            } else {
              dispatch({ type: CHANGE_TURN });
            }
        }
    }, [recentCell]);

    return (
        <>
            <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
};

export default TicTacToe;