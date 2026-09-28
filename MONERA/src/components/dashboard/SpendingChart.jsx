import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useFinance } from "../../context/FinanceContext";
import { formatCurrency } from "../../utils/currency";

function SpendingChart() {
  const { transactions } = useFinance();

  const data = [...transactions]
    .filter((transaction) => transaction.type === "expense")
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((transaction) => ({
      date: transaction.date,
      amount: transaction.amount,
    }));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="font-bold">Spending over time</h2>

      <p className="text-sm text-slate-500">
        Track your expenses over time
      </p>

      {data.length === 0 ? (
        <div className="flex h-64 items-center justify-center text-sm text-slate-500">
          No spending data available.
        </div>
      ) : (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip
                formatter={(value) =>
                  formatCurrency(value)
                }
              />

              <Line
                type="monotone"
                dataKey="amount"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default SpendingChart;