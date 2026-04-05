import { Transaction } from "./transaction.model.js";

export const createTransaction =async (data, userId) => {
    const {amount, type, category, date, note} =data;
    if (!amount || !type || !category || !date){
        throw { statuscode:400, message: "All required fields must be provided"};


    
    }
    const transaction = await Transaction.create({
            amount,
            type,
            category,
            date,
            note,
            createdBy: userId,
    });
    const getTransactions = await Transaction.find().sort({ createdAt: -1});
    return getTransactions;
};

export const getTransactions = async (query) => {
    return await Transaction.find().sort({ createdAt: -1});
};
