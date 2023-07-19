import Header from "./Component/Header";
import SudokuGrid from "./Component/SudokuGrid";

function App() {
  const grid = [
    [3, null, 6, 5, null, 8, 4, null, null],
    [5, 2, null, null, null, null, null, null, null],
    [null, 8, 7, null, null, null, null, 3, 1],
    [null, null, 3, null, 1, null, null, 8, null],
    [9, null, null, 8, 6, 3, null, null, 5],
    [null, 5, null, null, 9, null, 6, null, null],
    [1, 3, null, null, null, null, 2, 5, null],
    [null, null, null, null, null, null, null, 7, 4],
    [null, null, 5, 2, null, 6, 3, null, null],
  ];
  return (
    <div className="w-2/3 bg-slate-100 text-center m-10 space-x-2">
      <h1 className="font-bold underline p-5">Play Sudoku</h1>
      <Header />
      <SudokuGrid grid={grid} />
    </div>
  );
}

export default App;
