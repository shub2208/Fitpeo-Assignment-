import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'customer',
		label: 'Customer',
		path: '/customer',
		icon: <HiOutlineUsers />
	},
	
	{
		key: 'income',
		label: 'Income',
		path: '/income',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'promote',
		label: 'Promote',
		path: '/promote',
		icon: <HiOutlineAnnotation />
	},
    {
        key: 'help',
        label: 'Help',
        path: '/help',
        icon: <HiOutlineDocumentText/>
    }
]
