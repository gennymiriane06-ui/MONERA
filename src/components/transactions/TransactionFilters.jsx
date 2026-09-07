import { Search } from "lucide-react";

export default function TransactionFilters({
  search,
  setSearch,
  month,
  setMonth,
  type,
  setType,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className="rounded-2xl border bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search transactions..."
            className="w-full rounded-xl border py-3 pl-10 pr-3 outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800"
          />
        </div>

        <input
          type="month"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800"
        />

        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800"
        >
          <option value="all">All types</option>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </select>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800"
        >
          <option value="all">All categories</option>

          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
}