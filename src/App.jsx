import Card from "./components/Card";
import NewExpense from "./components/NewExpenseForm/NewExpense";
import Expense from "./components/Expense/Expense";
import { useState } from "react";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 4, 1),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 4, 1),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 4, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </Card>
  );
}

export default App;
