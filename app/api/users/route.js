import mongoConnect from '@/app/lib/mongoConnect';
import User from '@/app/lib/models/userSchema';
import { NextResponse } from 'next/server';


function generateRandomHex(length) {
  let result = '';
  const characters = '0123456789abcdef';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

//add a user
export async function POST(req) {
  await mongoConnect();
  const data = await req.json();
  const { username } = data;
  try {
    const id = generateRandomHex(20);
    const newUser = {
      _id: id,
      username: username,
    };
    const user = await User.create(newUser);
    return NextResponse.json({ success: true, user: user });
  } catch (error) {
    console.error('Error adding user:', error);
    return NextResponse.json({ success: false, error: 'Failed to add user' });
  }
  
}
