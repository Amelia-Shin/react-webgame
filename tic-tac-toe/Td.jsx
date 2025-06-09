import React, { useCallback } from "react";
import { CLICK_CELL, CHANGE_TURN } from "./TicTacToe";

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
    const onClickTd = useCallback(() => {
        console.log(`Clicked cell at row ${rowIndex}, column ${cellIndex}`);
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
        dispatch({ type: CHANGE_TURN }); // 턴 변경
    }, []);
    return (
        <td onClick={onClickTd}>{cellData}</td>
    );
}

export default Td;