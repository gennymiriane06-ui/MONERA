import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileNav from "./MobileNav";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Sidebar />

      <div className="lg:ml-64">
        <Header />

        <main className="p-4 pb-24 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      <MobileNav />
    </div>
  );
}

export default AppLayout;