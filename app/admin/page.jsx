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
      <ul className="mt-10">
        {/* Map users array and render user IDs and usernames */}
        {users.map(user => (
          <div key={user.userID} className="m-2 text-center border ">
            <div>
              <div>
                ID: {user.userID}
                <span className="ml-5">Username: {user.username}</span>
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
