import styled from "styled-components";

const ChartBar = ({ maxValue, label, value }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <ChartCont>
      <ChartInner>
        <ChartFill style={{ height: barFillHeight }}></ChartFill>
      </ChartInner>
      <ChartLabel>{label}</ChartLabel>
    </ChartCont>
  );
};

export default ChartBar;

const ChartCont = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChartFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
  height: barFillHeight;
`;

const ChartLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
