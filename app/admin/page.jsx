'use client';
import { useEffect, useState } from "react";
import { getAllUsers } from "../lib/helpers/users";

export default function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadData() {
      const userData = await getAllUsers();
      setUsers(userData);
    }
    loadData()
  }, [])
  return (
    <>
      <div className='text-center'>
        <h1 className="text-3xl">Admin Page</h1>
      </div>
      <ul>
        {/* Map users array and render user IDs and usernames */}
        {users.map(user => (
          <li key={user.userID}>
            ID: {user.userID}, Username: {user.username}
          </li>
        ))}
      </ul>
    </>
  )
}
