import styled from "styled-components";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("ru-RU", { month: "long" });
  const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Date>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </Date>
  );
}

export default ExpenseDate;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const Month = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;
const Day = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
const Year = styled.div`
  font-size: 0.75rem;
`;
