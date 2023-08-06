export default function SudokuGrid({ grid }) {
  const handleInputChange = (event, rowIndex, colIndex) => {
    const inputValue = parseInt(event.target.value);
    grid[rowIndex][colIndex] =
      isNaN(inputValue) || inputValue < 1 || inputValue > 9 ? null : inputValue;
  };
  //console.log("r0,c0", grid[0]);

  return (
    <div className=" flex flex-col items-center py-5">
      {grid.map((row, rowIndex) => {
        return (
          <div className="flex " key={rowIndex}>
            {row.map((cell, colIndex) => {
              const cellClassName = cell === null ? "bg-gray-300" : "";

              const topBorder = rowIndex % 3 === 0 ? "border-t" : "";
              const leftBorder = colIndex % 3 === 0 ? "border-l" : "";
              const rightBorder = colIndex === 8 ? "border-r" : "";
              const bottomBorder = rowIndex === 8 ? "border-b" : "";

              return (
                <div
                  className={`w-10 h-10 flex items-center justify-center  border-slate-900 p-1 ${topBorder} ${leftBorder} ${rightBorder} ${bottomBorder}`}
                  key={colIndex}>
                  {cell === null ? (
                    <input
                      type="number"
                      min="1"
                      max="9"
                      onChange={(event) =>
                        handleInputChange(event, rowIndex, colIndex)
                      }
                      className={`w-full h-full text-center ${cellClassName}`}
                    />
                  ) : (
                    <div className="w-full h-full text-center">{cell}</div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
