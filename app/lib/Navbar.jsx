
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='p-2 mb-4 space-x-4 text-2xl text-center border-2 rounded-xl'>
      <Link href="/" className='hover:underline'>Home</Link>
      <Link href="/profile" className='hover:underline'>Profile</Link>
      <Link href="/admin" className='hover:underline'>Admin</Link>
    </div>
  )
}

export default Navbar;
