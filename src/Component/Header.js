import { HiLightBulb } from "react-icons/hi";
import { instructions } from "../data/instructions";

export default function Header() {
  const { quickNote } = instructions;
  return (
    <div className="p-5 border-2 border-slate-500 bg-yellow-100 w-1/2 mx-auto">
      <div className="flex flex-row justify-center m-2">
        <HiLightBulb className="w-5 h-5" />
        <p className="underline decoration-solid">Quick Start</p>
      </div>
      <hr />
      <>{quickNote}</>
    </div>
  );
}
