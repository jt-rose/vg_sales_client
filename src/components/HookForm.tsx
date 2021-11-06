import { useForm } from 'react-hook-form'
import { Console, TextSearchType/*useGenreSalesQuery, PaginatedQueryOptions*/ } from '../generated/graphql'


type FormData = {
    title?: string
    textSearchType: TextSearchType
    consoles?: Console[]
    startingYear: number
    endingYear: number
    publishers: string[]
    developers: string[]


}

// expand later
const consoleList = ['PS2', 'PS3']

export const HookForm = () => {
    const { register, handleSubmit } = useForm<FormData>()
    /*const [res] = useGenreSalesQuery({
        variables: {
          options: {
              where: {},
              orderBy: [],
            limit: 10,
            offset: 0
          }
        },
      })*/
      

    const onSubmit = handleSubmit((data) => {

        console.log(data)
    })

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='title'>Title:</label>
            <input {...register('title')} id='title'/>
            <select {...register('textSearchType')}>
                <option value='startsWith'>Starts With</option>
                <option value='endsWith'>Ends With</option>
            </select>

            <label htmlFor='consoles'>Consoles:</label>
                <select {...register('consoles')} id='consoles'>
        <option value={undefined}>Select...</option>
        {consoleList.map(console => (<option value={console} key={console}>{console}</option>))}
                </select>
                <label htmlFor='years'>Years:</label>
                <select {...register('startingYear') } defaultValue={1900}>
                    <option value={1970} key={'startingYear'}>1970</option>
                </select>
                {' - '}
                <select {...register('endingYear') } defaultValue={3000}>
                <option value={3000} key={'endingingYear'}>3000</option>
                </select>

{/* add search suggestion */}
                <label htmlFor='publishers'>Publishers:</label>
            <input {...register('publishers')} id='publishers'/>
            

{/* add search suggestion */}
<label htmlFor='developers'>Developers:</label>
            <input {...register('developers')} id='developers'/>
{/* 
// genre
// rating

// critic UserScore
// user UserScore

// sales
// global, na, jp, eu, other
*/}
        </form>
    )
}