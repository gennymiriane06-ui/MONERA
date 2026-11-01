# MONERA — Expense & Budget Tracker

Smart money. Clear decisions.

Monera is a responsive personal finance web application built with React. It allows users to track income and expenses, organize transactions by category, create monthly budgets, and visualize their financial activity through an interactive dashboard.

The application was built as an individual full-stack-ready frontend project with a focus on clean architecture, reusable React components, responsive design, state management, data persistence, and user experience.

## ✨ Features

### 📊 Dashboard

* Total income
* Total expenses
* Net balance
* Recent transactions
* Spending by category
* Spending over time
* Empty states when no financial data is available

### 💳 Transactions

* Add income and expenses
* Edit transactions
* Delete transactions
* Delete confirmation
* Transaction validation
* Newest transactions displayed first
* Search transaction notes
* Debounced search
* Filter by:

  * Month
  * Transaction type
  * Category

### 🎯 Budgets

* Create monthly budgets
* Set budgets by category
* View budget progress
* Calculate remaining budget
* Detect over-budget categories
* Display over-budget warnings

### 🏷️ Categories

* Default categories
* Custom categories
* Custom category colors
* Category-based transaction organization

### 🌓 Theme

* Light mode
* Dark mode
* Theme preference persistence

### 💾 Data Persistence

Application data is stored in the browser using `localStorage`, allowing transactions, categories, budgets, and theme preferences to survive page refreshes.

### 📱 Responsive Design

Finora is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

## 🛠️ Tech Stack

* React
* React Router
* Tailwind CSS
* Context API
* Custom React Hooks
* Lucide React
* Recharts
* JavaScript
* localStorage
* Vite

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── common/
│   ├── dashboard/
│   ├── transactions/
│   ├── budgets/
│   ├── categories/
│   └── layout/
├── context/
├── data/
├── hooks/
├── pages/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

## 🧠 Architecture

Finora uses the React Context API as the application's global state layer.

The main application data is organized into:

```text
Transactions
Budgets
Categories
Theme
```

Reusable custom hooks are responsible for common logic such as localStorage persistence, transaction operations, budget operations, categories, theme management, and debounced searching.

This separation keeps the UI components focused on presentation while application logic remains reusable and maintainable.

## 💾 Data Persistence

Finora uses browser `localStorage` to persist user data.

The following information can be persisted:

```text
Transactions
Budgets
Categories
Theme preference
```

As a result, refreshing the browser does not remove the user's data.

## 💰 Currency Formatting

Financial amounts are formatted using JavaScript's native `Intl.NumberFormat` API.

The application uses the Central African CFA franc (`XAF`) as its currency.

## 📈 Charts

Finora uses Recharts to visualize financial information.

The dashboard includes:

1. Spending by category
2. Spending over time

Charts automatically respond to the available transaction data and display an appropriate empty state when there is not enough data.

## 🖥️ Application Pages

### Dashboard

Provides a financial overview including income, expenses, balance, recent activity, and charts.

### Transactions

Allows users to create, edit, delete, search, and filter financial transactions.

### Budgets

Allows users to create monthly budgets and monitor spending against each budget.

### Categories

Allows users to manage default and custom transaction categories.

### Settings

Provides application preferences including theme management.

## 🎨 Design Principles

The interface follows a clean dashboard-oriented design with:

* Consistent spacing
* Reusable components
* Clear visual hierarchy
* Accessible color contrast
* Responsive layouts
* Light and dark themes
* Meaningful icons
* Clear empty states
* Simple financial visualizations

## 🧪 Project Quality

Before deployment, the project should pass:

* ESLint checks
* Production build
* Responsive testing
* Transaction CRUD testing
* Budget calculations
* localStorage persistence testing
* Theme persistence testing
* Search and filtering testing
* Empty-state testing

## 📸 Screenshots

### Dashboard

*Add dashboard screenshot here.*

### Transactions

*Add transactions screenshot here.*

### Budgets

*Add budgets screenshot here.*

### Dark Mode

*Add dark-mode screenshot here.*

## 👩🏽‍💻 Author

Built individually as a React frontend project with a focus on understanding every layer of the application, from project setup and component architecture to state management, persistence, responsive design, testing, Git workflow, and deployment.

## 📄 License

This project was created for educational and portfolio purposes.