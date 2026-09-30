import { useLocalStorage } from "../hooks/useLocalStorage";
import { defaultCategories } from "../data/defaultCategories";
import { FinanceContext } from "./FinanceContextValue";

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useLocalStorage(
    "finora-transactions",
    []
  );

  const [categories, setCategories] = useLocalStorage(
    "finora-categories",
    defaultCategories
  );

  const [budgets, setBudgets] = useLocalStorage(
    "finora-budgets",
    []
  );

  function addTransaction(transaction) {
    const newTransaction = {
      id: crypto.randomUUID(),
      ...transaction,
    };

    setTransactions((currentTransactions) => [
      newTransaction,
      ...currentTransactions,
    ]);
  }

  function updateTransaction(id, updatedTransaction) {
    setTransactions((currentTransactions) =>
      currentTransactions.map((transaction) =>
        transaction.id === id
          ? { ...transaction, ...updatedTransaction }
          : transaction
      )
    );
  }

  function deleteTransaction(id) {
    setTransactions((currentTransactions) =>
      currentTransactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  }

  function addCategory(category) {
    const newCategory = {
      id: crypto.randomUUID(),
      ...category,
    };

    setCategories((currentCategories) => [
      ...currentCategories,
      newCategory,
    ]);
  }

  function deleteCategory(id) {
    setCategories((currentCategories) =>
      currentCategories.filter((category) => category.id !== id)
    );
  }

  function addBudget(budget) {
    const newBudget = {
      id: crypto.randomUUID(),
      ...budget,
    };

    setBudgets((currentBudgets) => [
      ...currentBudgets,
      newBudget,
    ]);
  }

  function updateBudget(id, updatedBudget) {
    setBudgets((currentBudgets) =>
      currentBudgets.map((budget) =>
        budget.id === id
          ? { ...budget, ...updatedBudget }
          : budget
      )
    );
  }

  function deleteBudget(id) {
    setBudgets((currentBudgets) =>
      currentBudgets.filter((budget) => budget.id !== id)
    );
  }

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        categories,
        budgets,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        addCategory,
        deleteCategory,
        addBudget,
        updateBudget,
        deleteBudget,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}