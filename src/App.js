import Header from "./Component/Header";
import SudokuGrid from "./Component/SudokuGrid";
import { solveSudoku } from "./Utils/SolveSudoku";
import { grid1, grid2, grid3 } from "./Utils/allGrids";

function App() {
  solveSudoku(grid1);
  console.log("solutionGrid", grid1);

  return (
    <div className="w-2/3 bg-slate-100 text-center m-10 space-x-2">
      <h1 className="font-bold underline p-5">Play Sudoku</h1>
      <Header />
      <SudokuGrid grid={grid1} />
      <div>
        <button onClick={() => solveSudoku(grid1)}>Solution</button>
      </div>
    </div>
  );
}

export default App;
//get a constantly updated array of numbers which are not there in that row, col,box
