import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { useFinance } from "../context/FinanceContext";
import { useDebounce } from "../hooks/useDebounce";
import TransactionForm from "../components/transactions/TransactionForm";
import TransactionList from "../components/transactions/TransactionList";
import TransactionFilters from "../components/transactions/TransactionFilters";
import DeleteTransactionModal from "../components/transactions/DeleteTransactionModal";
export default function TransactionsPage() {
  const {
    transactions,
    categories,
    deleteTransaction,
  } = useFinance();

  const [showForm, setShowForm] = useState(false);
  const [transactionToEdit, setTransactionToEdit] =
    useState(null);
  const [transactionToDelete, setTransactionToDelete] =
    useState(null);

  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("");
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");

  const debouncedSearch = useDebounce(search);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const note = transaction.note || "";

      const matchesSearch = note
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesMonth =
        !month || transaction.date.startsWith(month);

      const matchesType =
        type === "all" || transaction.type === type;

      const matchesCategory =
        category === "all" ||
        transaction.categoryId === category;

      return (
        matchesSearch &&
        matchesMonth &&
        matchesType &&
        matchesCategory
      );
    });
  }, [
    transactions,
    debouncedSearch,
    month,
    type,
    category,
  ]);

  function handleEdit(transaction) {
    setTransactionToEdit(transaction);
    setShowForm(false);
  }

  function handleDelete(transaction) {
    setTransactionToDelete(transaction);
  }

  function handleCloseForm() {
    setShowForm(false);
    setTransactionToEdit(null);
  }

  function handleConfirmDelete() {
    if (!transactionToDelete) {
      return;
    }

    deleteTransaction(transactionToDelete.id);
    setTransactionToDelete(null);
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Transactions
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your income and expenses.
          </p>
        </div>

        {!showForm && !transactionToEdit && (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            <Plus size={18} />
            Add transaction
          </button>
        )}
      </div>

      {/* Transaction form */}
      {(showForm || transactionToEdit) && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {transactionToEdit
                  ? "Edit transaction"
                  : "Add transaction"}
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {transactionToEdit
                  ? "Update your transaction details."
                  : "Record your income or expense."}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCloseForm}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              Cancel
            </button>
          </div>

          <TransactionForm
            transactionToEdit={transactionToEdit}
            onClose={handleCloseForm}
          />
        </div>
      )}

      {/* Filters */}
      <TransactionFilters
        search={search}
        setSearch={setSearch}
        month={month}
        setMonth={setMonth}
        type={type}
        setType={setType}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      {/* Transaction list */}
      <TransactionList
        transactions={filteredTransactions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Delete confirmation */}
      <DeleteTransactionModal
        transaction={transactionToDelete}
        onCancel={() => setTransactionToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}