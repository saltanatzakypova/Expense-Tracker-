import React from "react";
import ExpenseForm from "../epenseForm/ExpenseForm";
import styled from "styled-components";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <Expense>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Expense>
  );
}

export default NewExpense;

const Expense = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
