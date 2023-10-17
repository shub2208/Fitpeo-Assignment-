import React from 'react'
import {FaBeer } from 'react-icons/fa'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import ProfileDropdown from "./ProfileDropdown"


function SideBarLink({item}){
  const {pathname} = useLocation()
  return(
    <Link
			to={item.path}
			className={classNames(pathname === item.path ? ' text-sky-300 bg-blue-950' : 'text-neutral-400', linkClass)}
		>

        <span className='text-xl'>{item.icon}</span>
        {item.label}
    </Link>
  )
}
const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-blue-600 hover:no-underline active:bg-blue-400 rounded-sm text-base text-white'

export default function Sidebar() {
  return (
    <div className='bg-blue-800 flex flex-col w-48  p-3 text-white '>
    <div className='flex item-center gap-2 px-1 py-3'>
      <FaBeer fontSize={24}/>
      <span className='text-lg'>Dashboard</span>
    </div >
    <div className='flex-1 py-8'>
      {DASHBOARD_SIDEBAR_LINKS.map((item) => (
       <SideBarLink key={item.key} item ={item} />
      ))}

    </div >
        <div className='py-4'>
            <ProfileDropdown/>
        </div>
    </div>
  )
}
