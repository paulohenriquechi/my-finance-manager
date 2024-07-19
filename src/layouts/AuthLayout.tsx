import Header from "@/components/header";
import SideBar from "@/components/sidebar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden">
            <SideBar/>

            <div className="h-full border"></div>

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
                <Header />

                <div className="w-full border"></div>

                <main className="grow">
                    <div className="p-4 w-full max-w-7xl ">
                        {children}
                    </div>

                </main>
            </div>


        </div>
    )
}
