import React from "react";
import { useData } from "../context/DataContext";
import { solveSudoku } from "../Utils/SolveSudoku";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import { AiOutlineUndo } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function GameControls({ onClick }) {
  const { state, dispatch } = useData();
  const [sudoku, setSudoku] = useState(state?.currentGrid);

  function solved() {
    const solvedSudoku = solveSudoku(state?.currentGrid);
    setSudoku(solvedSudoku); // Update the state with the solved Sudoku
    console.log("Solved grid", solvedSudoku);
  }
  const changeErrorMode = () => {
    dispatch({ type: "ToggleErrorMode", payload: state.errorMode });
  };
  return (
    <div className="flex flex-col space-y-4 justify-center mt-5">
      <div className="flex space-x-12 justify-center">
        <button>
          <AiOutlineUndo className="h-8 w-8" />
          Undo
        </button>
        <button>
          <RxCross2 className="h-8 w-8" />
          Erase
        </button>

        <ToggleButton
          toggled={state.errorMode}
          onClick={changeErrorMode}
          text="Error Mode"
        />
      </div>
      <div className="flex space-x-4 justify-center">
        <button
          className="p-2 bg-red-300 rounded-lg cursor-pointer"
          onClick={() =>
            dispatch({ type: "Restart", payload: state.initialGrid })
          }>
          Restart
        </button>
        <button
          className="p-2 bg-green-300 rounded-lg cursor-pointer"
          onClick={() =>
            dispatch({
              type: "Restart",
              payload:
                state.allGrids[Math.random() * state.allGrids.length - 1],
            })
          }>
          New Game
        </button>
        <button onClick={solved} className="p-2 bg-green-300 rounded-lg">
          Solution
        </button>
      </div>
    </div>
  );
}

export default GameControls;
