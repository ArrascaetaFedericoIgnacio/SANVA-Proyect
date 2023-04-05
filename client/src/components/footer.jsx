import React from 'react'
import { HiHome, HiOutlineUser, HiOutlineHeart } from 'react-icons/hi'
import  {FaUsersCog } from "react-icons/fa"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='fixed bottom-0 xl:static w-full flex justify-evenly py-3 bg-[#4194cb] text-white'>
      <HiHome className='text-3xl'/>
      <Link to="/user">
        <HiOutlineUser className='text-3xl' />
      </Link>
      <Link to="/alianza">
        <FaUsersCog className='text-3xl' />
      </Link>
      <Link to="/tomas">
        <HiOutlineHeart className='text-3xl' />
      </Link>
    </div>
  )
}