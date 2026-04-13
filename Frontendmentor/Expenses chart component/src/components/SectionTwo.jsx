import Chart from "./Chart"

function SectionTwo() {
    return (
        <main className="bg-white rounded-[10px] p-6 mt-5 lg:w-[40%] lg:mx-auto overflow-hidden">
            <h1 className="font-semibold text-[32px]">Spending - Last 7 days</h1>
            <Chart />
            <hr className="text-[#fcf1e9] border-2 mt-5" />
            <div className="mt-5 flex justify-between">
                <div>
                    <p className="text-[18px] font-medium text-[#A6A29B]">Total this month</p>
                    <p className="text-[38px] font-semibold">$478.33</p>
                </div>
                <div className="mt-auto text-right">
                    <p className="font-semibold">+2.4%</p>
                    <p className="font-medium text-[#A6A29B]">from last month</p>
                </div>
            </div>
        </main>
    )
}

export default SectionTwo