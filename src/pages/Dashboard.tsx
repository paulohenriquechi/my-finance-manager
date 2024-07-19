export default function Dashboard() {
    return (
        <div>
            <div className="sm:flex sm:justify-between sm:items-center pb-4 border-b border-gray-200">
                <h1 className="text-zinc-700 text-4xl">Dashboard</h1>
            </div>

            <div className="grid grid-cols-12 gap-6 py-4 border-b border-gray-200">
                <div className="h-52 border border-gray-200 col-span-4 shadow-sm rounded-md">graph</div>
                <div className="h-52 border border-gray-200 col-span-4 shadow-sm rounded-md">graph</div>
                <div className="h-52 border border-gray-200 col-span-4 shadow-sm rounded-md">graph</div>
            </div>
        </div>
    )
}
