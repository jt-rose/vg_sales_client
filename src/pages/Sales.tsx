import { useGenreSalesQuery } from '../generated/graphql'

// quick test of graphql connection

const Sales = () => {
  const [res] = useGenreSalesQuery({
    variables: {
      options: { limit: 10, offset: 0, where: { titleContains: ['super'] } },
    },
  })
  const { data, fetching, error } = res
  console.log(data)
  return (
    <div>
      <h1>Sales</h1>

      {error && <p>Oh no! {error.message}</p>}
      {fetching && <p>...fetching</p>}
      {data && (
        <ul>
          {data.salesByGenre.rows.map((x) => (
            <li>
              {x.genre}, {x.global_sales}m global sales
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Sales
