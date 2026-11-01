import {
  LayoutDashboard,
  Receipt,
  Wallet,
  Tags,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: Receipt,
  },
  {
    name: "Budgets",
    path: "/budgets",
    icon: Wallet,
  },
  {
    name: "Categories",
    path: "/categories",
    icon: Tags,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 p-6 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-indigo-600">
          MONERA
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Smart money. Clear decisions.
        </p>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`
              }
            >
              <Icon size={19} />
              {link.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4">
        <div className="rounded-2xl bg-indigo-600 p-4 text-white">
          <p className="text-sm font-semibold">
            Take control of your money.
          </p>

          <p className="mt-1 text-xs text-indigo-100">
            Track. Plan. Grow.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;