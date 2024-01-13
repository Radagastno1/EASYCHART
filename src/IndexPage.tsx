import AmountSelector from "./components/amountSelector";
import Circle from "./components/circle";
import SliceDesign from "./components/sliceDesign";
import { useCakeContext } from "./contexts/cakeContext";
import "./index.css";

export default function IndexPage() {
  const { slices } = useCakeContext();

  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center bg-slate-700">
        <div className="flex flex-col items-center">
          <AmountSelector />
          <Circle slices={slices} />
        </div>
        <div style={{ position: "absolute", right: 0, top: 100 }}>
          <SliceDesign />
        </div>
      </div>
    </>
  );
}
