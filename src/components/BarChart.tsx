import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar } from 'victory'

export const formatQueryType = (type: 'genre' | 'year_of_release') => {
  switch (type) {
    case 'genre':
      return { type, name: 'salesByGenre' }
    case 'year_of_release':
      return { type, name: 'salesByYear' }
    default:
      throw new Error('wrong query type!')
  }
}

export class BarChartProps {
  sales: number
  xAxisTitle: string
  /* x: {
        sales: number;
    xAxisTitle: string;
    }[],
    y: {

    }
    */
  constructor(sales: number, xAxisTitle: string) {
    this.sales = sales
    this.xAxisTitle = xAxisTitle
  }
}

export const BarChart = (props: { chartData: BarChartProps[] }) => (
  <VictoryChart
    singleQuadrantDomainPadding
    domainPadding={20}
    theme={VictoryTheme.material}
  >
    <VictoryAxis
      style={{ tickLabels: { angle: -60, fontSize: 4 } }}
      tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      tickFormat={props.chartData.map((x) => x.xAxisTitle)}
    />
    <VictoryAxis dependentAxis tickFormat={(x) => `${x}m`} />
    <VictoryBar
      style={{ data: { fill: 'red' } }}
      alignment='middle'
      data={props.chartData.map((x, i) => ({
        x: `${i}`, //x.genre,
        y: x.sales,
      }))}
    />
  </VictoryChart>
)
