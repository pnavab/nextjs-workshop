'use client';
import { useEffect, useState } from "react";
import { getAllUsers } from "../lib/helpers/users";
import Link from "next/link";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("new user is", newUser);
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: newUser })
      });

      if (response.ok) {
        setError(false);
        loadData();
      } else {
        setError(true)
      }

    } catch (error) {
      setError(true);
    }
  };
  async function loadData() {
    const userData = await getAllUsers();
    setUsers(userData);
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <div className="mx-10 ml-4">
      <div className='text-center'>
        <h1 className="text-3xl">Admin Page</h1>
      </div>
      <input onChange={(e) => setNewUser(e.target.value)} placeholder="user to add" className="p-2 text-white bg-black border rounded-lg"></input>
      <button onClick={handleSubmit} className="p-2 ml-4 border rounded-xl">Click to add user</button>
      {error && (
        <p>Error adding user</p>
      )}
      <ul>
        {/* Map users array and render user IDs and usernames */}
        {users.map(user => (
          <div key={user.userID} className="p-2 mt-2 text-center border">
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
              <button></button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}