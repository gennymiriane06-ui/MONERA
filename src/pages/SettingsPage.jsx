import ThemeToggle from "../components/common/ThemeToggle";

function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-1 text-slate-500">
          Customize your MONERA experience.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">
              Appearance
            </h2>

            <p className="text-sm text-slate-500">
              Switch between light and dark mode.
            </p>
          </div>

          <ThemeToggle />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-bold">
          About MONERA
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          MONERA is a personal finance management application
          designed to help users track income, manage expenses,
          create budgets and understand their financial habits.
        </p>
      </div>
    </div>
  );
}

export default SettingsPage;