import React from 'react'
import { HiHome, HiOutlineUser, HiOutlineHeart } from 'react-icons/hi'

export const Footer = () => {
  return (
    <div className='fixed bottom-0 xl:static w-full flex justify-evenly py-3 bg-sky-400 text-white'>
      <HiHome className='text-3xl'/>
      <HiOutlineUser className='text-3xl' />
      <HiOutlineHeart className='text-3xl' />
    </div>
  )
}