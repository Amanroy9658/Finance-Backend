import { asyncHandler } from "../../middleware/asynchandler.js";
import * as analyticsService from "./analytics.service.js";

export const getSummaryController = asyncHandler(async (req, res) => {
  const data = await analyticsService.getSummary();

  res.status(200).json({
    success: true,
    data,
  });
});

export const getCategoryController = asyncHandler(async (req, res) => {
  const data = await analyticsService.getCategoryBreakdown();

  res.status(200).json({
    success: true,
    data,
  });
});

export const getTrendsController = asyncHandler(async (req, res) => {
  const data = await analyticsService.getMonthlyTrends();

  res.status(200).json({
    success: true,
    data,
  });
});