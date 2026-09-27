import React from "react";
import { useForm } from "react-hook-form";

interface Expense {
  description: string;
  amount: number;
  category: string;
}
interface Props {
  onSubmitExpense: (expense: Expense) => void;
}

function ExpenseTracker({ onSubmitExpense }: Props) {


const { register, handleSubmit } = useForm<Expense>();


function onSubmit(data: Expense) {
  onSubmitExpense(data);
}


  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3"><label htmlFor="description" className="form-label">Description</label>
        <input {...register("description")} id='description' type="text" className="form-control" />
      </div>


      <div className="mb-3"><label htmlFor="amount" className="form-label">Amount</label>
        <input {...register("amount" , { valueAsNumber: true })} id='amount' type="text" className="form-control" />
      </div>


      <select {...register("category")} id="category" className="form-select">
        <option value="">Select a category</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <button className="btn btn-primary" type='submit'>Submit</button>
    </form>
  );
}

export default ExpenseTracker