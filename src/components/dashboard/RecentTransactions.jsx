import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { formatCurrency } from "../../utils/currency";
import { useFinance } from "../../hooks/useFinance";

function RecentTransactions() {
  const { transactions, categories } = useFinance();

  const recent = transactions.slice(0, 5);

  function getCategoryName(id) {
    return (
      categories.find((category) => category.id === id)?.name ||
      "Unknown"
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="font-bold">Recent transactions</h2>
          <p className="text-sm text-slate-500">
            Your latest financial activity
          </p>
        </div>
      </div>

      {recent.length === 0 ? (
        <p className="py-8 text-center text-sm text-slate-500">
          No transactions yet.
        </p>
      ) : (
        <div className="space-y-4">
          {recent.map((transaction) => {
            const income = transaction.type === "income";

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-xl p-2 ${
                      income
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-rose-100 text-rose-600"
                    }`}
                  >
                    {income ? (
                      <ArrowDownLeft size={18} />
                    ) : (
                      <ArrowUpRight size={18} />
                    )}
                  </div>

                  <div>
                    <p className="font-medium">
                      {transaction.note || getCategoryName(transaction.categoryId)}
                    </p>

                    <p className="text-xs text-slate-500">
                      {getCategoryName(transaction.categoryId)} ·{" "}
                      {transaction.date}
                    </p>
                  </div>
                </div>

                <p
                  className={`font-semibold ${
                    income
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  {income ? "+" : "-"}
                  {formatCurrency(transaction.amount)}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default RecentTransactions;