import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import BudgetsPage from "./pages/BudgetsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/transactions"
            element={<TransactionsPage />}
          />

          <Route
            path="/budgets"
            element={<BudgetsPage />}
          />

          <Route
            path="/categories"
            element={<CategoriesPage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;