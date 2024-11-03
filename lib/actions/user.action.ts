"use server";

import User from "@/database/user.model";

export const getUserById = async (params:any) => {
  try {
    
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user

  } catch (error) {
    console.log("could not find the user");
  }
};
