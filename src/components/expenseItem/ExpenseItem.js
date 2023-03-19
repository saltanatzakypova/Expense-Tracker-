import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../expenseDate/ExpenseDate";
import Card from "../UI/Card";
import styled from "styled-components";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <ExpenseDescription>
        <Title>{props.expenseTitle}</Title>
        <Price>${props.expensePrice}</Price>
      </ExpenseDescription>
    </Card>
  );
}

export default ExpenseItem;

const ExpenseDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  color: #fff;
  margin-left: 20px;
`;

const Title = styled.h2`
  color: #3a3a3a;
  font-size: 1.25rem;

  flex: 1;
  margin: 0 1rem;
  color: white;
`;

const Price = styled.div`
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  border-radius: 12px;
`;
