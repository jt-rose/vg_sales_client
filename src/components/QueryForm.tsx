import { Formik } from 'formik'
//import { Dispatch, SetStateAction } from 'react'
import { Column } from '../generated/graphql'

export const QueryForm = (props: { updateOptions: any }) => {
  //const [, query] = useGenreSalesQuery()
  return (
    <Formik
      initialValues={{ title: '' }}
      validate={(values) => {
        const errors: { title?: string } = {}

        if (!values.title) {
          errors.title = 'Required'
        }

        return errors
      }}
      onSubmit={async (values, { setSubmitting }) => {
        /*setTimeout(() => {
        alert(JSON.stringify(values, null, 2))

        setSubmitting(false)
      }, 400)*/
        setSubmitting(false)
        props.updateOptions({
          limit: 10,
          offset: 0,
          where: { titleContains: [values.title] },
          groupBy: [Column.Genre],
        })
      }}
    >
      {({
        values,

        errors,

        touched,

        handleChange,

        handleBlur,

        handleSubmit,

        isSubmitting,

        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            name='title'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />

          {errors.title && touched.title && errors.title}
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}
