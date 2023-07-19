import { HiLightBulb } from "react-icons/hi";

export default function Header() {
  return (
    <div className="p-5 border-2 border-slate-500">
      <div className="flex flex-row justify-center m-2">
        <HiLightBulb className="w-5 h-5" />
        <p className="underline decoration-solid">Quick Start</p>
      </div>
      <hr />
      <>
        First select a digit on the side of the grid. Then click on the cells
        where you want to place the selected digit. You may enter more than one
        digit in a cell as a note by activating the pencil mark option near the
        upper left corner of the grid.
      </>
    </div>
  );
}
