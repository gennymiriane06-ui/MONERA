import {
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

import SummaryCard from "../components/dashboard/SummaryCard";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import CategoryChart from "../components/dashboard/CategoryChart";
import SpendingChart from "../components/dashboard/SpendingChart";

import { useFinance } from "../context/FinanceContext";
import { calculateTotals } from "../utils/calculations";
import { formatCurrency } from "../utils/currency";

function DashboardPage() {
  const { transactions } = useFinance();

  const totals = calculateTotals(transactions);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <p className="text-sm text-slate-500">
          September 2026
        </p>

        <h1 className="mt-1 text-3xl font-bold">
          Your financial overview
        </h1>

        <p className="mt-2 text-slate-500">
          Understand your money and make better decisions.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <SummaryCard
          title="Total income"
          amount={formatCurrency(totals.income)}
          icon={ArrowDownLeft}
          description="Money coming in"
          iconClass="bg-emerald-100 text-emerald-600"
        />

        <SummaryCard
          title="Total expenses"
          amount={formatCurrency(totals.expenses)}
          icon={ArrowUpRight}
          description="Money going out"
          iconClass="bg-rose-100 text-rose-600"
        />

        <SummaryCard
          title="Net balance"
          amount={formatCurrency(totals.balance)}
          icon={Wallet}
          description="Income minus expenses"
          iconClass="bg-indigo-100 text-indigo-600"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <CategoryChart />
        <SpendingChart />
      </div>

      <RecentTransactions />
    </div>
  );
}

export default DashboardPage;