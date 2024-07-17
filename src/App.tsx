import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog"
import { Button } from "./components/ui/button"

const PAYMENT_TYPES = [
  {
    label: "Dinheiro",
    value: "cash"
  },
  {
    label: "Cartão de Crédito",
    value: "credit_card"
  },
  {
    label: "Cartão de Débito",
    value: "debit_card"
  },
  {
    label: "TED",
    value: "ted"
  },
  {
    label: "DOC",
    value: "doc"
  },
  {
    label: "Boleto Bancário",
    value: "bank_slip"
  },
  {
    label: "Pix",
    value: "pix"
  },
]

const createExpenseSchema = z.object({
  name: z.string().min(2),
  category: z.coerce.number().min(1, {
    message: "Required category"
  }),
  price: z.coerce.number(),
  payment_type: z.string().min(1, {
    message: 'Required payment type'
  }),
  installments: z.coerce.number().min(1).default(1),
  purchase_date: z.coerce.date(),
})

type createExpenseSchema = z.infer<typeof createExpenseSchema>

export function App() {
  const [isCreditCard, setIsCreditCard] = useState(false)

  const displayInstallmentInput = (value: string) => {
    value == 'credit_card' ? setIsCreditCard(true) : setIsCreditCard(false)
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
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
    <div className="h-screen">
      <div className="flex h-full gap-5">
        <div className="w-64 border border-red-500">
          <div>
            <h1 className="text-center">My Finance Manager</h1>
          </div>
        </div>
        <div className="flex-1 border border-red-500">
          <h2 className="text-2xl p-4">Create Expense</h2>
          <div className="p-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"outline"}>Create expense</Button>
              </DialogTrigger>

              <DialogContent className="max-w-5xl h-2/4">
                <form onSubmit={handleSubmit(handleCreateExpense)}>
                  <DialogHeader>
                    <DialogTitle>Create a new expense</DialogTitle>
                  </DialogHeader>

                  <div className="grid grid-cols-12 gap-4 p-6">

                    <div className="col-span-6">
                      <label htmlFor="name" className="block">Expense: </label>
                      <input {...register('name')} type="text" id="name" placeholder="Name" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full" />
                      {errors.name?.message ?? (
                        <p>{errors.name?.message}</p>
                      )}
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="category">Category: </label>
                      <select {...register('category')} id="category" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full">
                        <option value="">Select a category</option>
                        <option value="1">Food</option>
                        <option value="2">Transport</option>
                        <option value="3">Clothes</option>
                      </select>
                      {errors.category?.message ?? (
                        <p>{errors.category?.message}</p>
                      )}
                    </div>

                    <div className="col-span-4">
                      <label htmlFor="price">Price: </label>
                      <input {...register('price')} type="text" id="price" placeholder="100.00" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full" />
                      {errors.price?.message ?? (
                        <p>{errors.price?.message}</p>
                      )}
                    </div>


                    <div className="col-span-4">
                      <label htmlFor="payment_type">Payment Type</label>
                      <select {...register('payment_type')} id="payment_type" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full" onChangeCapture={(e) => displayInstallmentInput(e.currentTarget.value)}>
                        <option value="">Select a payment type</option>
                        {PAYMENT_TYPES.map((paymentType, index) => (
                          <option key={index} value={paymentType.value}>{paymentType.label}</option>
                        ))}
                      </select>
                      {errors.payment_type?.message ?? (
                        <p>{errors.payment_type?.message}</p>
                      )}

                    </div>

                    {isCreditCard && (
                      <div className="col-span-2">
                        <label htmlFor="installments">Installments</label>
                        <select {...register('installments')} id="installments" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full">
                          {Array.from({ length: 24 }).map((_, index) => (
                            <option key={index + 1} value={(index + 1).toString()}>{index + 1}x</option>
                          ))
                          }
                        </select>
                        {errors.installments?.message ?? (
                          <p>{errors.installments?.message}</p>
                        )}
                      </div>
                    )}



                    <div className="col-span-2">
                      <label htmlFor="purchase_date">Purchase Date: </label>
                      <input {...register('purchase_date')} type="date" id="purchase_date" className="block mt-2 p-1.5 rounded-md border placeholder:text-gray-400 w-full" />
                      {errors.purchase_date?.message ?? (
                        <p>{errors.purchase_date?.message}</p>
                      )}

                    </div>

                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant={"destructive"} onClick={() => reset()}>Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Submit</Button>
                  </DialogFooter>
                </form>

              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}