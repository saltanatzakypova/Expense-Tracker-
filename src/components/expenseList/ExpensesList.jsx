import ExpenseItem from "../expenseItem/ExpenseItem";
// import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={index}
            expenseTitle={expense.title}
            expensePrice={expense.amount}
            expenseDate={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
