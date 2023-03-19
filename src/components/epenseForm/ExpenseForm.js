import React, { useState } from "react";
import styled from "styled-components";

const defaultValues = {
  enteredTitle: "",
  enteredDate: "",
  enteredAmount: "",
};

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState(defaultValues);

  const changeValuesHandler = (key) => {
    return (e) => {
      setUserInput((prevState) => {
        return {
          ...prevState,
          [key]: e.target.value,
        };
      });
    };
  };

  const submitHandler = (event) => {
    event.preventDefault(); //

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    const isFormNotFilled = Object.values(userInput).some((value) => !value);
    if (isFormNotFilled) {
      return alert("Please, fill all fields!");
    }
    props.onSaveExpenseData(expenseData);
    setUserInput(defaultValues);
  };
  return (
    <form onSubmit={submitHandler}>
      <FormControls>
        <div className="new-expense__control">
          <ExpenseLabel>Title</ExpenseLabel>
          <ExpenseInput
            type="text"
            value={userInput.enteredTitle}
            onChange={changeValuesHandler("enteredTitle")}
          />
        </div>
        <div className="new-expense__control">
          <ExpenseLabel>Amount</ExpenseLabel>
          <ExpenseInput
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={changeValuesHandler("enteredAmount")}
          />
        </div>
        <div className="new-expense__control">
          <ExpenseLabel>Date</ExpenseLabel>
          <ExpenseInput
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={userInput.enteredDate}
            onChange={changeValuesHandler("enteredDate")}
          />
        </div>
      </FormControls>
      <ExpenseActions className="new-expense__actions">
        <ExpenseButton type="submit">Add Expense</ExpenseButton>
      </ExpenseActions>
    </form>
  );
};

export default ExpenseForm;

const FormControls = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const ExpenseLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const ExpenseInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

const ExpenseActions = styled.div`
  text-align: right;
`;

const ExpenseButton = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  active {
    background-color: #510674;
    border-color: #510674;
  }
`;
