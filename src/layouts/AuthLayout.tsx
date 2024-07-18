export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* sidebar */}
            <div className="min-w-fit border border-gray-200 w-60">

            </div>

            {/* content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
                {/* header */}
                <div className="border border-gray-200 py-4">
                    <h2>Header</h2>
                </div>

            {/* content */}
            <main className="grow border border-gray-200">
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl border border-gray-200">
                    {children}
                </div>

            </main>
            </div>


        </div>
    )
}
