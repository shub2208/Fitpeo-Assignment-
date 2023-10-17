import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

export default function Header() {
  return (
    <div className=' h-16 px-4 py-4 flex justify-between item-center'>
        <div className='text-lg px-8 py-3'>
        Hello Shubham 👋🏼,
        </div>
        <div className="relative">
				<HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-5 left-3 -translate-y-1/2" />
				<input
					type="text"
					placeholder="Search..."
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-10 pr-4 rounded-lg"
				/>
			</div>
    
    </div>
  )
}
