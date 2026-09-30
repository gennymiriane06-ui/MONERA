import { AlertTriangle, Pencil, Trash2 } from "lucide-react";
import { formatCurrency } from "../../utils/currency";
import { useFinance } from "../../hooks/useFinance";

function BudgetCard({ budget, onEdit }) {
  const {
    categories,
    transactions,
    deleteBudget,
  } = useFinance();

  const category = categories.find(
    (item) => item.id === budget.categoryId
  );

  const spent = transactions
    .filter(
      (transaction) =>
        transaction.type === "expense" &&
        transaction.categoryId === budget.categoryId &&
        transaction.date.startsWith(budget.month)
    )
    .reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

  const percentage =
    budget.limit > 0
      ? (spent / budget.limit) * 100
      : 0;

  const progressWidth = Math.min(percentage, 100);

  const overBudget = spent > budget.limit;

  const remaining = budget.limit - spent;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <div
              className="h-3 w-3 rounded-full"
              style={{
                backgroundColor:
                  category?.color || "#6366f1",
              }}
            />

            <h3 className="truncate font-bold text-slate-900 dark:text-white">
              {category?.name || "Unknown category"}
            </h3>
          </div>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {budget.month}
          </p>
        </div>

        <div className="flex items-center gap-1">
          {onEdit && (
            <button
              type="button"
              onClick={() => onEdit(budget)}
              title="Edit budget"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-slate-800"
            >
              <Pencil size={18} />
            </button>
          )}

          <button
            type="button"
            onClick={() => deleteBudget(budget.id)}
            title="Delete budget"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-rose-500 dark:hover:bg-red-950"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Amount */}
      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Spent
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            {formatCurrency(spent)}
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            of {formatCurrency(budget.limit)}
          </p>
        </div>

        {overBudget && (
          <div className="flex items-center gap-2 text-rose-500">
            <AlertTriangle size={20} />

            <span className="text-sm font-semibold">
              Over budget
            </span>
          </div>
        )}
      </div>

      {/* Progress information */}
      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="text-slate-500 dark:text-slate-400">
          {Math.round(percentage)}% used
        </span>

        <span
          className={
            overBudget
              ? "font-semibold text-rose-500"
              : "text-slate-500 dark:text-slate-400"
          }
        >
          {overBudget
            ? `${formatCurrency(
                Math.abs(remaining)
              )} over`
            : `${formatCurrency(
                remaining
              )} remaining`}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            overBudget
              ? "bg-rose-500"
              : percentage >= 80
                ? "bg-amber-500"
                : "bg-indigo-600"
          }`}
          style={{
            width: `${progressWidth}%`,
          }}
        />
      </div>

      {/* Warning */}
      {overBudget && (
        <div className="mt-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
          You have exceeded this budget by{" "}
          <strong>
            {formatCurrency(Math.abs(remaining))}
          </strong>
          .
        </div>
      )}
    </div>
  );
}

export default BudgetCard;