import { useState } from "react";
import Header from "./Component/Header";
import SudokuGrid from "./Component/SudokuGrid";
import ToasterWrapper from "./Component/ToastWrapper";
import GameControls from "./Component/GameControls";
import SelectNumber from "./Component/SelectNumber";
import Timer from "./Component/Timer";
import { useData } from "./context/DataContext";

function App() {
  const { state } = useData();
  const [sudoku] = useState(state.currentGrid);

  return (
    <div className="w-2/3 bg-slate-100 text-center m-10 space-x-2 mx-auto">
      <ToasterWrapper />
      <div>
        <h1 className="font-bold underline p-5 ">Play Sudoku</h1>
        <Header />
        <Timer />
        <SudokuGrid grid={sudoku} />
        <SelectNumber />
        <GameControls />
      </div>
    </div>
  );
}

export default App;
