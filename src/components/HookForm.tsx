import { useForm } from 'react-hook-form'
import { Console, Genre, TextSearchType/*useGenreSalesQuery, PaginatedQueryOptions*/ } from '../generated/graphql'
import { InputGroup, InputLeftAddon, Input } from '@chakra-ui/react'

type FormData = {
    title?: string
    textSearchType: TextSearchType
    consoles?: Console[]
    startingYear: number
    endingYear: number
    publishers: string[]
    developers: string[]
    genres: string[]


}


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
            <InputGroup>
            <InputLeftAddon children='Title' />
            <Input {...register('title')} />
            </InputGroup>
            
            <select {...register('textSearchType')}>
        {Object.keys(TextSearchType).map(searchType => (
            <option value={searchType} key={searchType}>{searchType}</option>
        ))}
            </select>

            <label htmlFor='consoles'>Consoles:</label>
                <select {...register('consoles')} id='consoles'>
        <option value={undefined}>Select...</option>
        {Object.keys(Console).map(console => (
            <option value={console} key={console}>{console}</option>
        ))}
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

            <label htmlFor='genres'>Genres:</label>
                <select {...register('genres')} id='genres'>
        <option value={undefined}>Select...</option>
        {Object.keys(Genre).map(genre => (
            <option value={genre} key={genre}>{genre}</option>
        ))}
        </select>
{/* 
// rating

// critic UserScore
// user UserScore

// sales
// global, na, jp, eu, other
*/}
        </form>
    )
}