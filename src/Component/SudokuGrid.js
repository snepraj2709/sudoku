export default function SudokuGrid() {
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

  const handleInputChange = (event, rowIndex, colIndex) => {
    const inputValue = parseInt(event.target.value);
    grid[rowIndex][colIndex] = inputValue || 0;
  };

  const gridElements = [];
  for (let i = 1; i < 10; i++) {
    const rowElements = grid[i - 1].map((rowElement, colIndex) => {
      const disableInput = rowElement > 0;
      return (
        <td key={colIndex}>
          <input
            type="number"
            value={rowElement}
            onChange={(event) => handleInputChange(event, i - 1, colIndex)}
            style={{
              width: "30px",
              backgroundColor: rowElement ? "#33333" : "white",
            }}
            disabled={disableInput}
          />
        </td>
      );
    });

    gridElements.push(
      <tr key={i}>
        <th>R{i}</th>
        {rowElements}
      </tr>
    );
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>C0</th>
            {grid.map((index) => (
              <th>C{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>{gridElements}</tbody>
      </table>
    </div>
  );
}
