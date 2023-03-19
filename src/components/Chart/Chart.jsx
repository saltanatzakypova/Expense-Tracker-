import styled from 'styled-components'
import ChartBar from './ChartBar'

const Container = styled.div`
	padding: 1rem;
	border-radius: 12px;
	background-color: #f8dfff;
	text-align: center;
	display: flex;
	justify-content: space-around;
	height: 10rem;
`

const Chart = ({ dataPoints = [] }) => {
	const dataPointsValues = dataPoints.map((point) => point.value)
	const totalMax = Math.max(...dataPointsValues)
	return (
		<Container className='chart'>
			{dataPoints.map((point, index) => (
				<ChartBar
					key={index}
					maxValue={totalMax}
					label={point.label}
					value={point.value}
				/>
			))}
		</Container>
	)
}

export default Chart
