"use client"
import { getUserById } from "@/app/lib/helpers/users"
import { useEffect, useState } from "react"

const Page = ({ params }) => {
  const userID = params.userID;
  const [user, setUser] = useState();

  async function loadData(){
    const user = await getUserById(userID)
    setUser(user);
  }
  useEffect(() => {
    loadData();
  },[])
  return (
    <div className='text-center'>
      <div> User ID: {userID}</div>
      <div>
        {user && (
          <span>username: {user.username}</span>
        )}
      </div>
    </div>
  )
}

export default Page