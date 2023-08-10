import React from "react";
import { useData } from "../context/DataContext";
import { solveSudoku } from "../Utils/SolveSudoku";
import { useState } from "react";

function GameControls() {
  const { state, dispatch } = useData();
  const [sudoku, setSudoku] = useState(state?.currentGrid);

  function solved() {
    const solvedSudoku = solveSudoku(state?.currentGrid);
    setSudoku(solvedSudoku); // Update the state with the solved Sudoku
    console.log("Solved grid", solvedSudoku);
  }
  return (
    <div className="flex space-x-4 justify-center mt-5">
      <button
        className="p-2 bg-red-300 rounded-lg cursor-pointer"
        onClick={() =>
          dispatch({ type: "Restart", payload: state.currentGrid })
        }>
        Restart
      </button>
      <button
        className="p-2 bg-green-300 rounded-lg cursor-pointer"
        onClick={() =>
          dispatch({
            type: "Restart",
            payload: state.allGrids[Math.random() * state.allGrids.length - 1],
          })
        }>
        New Game
      </button>
      <button onClick={solved} className="p-2 bg-green-300 rounded-lg">
        Solution
      </button>
    </div>
  );
}

export default GameControls;
