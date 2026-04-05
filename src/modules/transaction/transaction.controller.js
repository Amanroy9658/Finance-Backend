import { asyncHandler } from "../../middleware/asynchandler.js";
import * as transactionService from "./transaction.service.js";

export const createTransactionController = asyncHandler(async (req, res) => {
  const transaction = await transactionService.createTransaction(
    req.body,
    req.user._id || "64dummyuserid1234567890" // temp
  );

  res.status(201).json({
    success: true,
    data: transaction,
  });
});

export const getTransactionsController = asyncHandler(async (req, res) => {
  const transactions = await transactionService.getTransactions(req.query);

  res.status(200).json({
    success: true,
    data: transactions,
  });
});