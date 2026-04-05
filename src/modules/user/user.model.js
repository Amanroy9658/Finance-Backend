import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },

    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
        trim:true,
        index:true
    },

    role:{
         type:String,
         enum: ["viewer", "analyst", "admin"],
            default: "viewer",
    },
  
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
},{
    timestamps:true
});

export const User = mongoose.model("User", userSchema);
