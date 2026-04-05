import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required:true,
        min: 0,
    },
   type:{
    type:String,
    enum:["income", "expense"],
    required: true,
    index: true,
   },
   category: {
    type: String,
    required:true,
    index:true,
   

   },

   date: {
    type:Date,
    required:true,
    index:true,
   },
   note: {
    type:String,
    trim:true,
   },
   createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    reequired:true,
   },

},
{
    timestamps: true,
}

);

export const Transaction = mongoose.model("Transaction", transactionSchema);
