export function isValid(grid, row, col, num) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);

    if (grid[row][i] === num || grid[i][col] === num || grid[m][n] === num) {
      return false;
    }
  }
  return true;
}

export function solveSudoku(grid) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(grid, row, col, num)) {
            grid[row][col] = num;
            if (solveSudoku(grid)) {
              return true;
            } else {
              grid[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  console.log("grid solved", grid);
  return true;
}
