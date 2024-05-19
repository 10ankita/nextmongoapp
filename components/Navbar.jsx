import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-sky-800 px-8 py-5 mx-auto my-5 text-white text-lg'>
        <Link className='' href="">Go Coding</Link>
        <Link href="/addTopic" className='bg-white p-2 text-black'>Add Topic</Link>
    </nav>
  )
}

export default Navbar