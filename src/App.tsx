import { useState } from "react";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";
import ExpensesFilter from "./components/ExpensesFilter";

export const categories = ["Groceries", "Utility", "Entertainment"];

interface ExpenseItem {
  id: number;
  title: string;
  amount: number;
  category: string;
}


function App() {
  const [expenseItems, setExpenseItems] = useState<ExpenseItem[]>([]);

  const addExpenseItem = (expense: {
    title: string;
    amount: number;
    category: string;
  }) => {
    const expenseItem = { ...expense, id: expenseItems.length + 1 };
    setExpenseItems([...expenseItems, expenseItem]);
    // console.log(expenseItems)
  };

  const removeExpenseItem = (expenseId: number) => {
    setExpenseItems(expenseItems.filter((item) => item.id !== expenseId));
    // console.log(expenseItems)
  };

  const [filterCategory, setFilterCategory] = useState("All Categories");

  const onChangeFilter = (category: string) => {
    setFilterCategory(category);
    console.log(category);
  };

  const visibleExpenses = filterCategory
    ? expenseItems.filter((expense) => expense.category === filterCategory)
    : expenseItems;

  return (
    <>
      <ExpenseForm addExpense={addExpenseItem} />
      <ExpensesFilter onChangeCategory={onChangeFilter} />
      <ExpensesTable
        expensesList={visibleExpenses}
        onRemove={removeExpenseItem}
      />
    </>
  );
}

export default App;
