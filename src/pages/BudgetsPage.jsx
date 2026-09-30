import { useState } from "react";
import { Plus } from "lucide-react";
import { useFinance } from "../hooks/useFinance";
import BudgetForm from "../components/budgets/BudgetForm";
import BudgetCard from "../components/budgets/BudgetCard";

function BudgetsPage() {
  const { budgets } = useFinance();

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Budgets
          </h1>

          <p className="mt-1 text-slate-500">
            Set spending limits and stay on track.
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white"
        >
          <Plus size={19} />
          Add budget
        </button>
      </div>

      {budgets.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-12 text-center">
          <h3 className="font-semibold">
            No budgets yet
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Create a monthly budget to start tracking your spending.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {budgets.map((budget) => (
            <BudgetCard
              key={budget.id}
              budget={budget}
            />
          ))}
        </div>
      )}

      {showForm && (
        <BudgetForm
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default BudgetsPage;