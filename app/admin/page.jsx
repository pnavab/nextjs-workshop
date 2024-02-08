'use client';
import { useEffect, useState } from "react";
import { getAllUsers } from "../lib/helpers/users";
import Link from 'next/link'

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
          <div key={user.userID} className="p-2 mt-10 text-center border">
            <div>
              <div>
                ID: {user.userID}
              </div>
              <div>
                Username: {user.username}
              </div>
              <span>
                <Link className="ml-8 text-blue-500 hover:underline" href={`/admin/${user.userID}`}>View</Link>
                </span>
            </div>
          </div>
        ))}
      </ul>
    </>
  )
}
