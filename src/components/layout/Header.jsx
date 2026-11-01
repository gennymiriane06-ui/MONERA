
import { Bell } from "lucide-react";
import { useLocation } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";

function Header() {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Financial Overview",
    "/transactions": "Transactions",
    "/budgets": "Budgets",
    "/categories": "Categories",
    "/settings": "Settings",
  };

  const pageTitle =
    pageTitles[location.pathname] || "Financial Overview";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur md:px-6 dark:border-slate-800 dark:bg-slate-900/90">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Welcome back 👋
          </p>

          <h2 className="text-lg font-bold">
            {pageTitle}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-xl p-2.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
            <Bell size={19} />
          </button>

          <ThemeToggle />

          <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white sm:flex">
            G
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
