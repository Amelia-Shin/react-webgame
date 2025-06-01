import React, { useState, useReducer, useCallback } from 'react';
import Table from './Table';

const initialState = {
    winner: '',
    turn: 'O',
    tableData: Array(9).fill(''),
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_WINNER':
            return {
                // spread 문법 (...) : 객체를 새롭게 복사하여 새로운 객체를 생성
                ...state, // 기존 state를 복사
                winner: action.winner, // 승자 설정 (state 얕은 복사)
            };
    }
};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onClickTable = useCallback(() => {
        dispatch({ type: 'SET_WINNER', winner: '0' });
    }, []);

    return (
        <>
            <Table onClick={onClickTable} />
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
};

export default TicTacToe;