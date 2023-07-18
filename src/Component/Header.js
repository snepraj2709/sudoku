import { HiLightBulb } from "react-icons/hi";

export default function Header() {
  return (
    <div>
      <h1>Play Sudoku</h1>
      <HiLightBulb />
      <h2>Quick Start</h2>
      <>
        First select a digit on the side of the grid. Then click on the cells
        where you want to place the selected digit. You may enter more than one
        digit in a cell as a note by activating the pencil mark option near the
        upper left corner of the grid.
      </>
    </div>
  );
}
