import { CircleDollarSign, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({children}: {children: React.ReactNode}) {
    return (
        <div className=" h-full p-4 flex flex-col justify-between">
            <div>
                <Link to='/dashboard'>
                    <div className="p-2 flex items-center hover:bg-gray-200 rounded-sm">
                        <Gauge className="size-5 mr-2" />
                        Dashboard
                    </div>
                </Link>
                <Link to='/expenses'>
                    <div className="p-2 flex items-center hover:bg-gray-200 rounded-sm">
                        <CircleDollarSign className="size-5 mr-2" />
                        Expenses
                    </div>
                </Link>
            </div>
            {children}
        </div>
    )
}
