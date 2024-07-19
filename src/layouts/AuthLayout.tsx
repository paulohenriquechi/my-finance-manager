import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* sidebar */}
            <div className="min-w-fit w-60 p-4 flex flex-col">
                <div className="py-4 border-b">
                    <h3 className="text-2xl">myFinanceManager</h3>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <Link to="/dashboard" className="border-b border-gray-200 w-full text-center">Dashboard</Link>
                </div>
            </div>

            {/* content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
                {/* header */}
                <div className="p-4 flex justify-end space-x-4">
                    <ModeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <User className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Link to="/profile">
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/settings">
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/logout">
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* content */}
                <main className="grow border border-gray-200">
                    <div className="p-4 w-full max-w-7xl ">
                        {children}
                    </div>

                </main>
            </div>


        </div>
    )
}
