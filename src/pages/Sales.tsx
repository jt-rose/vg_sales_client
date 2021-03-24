import { useQuery } from 'urql'

// quick test of graphql connection
const query = `
    query {
        games(options: { where: {titleContains: ["luigi"]}, limit: 50, offset: 0}) {
          rows {
            title
            rating
            jp_sales
          }
          hasMore
        }
      }
`

const Sales = () => {
  const [result, rerun] = useQuery({ query })
  const { data, fetching, error } = result
  console.log(data)
  return (
    <div>
      <h1>Sales</h1>
      {error && <p>Oh no! {error.message}</p>}
      {fetching && <p>...fetching</p>}
      {data && (
        <ul>
          {data.games.rows.map((x: any) => (
            <li>{x.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Sales
