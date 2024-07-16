import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const createExpenseSchema = z.object({
  name: z.string(),
  category: z.string(),
  price: z.coerce.number(),
  payment_type: z.coerce.number(),
  installments: z.coerce.number(),
  purchase_date: z.coerce.date(),
})

type createExpenseSchema = z.infer<typeof createExpenseSchema>

export function App() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<createExpenseSchema>({
    resolver: zodResolver(createExpenseSchema)
  })

  const handleCreateExpense = (data: createExpenseSchema) => {
    console.log(data)

    // finally
    reset()
  }

  return (
    <div className="max-w-5xl m-auto">
      <h1 className="text-5xl">Create Expense</h1>
      <form onSubmit={handleSubmit(handleCreateExpense)} className="grid grid-cols-12 p-6 gap-4">
        <div className="col-span-6">
          <label htmlFor="name" className="block">Expense: </label>
          <input {...register('name')} type="text" id="name" placeholder="Name" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full" />
        </div>

        <div className="col-span-6">
          <label htmlFor="category">Category: </label>
          <select {...register('category')} id="category" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full">
            <option value="1">Food</option>
            <option value="2">Transport</option>
            <option value="3">Clothes</option>
          </select>
        </div>

        <div className="col-span-4">
          <label htmlFor="price">Price: </label>
          <input {...register('price')} type="text" id="price" placeholder="100.00" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full" />
        </div>


        <div className="col-span-4">
          <label htmlFor="payment_type">Payment Type</label>
          <select {...register('payment_type')} id="payment_type" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full">
            <option value="1">Money</option>
            <option value="2">Pix</option>
            <option value="3">Credit Card</option>
            <option value="4">Debit Card</option>
          </select>
        </div>

        <div className="col-span-2">
          <label htmlFor="installments">Installments</label>
          <select {...register('installments')} id="installments" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full">
            <option value="1">1x</option>
            <option value="2">2x</option>
            <option value="3">3x</option>
            <option value="4">4x</option>
            <option value="5">5x</option>
          </select>
        </div>

        <div className="col-span-2">
          <label htmlFor="purchase_date">Purchase Date: </label>
          <input {...register('purchase_date')} type="date" id="purchase_date" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full" />
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="rounded-md border py-2 px-4 col-span-4 col-"
        >
          Submit
        </button>
      </form>
    </div>
  )
}