import {
  Pencil,
  Trash2,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";

import { formatCurrency } from "../../utils/currency";

function TransactionItem({
  transaction,
  category,
  onEdit,
  onDelete,
}) {
  const income = transaction.type === "income";

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3">
        <div
          className={`rounded-xl p-3 ${
            income
              ? "bg-emerald-100 text-emerald-600"
              : "bg-rose-100 text-rose-600"
          }`}
        >
          {income ? (
            <ArrowDownLeft size={20} />
          ) : (
            <ArrowUpRight size={20} />
          )}
        </div>

        <div>
          <p className="font-semibold">
            {transaction.note || category?.name}
          </p>

          <p className="text-sm text-slate-500">
            {category?.name} · {transaction.date}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <p
          className={`font-bold ${
            income
              ? "text-emerald-600"
              : "text-rose-600"
          }`}
        >
          {income ? "+" : "-"}
          {formatCurrency(transaction.amount)}
        </p>

        <div className="flex gap-1">
          <button
            onClick={onEdit}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Pencil size={17} />
          </button>

          <button
            onClick={onDelete}
            className="rounded-lg p-2 text-rose-500 hover:bg-rose-50"
          >
            <Trash2 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionItem;