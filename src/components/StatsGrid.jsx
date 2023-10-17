import React from 'react'
import { IoBagHandle, IoPieChart, IoCashOutline, IoCart } from 'react-icons/io5'




export default function StatsGrid() {
  return (
    <div className="flex gap-4">
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Earnings</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">$198K</strong>
                <span className="text-sm text-green-500 pl-2">↑34.3%</span>
            </div>
        </div>
    </BoxWrapper>
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Orders</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">$2.4K</strong>
                <span className="text-sm text-red-500 pl-2">↓3.1%</span>
            </div>
        </div>
    </BoxWrapper>
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <IoCashOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Balance</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">$40K</strong>
                <span className="text-sm text-red-500 pl-2">↓3.1%</span>
            </div>
        </div>
    </BoxWrapper>
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Sales</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">$400K</strong>
                <span className="text-sm text-green-500 pl-2">↑3.3%</span>
            </div>
        </div>
    </BoxWrapper>
</div>
)
}

function BoxWrapper({ children }) {
return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}