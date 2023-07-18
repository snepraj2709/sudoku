export default function SudokuGrid() {
  const grid = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
  ];

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>C1</th>
            <th>C2</th>
            <th>C3</th>
            <th>C4</th>
            <th>C5</th>
            <th>C6</th>
            <th>C7</th>
            <th>C8</th>
            <th>C9</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th> R1</th>
            <td>1</td>
          </tr>
          <tr>
            <th> R2</th>
            <td>2</td>
          </tr>
          <tr>
            <th> R3</th>
            <td>3</td>
          </tr>
          <tr>
            <th> R4</th>
            <td>4</td>
          </tr>
          <tr>
            <th> R5</th>
            <td>5</td>
          </tr>
          <tr>
            <th> R6</th>
            <td>6</td>
          </tr>
          <tr>
            <th> R7</th>
            <td>7</td>
          </tr>
          <tr>
            <th> R8</th>
            <td>8</td>
          </tr>
          <tr>
            <th> R9</th>
            <td>9</td>
          </tr>
        </tbody>
        {/* <tfoot>
          <tr>
            <td colspan="9">Total: $25</td>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
}
