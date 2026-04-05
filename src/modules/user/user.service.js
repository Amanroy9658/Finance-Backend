import { User } from "./user.model.js";

export const createUser = async (data) => {
    const {name, email, role } =data;

    //Validation
    if(!name || !email){
        throw { statusCOde: 400, message: "Name and email are required"};

    }

    //checking DUplicate
    const existingUser = await User.findOne({email});
    if (existingUser){
      throw { statusCode:400, message: "User already exists" };

    }

    const user = await User.create({
        name, 
        email,
        role,
    });

    return user;
}; 

export const getAllUsers = async () => {
   return await User.find().sort({ createdAt: -1});

};

export const updateUser = async (id, updateData) =>{
    const user =await User.findById(id);

    if (!user){
        throw {statusCode: 404, message:"user not found" };
    }
    if (updateData.role) user.role = updateData.role;
    if (updateData.status) user.status=updateData.status;

    await user.save();
    return user;
    };


