import React from 'react'
import StatsGrid from './StatsGrid'
import BarChartGraph from './BarChartGraph'
import CustomersPieChart from './CustomersPieChart'
import ProductSell from './ProductSell'

export default function Dashboard() {
  return (
    <div >
        <div className="flex flex-col gap-4 ">
        <StatsGrid/>
        </div>
        <div className="flex flex-row gap-4 w-full py-4">
        <BarChartGraph/>
        <CustomersPieChart/>
        </div>
        <div>
            <ProductSell/>
        </div>

    </div>
  )
}
