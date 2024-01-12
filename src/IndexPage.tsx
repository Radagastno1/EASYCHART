import Circle from "./components/circle";
import "./index.css";
import { CakeSlice } from "./types/cakeSlice";

export default function IndexPage() {
  const slices: CakeSlice[] = [
    { id: 1, percentage: 25, color: "lightgreen" },
    { id: 2, percentage: 25, color: "lightblue" },
    { id: 3, percentage: 25, color: "pink" },
    { id: 4, percentage: 25, color: "purple" },
  ];

  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center bg-slate-700">
        <Circle slices={slices} />
      </div>
    </>
  );
}
