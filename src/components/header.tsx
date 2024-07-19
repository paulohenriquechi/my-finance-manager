import { User } from "lucide-react";
import { ModeToggle } from "./mode-toogle";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="p-4 flex justify-end space-x-4">
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
        </header>
    )
}
