import { BarChart, BarChartProps } from "../components/BarChart";
import { QueryForm } from "../components/form/QueryForm";
import { sdk } from "../client";
import { GenreSalesQuery } from "src/generated/graphql";
import { Box, Flex, Text, OrderedList, ListItem } from "@chakra-ui/react";

export const getStaticProps = async () => {
  const res = await sdk.GenreSales({
    options: {
      where: {},
      limit: 10,
      offset: 0,
    },
  });

  return {
    props: {
      res,
    },
  };
};

const Index = (props: { res: GenreSalesQuery }) => {
  const data = props.res;

  console.log(data);
  return (
    <Box>
      <h1>Sales</h1>

      {/*error && (
        <p>Oh no! {error instanceof Error ? error.message : "unknown"}</p>
      )*/}
      {!data && <Text>...loading</Text>}
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
        <Flex>
          <Box>
            <QueryForm />
            <OrderedList>
              {data.salesByGenre.rows.map((r) => (
                <ListItem className="text-green-300" key={r.global_sales}>
                  {r.genre}: {r.global_sales}
                </ListItem>
              ))}
            </OrderedList>
            <Text>
              Grouped By: {`${[...new Set(data.salesByGenre.groupedBy)]}`}
            </Text>
            <Text>
              Ordered By:{" "}
              {`${data.salesByGenre.orderedBy.map((x) => x.column)}`}
            </Text>
            <Text>has more?: {`${data.salesByGenre.hasMore}`}</Text>
          </Box>

          <BarChart
            chartData={data.salesByGenre.rows.map(
              (res) => new BarChartProps(res.global_sales, res.genre)
            )}
          />
        </Flex>
      )}
    </Box>
  );
};

export default Index;
