import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../expenseFilter/ExpensesFilter";
import ExpensesList from "../expenseList/ExpensesList";
import { useState } from "react";
import ExpensesChart from "../expensesChart/ExpensesChart";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("All");

  const selectChangeHandler = ({ target: { value } }) => {
    setSelectedYear(value);
  };
  const getCurrentExpenses = () => {
    if (selectedYear === "All") {
      return expenses;
    }
    return expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
  };
  const renderedExpenses = getCurrentExpenses();

  return (
    <Card className="expenses">
      <ExpensesChart expenses={renderedExpenses} />
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeSelectedYear={selectChangeHandler}
      />
      <ExpensesList expenses={renderedExpenses} />
    </Card>
  );
}

export default Expenses;
