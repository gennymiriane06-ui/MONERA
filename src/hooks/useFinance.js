import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContextValue";

export function useFinance() {
  return useContext(FinanceContext);
}
