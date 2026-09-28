export function calculateTotals(transactions) {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  return {
    income,
    expenses,
    balance: income - expenses,
  };
}

export function getCategorySpending(transactions, categories) {
  return categories
    .map((category) => {
      const total = transactions
        .filter(
          (transaction) =>
            transaction.type === "expense" &&
            transaction.categoryId === category.id
        )
        .reduce((sum, transaction) => sum + transaction.amount, 0);

      return {
        name: category.name,
        value: total,
      };
    })
    .filter((category) => category.value > 0);
}