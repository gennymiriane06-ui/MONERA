import { Pencil, Trash2 } from "lucide-react";
import { useFinance } from "../../context/FinanceContext";

export default function TransactionList({
  transactions,
  onEdit,
  onDelete,
}) {
  const { categories } = useFinance();

  function getCategory(categoryId) {
    return categories.find((category) => category.id === categoryId);
  }

  if (transactions.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          No transactions found
        </h3>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Try changing your filters or add a new transaction.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="divide-y dark:divide-slate-800">
        {transactions.map((transaction) => {
          const category = getCategory(transaction.categoryId);
          const isIncome = transaction.type === "income";

          return (
            <div
              key={transaction.id}
              className="flex flex-col gap-4 p-4 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between dark:hover:bg-slate-800/50"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg"
                  style={{
                    backgroundColor: category
                      ? `${category.color}20`
                      : "#e2e8f0",
                    color: category?.color || "#64748b",
                  }}
                >
                  {isIncome ? "↓" : "↑"}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-slate-900 dark:text-white">
                    {category?.name || "Uncategorized"}
                  </h3>

                  <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                    {transaction.note || "No note"}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {transaction.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <p
                  className={`font-bold ${
                    isIncome
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {isIncome ? "+" : "-"}{" "}
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "XAF",
                    maximumFractionDigits: 0,
                  }).format(transaction.amount)}
                </p>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => onEdit(transaction)}
                    title="Edit transaction"
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-slate-800"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onDelete(transaction)}
                    title="Delete transaction"
                    className="rounded-lg p-2 text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
