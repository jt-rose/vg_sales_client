import { useGenreSalesQuery, Column } from '../generated/graphql'
import {
  BarChart,
  BarChartProps,
  formatQueryType,
} from '../components/BarChart'
// quick test of graphql connection

// hoc (query, resultName, field)
const Sales = () => {
  const [res] = useGenreSalesQuery({
    variables: {
      options: {
        limit: 10,
        offset: 0,
        where: { titleContains: ['super'] },
        groupBy: [Column.Genre],
      },
    },
  })
  //const query = formatQueryType('genre')
  const { data, fetching, error } = res
  console.log(data)
  return (
    <div>
      <h1>Sales</h1>

      {error && <p>Oh no! {error.message}</p>}
      {fetching && <p>...fetching</p>}
      {data && (
        /*<VictoryChart
          singleQuadrantDomainPadding
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            style={{ tickLabels: { angle: -60, fontSize: 4 } }}
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            tickFormat={data.salesByGenre.rows.map((x) => x.genre)}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}m`} />
          <VictoryBar
            style={{ data: { fill: 'red' } }}
            alignment='middle'
            data={data.salesByGenre.rows.map((x, i) => ({
              x: `${i}`, //x.genre,
              y: x.global_sales,
            }))}
          />
        </VictoryChart>*/
        <BarChart
          chartData={data.salesByGenre.rows.map(
            (res) => new BarChartProps(res.global_sales, res.genre)
          )}
        />
      )}
    </div>
  )
}

export default Sales
