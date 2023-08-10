import Header from "./Component/Header";
import SudokuGrid from "./Component/SudokuGrid";
import ToasterWrapper from "./Component/ToastWrapper";
import GameControls from "./Component/GameControls";
import SelectNumber from "./Component/SelectNumber";
import { useData } from "./context/DataContext";
import SuccessModal from "./Component/SuccessModal";

function App() {
  const { state } = useData();

  return (
    <div className="w-2/3 bg-slate-100 text-center m-10 space-x-2 mx-auto">
      <ToasterWrapper />
      <div>
        <Header />
        <SudokuGrid grid={state.currentGrid} />
        <SelectNumber />
        <GameControls />
        {state.solved && <SuccessModal />}
      </div>
    </div>
  );
}

export default App;
