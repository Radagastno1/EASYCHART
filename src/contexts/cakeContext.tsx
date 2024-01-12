import { ReactNode, createContext, useContext, useState } from "react";
import { CakeSlice } from "../types/cakeSlice";

interface CakeContextType {
  slices: CakeSlice[];
  setSlices: React.Dispatch<React.SetStateAction<CakeSlice[]>>;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

const defaultSlices: CakeSlice[] = [
  { id: 1, percentage: 25, color: "lightgreen" },
  { id: 2, percentage: 25, color: "lightblue" },
  { id: 3, percentage: 25, color: "pink" },
  { id: 4, percentage: 25, color: "purple" },
];

const CakeContext = createContext<CakeContextType>({
  slices: [],
  setSlices: () => {},
  setAmount: () => {},
  amount: 0,
});

export function useCakeContext() {
  const context = useContext(CakeContext);
  if (!context) {
    throw new Error("cakecontext must be used within a cakeprovider");
  }
  return context;
}

interface CakeProviderProps {
  children: ReactNode;
}

export function CakeProvider({ children }: CakeProviderProps) {
  const [slices, setSlices] = useState<CakeSlice[]>(defaultSlices);
  const [amount, setAmount] = useState<number>(slices.length);

  return (
    <CakeContext.Provider
      value={{
        slices,
        setSlices,
        amount,
        setAmount,
      }}
    >
      {children}
    </CakeContext.Provider>
  );
}
