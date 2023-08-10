import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import { solveSudoku } from "../Utils/SolveSudoku";

export default function SudokuGrid({ grid, onCellChange }) {
  const { state, dispatch } = useData();
  const [currentGrid, setCurrentGrid] = useState(grid);
  const { currentNumber, selectedCell } = state;
  const initialGrid = grid;
  let topBorder,
    leftBorder,
    rightBorder,
    bottomBorder,
    cellClass,
    currentCellClass,
    highlightCellClass;

  // const solvedSudoku = solveSudoku(grid);
  // console.log("Solved", solvedSudoku);

  const handleInputChange = (rowIndex, colIndex) => {
    if (currentNumber) {
      const updatedGrid = currentGrid.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          rowIndex === rIndex && colIndex === cIndex ? currentNumber : cell
        )
      );
      setCurrentGrid(updatedGrid);
      dispatch({ type: "UpdateGrid", payload: updatedGrid });
    }
    dispatch({
      type: "SelectCurrentCell",
      payload: { row: rowIndex, col: colIndex },
    });
    dispatch({
      type: "SelectNumber",
      payload: null,
    });
  };

  useEffect(() => {
    setCurrentGrid(grid);
    const { row, col } = selectedCell;
    if (row || col) {
      const updatedGrid = currentGrid.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          row === rIndex && col === cIndex ? currentNumber : cell
        )
      );
      setCurrentGrid(updatedGrid);
      dispatch({ type: "UpdateGrid", payload: updatedGrid });
    }
  }, [grid, selectedCell]);

  return (
    <div className="flex flex-col items-center py-5">
      {currentGrid.map((row, rowIndex) => (
        <div className="flex" key={rowIndex}>
          {row.map((cell, colIndex) => {
            topBorder = rowIndex % 3 === 0 ? "border-t" : "";
            leftBorder = colIndex % 3 === 0 ? "border-l" : "";
            rightBorder = colIndex === 8 ? "border-r" : "";
            bottomBorder = rowIndex === 8 ? "border-b" : "";
            //
            cellClass =
              currentGrid[rowIndex][colIndex] !==
                initialGrid[rowIndex][colIndex] || cell === 0
                ? "bg-slate-300 w-10 h-10 flex items-center justify-center border-slate-900 p-1 text-center text-blue-400"
                : "w-10 h-10 flex items-center justify-center border-slate-900 p-1 text-center text-blue-900 font-semibold";
            currentCellClass =
              selectedCell.row === rowIndex && selectedCell?.col === colIndex
                ? "bg-orange-100"
                : "";
            highlightCellClass =
              currentNumber === currentGrid[rowIndex][colIndex]
                ? "text-orange-800 font-bold bg-orange-200"
                : "";
            return (
              <div
                key={colIndex}
                type="number"
                onClick={() =>
                  currentGrid[rowIndex][colIndex] ===
                    initialGrid[rowIndex][colIndex] && cell !== 0
                    ? null
                    : handleInputChange(rowIndex, colIndex)
                }
                className={`${cellClass} ${topBorder} ${leftBorder} ${rightBorder} ${bottomBorder} ${currentCellClass} ${highlightCellClass}`}>
                {cell === 0 ? "" : cell}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
