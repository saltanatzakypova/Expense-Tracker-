import styled from "styled-components";

const ExpensesFilter = ({ selectedYear, onChangeSelectedYear }) => {
  return (
    <Filter>
      <FilterControl>
        <FilterLabel>Filter by year</FilterLabel>
        <FilterSelect value={selectedYear} onChange={onChangeSelectedYear}>
          <option value="All">Select All</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </FilterSelect>
      </FilterControl>
    </Filter>
  );
};

export default ExpensesFilter;

const Filter = styled.div`
  color: white;
  padding: 0 1rem;
`;

const FilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FilterSelect = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;
