import { Provider } from 'urql'
import { client } from '../utils/urqlClient'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS >
        <Component {...pageProps} key={router.route} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
