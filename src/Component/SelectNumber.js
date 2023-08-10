import { toast } from "react-hot-toast";
import { useData } from "../context/DataContext";

function SelectNumber() {
  const { state, dispatch } = useData();
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { currentNumber } = state;

  function selectNumber(e) {
    dispatch({
      type: "SelectNumber",
      payload: Number(e.target.getAttribute("number")),
    });
    toast.success(`Selected ${currentNumber}`);
  }
  return (
    <div className="flex justify-center px-5">
      {numberArray.map((number, index) => (
        <div
          key={index}
          number={number}
          className="font-base bg-blue-300 rounded-md p-3 m-1"
          onClick={(e) => selectNumber(e)}>
          {number}
        </div>
      ))}
    </div>
  );
}

export default SelectNumber;
