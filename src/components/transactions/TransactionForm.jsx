import { useState } from "react";
import { useFinance } from "../../hooks/useFinance";

export default function TransactionForm({
  onClose,
  transactionToEdit = null,
}) {
  const {
    addTransaction,
    updateTransaction,
    categories,
  } = useFinance();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    type: transactionToEdit?.type || "expense",
    amount: transactionToEdit?.amount || "",
    categoryId: transactionToEdit?.categoryId || "",
    date:
      transactionToEdit?.date ||
      new Date().toISOString().split("T")[0],
    note: transactionToEdit?.note || "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setError("");

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.amount || Number(formData.amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    if (!formData.categoryId) {
      setError("Please select a category.");
      return;
    }

    const transactionData = {
      ...formData,
      amount: Number(formData.amount),
    };

    if (transactionToEdit) {
      updateTransaction(
        transactionToEdit.id,
        transactionData
      );
    } else {
      addTransaction(transactionData);
    }

    onClose();
  }

  const availableCategories = categories.filter(
    (category) => category.type === formData.type
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
        >
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Type
        </label>

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Amount
        </label>

        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          min="0"
          step="1"
          className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Category
        </label>

        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
        >
          <option value="">Select category</option>

          {availableCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Date
        </label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Note
        </label>

        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="What was this transaction for?"
          rows="3"
          className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        {transactionToEdit
          ? "Update transaction"
          : "Save transaction"}
      </button>
    </form>
  );
}