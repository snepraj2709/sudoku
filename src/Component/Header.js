import Timer from "./Timer";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between mx-auto">
        <h1 className="font-bold text-xl p-5 ">Play Sudoku</h1>
        <Timer />
      </div>

      <hr className="border-slate-900" />
    </div>
  );
}
