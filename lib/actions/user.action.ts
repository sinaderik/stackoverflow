"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { CreateUserParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";

export const createUser = async (userData:CreateUserParams) => {
  try {
    connectToDatabase();
    const newUser=await User.create(userData)
    return newUser;

  } catch (error) {
    console.log(error)
    throw error
  }
};
export const updateUser = async (params:UpdateUserParams) => {
  try {
    connectToDatabase();
    const {clerkId,updateData,path}=params
    await User.findOneAndUpdate({clerkId},updateData,{new:true})
    
    revalidatePath(path)
  } catch (error) {
    console.log(error)
    throw error
  }
};

export const getUserById = async (params:any) => {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user

  } catch (error) {
    console.log("could not find the user");
  }
};
