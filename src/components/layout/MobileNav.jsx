import {
  LayoutDashboard,
  Receipt,
  Wallet,
  Tags,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    path: "/dashboard",
    name: "Home",
    icon: LayoutDashboard,
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: Receipt,
  },
  {
    path: "/budgets",
    name: "Budgets",
    icon: Wallet,
  },
  {
    path: "/categories",
    name: "Categories",
    icon: Tags,
  },
];

function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white px-2 py-2 lg:hidden dark:border-slate-800 dark:bg-slate-900">
      <div className="flex justify-around">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-500"
                }`
              }
            >
              <Icon size={20} />
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNav;