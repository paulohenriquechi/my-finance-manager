import { Button } from "@/components/ui/button"
import DataTable from "@/components/ui/data-table"
import { expenses } from "@/expenses"
import { Expense, expenses as data } from "@/expenses"
import { ColumnDef } from "@tanstack/react-table"

const columns: ColumnDef<Expense>[] = [
    {
        accessorKey: "id",
        header: "Email"
    },
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "category",
        header: "Category"
    },
    {
        accessorKey: "amount",
        header: "Amount"
    },
    {
        accessorKey: "payment_type",
        header: "Payment Type"
    },
    {
        accessorKey: "purchase_date",
        header: "Purchase Date"
    },
]

export default function Dashboard() {
    console.log(expenses)
    return (
        <div>
            <div className="sm:flex sm:justify-between sm:items-center py-4 mb-8 border-b border-gray-200">
                <h1 className="text-zinc-700 text-4xl">Dashboard</h1>
                <Button variant={"outline"}>Create expense</Button>
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="h-52 border border-gray-200 col-span-4 shadow-sm rounded-md">graph</div>
                <div className="h-52 border border-gray-200 col-span-4 shadow-sm rounded-md">graph</div>
                <div className="h-52 border border-gray-200 col-span-4 shadow-sm rounded-md">graph</div>
            </div>

            <div>
                <DataTable columns={columns} data={data}/>
            </div>
        </div>
    )
}
