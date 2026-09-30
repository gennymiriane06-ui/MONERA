export default function BudgetProgress({ spent, budget }) {
  const percentage =
    budget > 0 ? (spent / budget) * 100 : 0;

  const progressWidth = Math.min(percentage, 100);

  const isOverBudget = spent > budget;

  return (
    <div className="mt-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-500 dark:text-slate-400">
          {Math.round(percentage)}% used
        </span>

        <span
          className={`font-medium ${
            isOverBudget
              ? "text-red-500"
              : "text-slate-700 dark:text-slate-200"
          }`}
        >
          {spent.toLocaleString()} / {budget.toLocaleString()} XAF
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isOverBudget
              ? "bg-red-500"
              : percentage >= 80
                ? "bg-amber-500"
                : "bg-emerald-500"
          }`}
          style={{
            width: `${progressWidth}%`,
          }}
        />
      </div>

      {isOverBudget && (
        <p className="mt-2 text-sm font-medium text-red-500">
          ⚠️ You are over this budget.
        </p>
      )}
    </div>
  );
}
