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