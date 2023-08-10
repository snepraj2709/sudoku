import { useContext } from "react";
import { createContext, useReducer } from "react";
import { grid1, grid2 } from "../Utils/allGrids";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = {
    allGrids: [grid1, grid2],
    currentNumber: null,
    currentGrid: grid1,
    selectedCell: { row: null, column: null },
  };

  function dataReducer(state, { type, payload }) {
    switch (type) {
      case "SelectNumber":
        return { ...state, currentNumber: payload };
      case "Restart":
        return { ...state, currentGrid: payload };
      case "UpdateGrid":
        return {
          ...state,
          currentGrid: payload,
        };
      case "SelectCurrentCell":
        return {
          ...state,
          selectedCell: payload,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(dataReducer, data);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
