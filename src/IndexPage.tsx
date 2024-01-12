import AmountSelector from "./components/amountSelector";
import Circle from "./components/circle";
import { useCakeContext } from "./contexts/cakeContext";
import "./index.css";

export default function IndexPage() {
  const { slices } = useCakeContext();

  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center bg-slate-700">
        <AmountSelector />
        <Circle slices={slices} />
      </div>
    </>
  );
}
