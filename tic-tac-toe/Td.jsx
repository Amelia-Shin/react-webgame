import React, { useCallback } from "react";
import { CLICK_CELL } from "./TicTacToe";

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
    const onClickTd = useCallback(() => {
        console.log(`Clicked cell at row ${rowIndex}, column ${cellIndex}`);
        if (cellData) {
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);
    return (
        <td onClick={onClickTd}>{cellData}</td>
    );
}

export default Td;