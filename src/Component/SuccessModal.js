import { useData } from "../context/DataContext";

function SuccessModal() {
  const { state, dispatch } = useData();
  const time = state.currentTime;
  const minutes = Math.floor(time / 60000);
  const seconds = Number(((time % 60000) / 1000).toFixed(0));
  const formattedTime =
    minutes === 0 ? `${seconds} sec` : `${minutes} 'minute' ${seconds} second`;

  const closeModal = () => {
    const nextGrid =
      state.allGrids[Math.floor(Math.random() * state.allGrids.length)];
    dispatch({ type: "NewGame", payload: nextGrid });
  };

  return (
    <div className="fixed  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-200 w-64 p-4 rounded-lg text-black">
        <h2 className="text-center text-xl font-bold mb-2">
          Congratulations! You solved it in {formattedTime} .
        </h2>
        <button
          className="mt-7 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none "
          onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
