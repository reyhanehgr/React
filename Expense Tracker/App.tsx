import { use, useState } from "react";
import ExpenseList from "./Components/ExpenseTracker/ExpenseList";
import ExpenseTracker from "./Components/ExpenseTracker/ExpenseTracker";

interface Expense {
  description: string;
  amount: number;
  category: string;
}

function App() {
const[expenses , setExpenses] = useState<Expense[]>([]);

function addExpenses (expense: Expense){
  setExpenses([...expenses, expense]);
}
  return (
    <>
    <div>
      <ExpenseTracker onSubmitExpense={addExpenses} />
      <ExpenseList expenses={expenses} />
    </div>
    </>
  );
}
export default App;
