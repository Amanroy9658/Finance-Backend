import { Transaction } from "../transaction/transaction.model.js";

export const getSummary = async () => {
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" },
      },
    },
  ]);

  let totalIncome = 0;
  let totalExpense = 0;

  result.forEach((item) => {
    if (item._id === "income") totalIncome = item.total;
    if (item._id === "expense") totalExpense = item.total;
  });

  return {
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
  };
};

export const getCategoryBreakdown = async () => {
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
  ]);

  const formatted = {};
  result.forEach((item) => {
    formatted[item._id] = item.total;
  });

  return formatted;
};

export const getMonthlyTrends = async () => {
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: {
          month: { $month: "$date" },
          type: "$type",
        },
        total: { $sum: "$amount" },
      },
    },
  ]);

  const trends = {};

  result.forEach((item) => {
    const month = item._id.month;

    if (!trends[month]) {
      trends[month] = { income: 0, expense: 0 };
    }

    if (item._id.type === "income") {
      trends[month].income = item.total;
    } else {
      trends[month].expense = item.total;
    }
  });

  return trends;
};