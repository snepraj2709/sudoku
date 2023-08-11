import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { createContext, useReducer } from "react";
import { grid1, grid2, grid3, grid4 } from "../Utils/allGrids";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = {
    allGrids: [grid1, grid2, grid3, grid4],
    currentNumber: null,
    initialGrid: [...grid1],
    currentGrid: grid1,
    selectedCell: { row: null, column: null },
    errorMode: false,
    solved: false,
    currentTime: 0,
  };

  function dataReducer(state, { type, payload }) {
    switch (type) {
      case "SelectNumber":
        return { ...state, currentNumber: payload };
      case "Restart":
        toast.success("Restarted the game");
        return { ...state, currentGrid: payload };
      case "UpdateGrid":
        //console.log("UpdateGrid", payload);
        return {
          ...state,
          currentGrid: payload,
        };
      case "SelectCurrentCell":
        return {
          ...state,
          selectedCell: payload,
        };
      case "ToggleErrorMode":
        payload
          ? toast.success(`Deactivated Error Mode`)
          : toast.success(`Activated Error Mode`);

        return {
          ...state,
          errorMode: !payload,
        };
      case "SetCurrentTime":
        return {
          ...state,
          currentTime: payload,
        };
      case "GameWon":
        toast.success(`You won!`);
        return {
          ...state,
          solved: payload,
        };
      case "NewGame":
        toast.success(`New game started`);
        return {
          ...data,
          currentGrid: payload,
          initialGrid: payload,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(dataReducer, data);
  useEffect(() => {
    if (state.currentGrid === state.initialGrid) {
      dispatch({ type: "GameWon", payload: true });
    }
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
