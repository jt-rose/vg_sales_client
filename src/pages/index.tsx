import { BarChart, BarChartProps } from "../components/BarChart";
import { QueryForm } from "../components/form/QueryForm";
import { sdk } from "../client";

const Index = () => {
  const { data, error } = sdk.useGenreSales("key-12345", {
    options: {
      where: {},
      limit: 10,
      offset: 0,
    },
  });

  console.log(data);
  return (
    <div>
      <h1>Sales</h1>

      {error && (
        <p>Oh no! {error instanceof Error ? error.message : "unknown"}</p>
      )}
      {!data && <p>...loading</p>}
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
        <div>
          <QueryForm />
          <br />
          <ul>
            {data.salesByGenre.rows.map((r) => (
              <li className="text-green-300" key={r.global_sales}>
                {r.genre}: {r.global_sales}
              </li>
            ))}
          </ul>
          <p>Grouped By: {`${[...new Set(data.salesByGenre.groupedBy)]}`}</p>
          <p>
            Ordered By: {`${data.salesByGenre.orderedBy.map((x) => x.column)}`}
          </p>
          <p>has more?: {`${data.salesByGenre.hasMore}`}</p>

          <BarChart
            chartData={data.salesByGenre.rows.map(
              (res) => new BarChartProps(res.global_sales, res.genre)
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
