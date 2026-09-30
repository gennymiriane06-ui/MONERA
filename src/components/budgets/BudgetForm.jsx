import { useState } from "react";
import { X } from "lucide-react";
import { useFinance } from "../../hooks/useFinance";

function BudgetForm({ onClose }) {
  const { categories, addBudget } = useFinance();

  const expenseCategories = categories.filter(
    (category) => category.type === "expense"
  );

  const [categoryId, setCategoryId] = useState("");
  const [limit, setLimit] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!categoryId || !limit || Number(limit) <= 0) {
      setError("Please enter a valid category and budget.");
      return;
    }

    addBudget({
      categoryId,
      limit: Number(limit),
      month: new Date().toISOString().slice(0, 7),
    });

    onClose();
  }

  function handleCategoryChange(event) {
    setCategoryId(event.target.value);
    setError("");
  }

  function handleLimitChange(event) {
    setLimit(event.target.value);
    setError("");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-6 dark:bg-slate-900"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            Create monthly budget
          </h2>

          <button type="button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
          >
            {error}
          </div>
        )}

        <div className="space-y-4">
          <select
            value={categoryId}
            onChange={handleCategoryChange}
            className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
          >
            <option value="">Select category</option>

            {expenseCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            min="1"
            value={limit}
            onChange={handleLimitChange}
            placeholder="Monthly limit"
            className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white"
          >
            Save budget
          </button>
        </div>
      </form>
    </div>
  );
}

export default BudgetForm;