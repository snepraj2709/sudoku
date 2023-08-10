import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

import { solveSudoku } from "../Utils/SolveSudoku";

export default function SudokuGrid({ grid, onCellChange }) {
  const { state, dispatch } = useData();
  const [currentGrid, setCurrentGrid] = useState(grid);
  const { currentNumber } = state;
  const initialGrid = grid;
  let topBorder, leftBorder, rightBorder, bottomBorder, cellClass;

  function gridClasses() {
    initialGrid.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        topBorder = rowIndex % 3 === 0 ? "border-t" : "";
        leftBorder = columnIndex % 3 === 0 ? "border-l" : "";
        rightBorder = columnIndex === 8 ? "border-r" : "";
        bottomBorder = rowIndex === 8 ? "border-b" : "";
        cellClass =
          cell === 0
            ? "bg-slate-300 w-10 h-10 flex items-center justify-center border-slate-900 p-1 text-center"
            : "w-10 h-10 flex items-center justify-center border-slate-900 p-1 text-center";
      });
      return;
    });
  }
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
  };
  gridClasses();

  useEffect(() => {
    setCurrentGrid(grid);
  }, [grid]);

  return (
    <div className="flex flex-col items-center py-5">
      {currentGrid.map((row, rowIndex) => (
        <div className="flex" key={rowIndex}>
          {row.map((cell, colIndex) => {
            return (
              <div
                key={colIndex}
                type="number"
                onClick={() => handleInputChange(rowIndex, colIndex)}
                className={`${cellClass} ${topBorder} ${leftBorder} ${rightBorder} ${bottomBorder} `}>
                {cell === 0 ? "" : cell}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
