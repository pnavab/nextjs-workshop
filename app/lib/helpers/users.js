'use server';

import mongoConnect from "../mongoConnect";
import User from '@/app/lib/models/userSchema';

export async function getAllUsers() {
  await mongoConnect();
  const data = await User.find();
  const users = data.map((user) => {
    return {
      userID: user._id,
      username: user.username
    }
  });
  // console.log(users);
  return users;
}

export async function getUserById(id) {
  await mongoConnect();
  const data = await User.findById(id);
  return {
    userID: data._id,
    username: data.username,
  }
}


export async function deleteUserbyID(id) {
  try {
    await mongoConnect(); // Connect to MongoDB
    const data = await User.deleteOne({ _id: id }); // Delete user by id

    if (data.deletedCount === 0) {
      return { status: 400 }; // User not found or not deleted
    }

    return { status: 200 }; // User deleted successfully
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error; // Rethrow error for handling in higher levels
  }
}