import { AlertTriangle, X } from "lucide-react";

export default function DeleteTransactionModal({
  transaction,
  onCancel,
  onConfirm,
}) {
  if (!transaction) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-3 text-red-600 dark:bg-red-950">
              <AlertTriangle size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Delete transaction?
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onCancel}
            title="Close"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        <div className="my-6 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Transaction
          </p>

          <p className="mt-1 font-semibold text-slate-900 dark:text-white">
            {transaction.note || "Unnamed transaction"}
          </p>

          <p className="mt-1 font-bold text-red-500">
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "XAF",
              maximumFractionDigits: 0,
            }).format(transaction.amount)}
          </p>
        </div>

        <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">
          Are you sure you want to permanently delete this transaction?
        </p>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}