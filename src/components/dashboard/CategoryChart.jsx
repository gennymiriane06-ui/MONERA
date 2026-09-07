import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useFinance } from "../../context/FinanceContext";
import { getCategorySpending } from "../../utils/calculations";
import { formatCurrency } from "../../utils/currency";

function CategoryChart() {
  const { transactions, categories } = useFinance();

  const data = getCategorySpending(
    transactions,
    categories
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="font-bold">Spending by category</h2>

      <p className="text-sm text-slate-500">
        Where your money goes
      </p>

      {data.length === 0 ? (
        <div className="flex h-64 items-center justify-center text-sm text-slate-500">
          No expense data available.
        </div>
      ) : (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
              >
                {data.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={
                      categories[index]?.color ||
                      "#6366f1"
                    }
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) =>
                  formatCurrency(value)
                }
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default CategoryChart;