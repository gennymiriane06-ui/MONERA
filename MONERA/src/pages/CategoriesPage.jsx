import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useFinance } from "../context/FinanceContext";

function CategoriesPage() {
  const {
    categories,
    addCategory,
    deleteCategory,
  } = useFinance();

  const [name, setName] = useState("");
  const [type, setType] = useState("expense");
  const [color, setColor] = useState("#6366f1");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    addCategory({
      name: name.trim(),
      type,
      color,
    });

    setName("");
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Categories
        </h1>

        <p className="mt-1 text-slate-500">
          Organize your financial activity.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h2 className="font-bold">
            Create category
          </h2>

          <div className="mt-4 space-y-4">
            <input
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Category name"
              className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
            />

            <select
              value={type}
              onChange={(event) =>
                setType(event.target.value)
              }
              className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <input
              type="color"
              value={color}
              onChange={(event) =>
                setColor(event.target.value)
              }
              className="h-12 w-full rounded-xl"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white"
            >
              <Plus size={18} />
              Add category
            </button>
          </div>
        </form>

        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: category.color,
                  }}
                />

                <div>
                  <p className="font-semibold">
                    {category.name}
                  </p>

                  <p className="text-xs capitalize text-slate-500">
                    {category.type}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  if (
                    window.confirm(
                      `Delete ${category.name}?`
                    )
                  ) {
                    deleteCategory(category.id);
                  }
                }}
                className="text-slate-400 hover:text-rose-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;