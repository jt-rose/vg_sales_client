import { ApolloProvider } from "@apollo/client";
import { client } from "../utils/apolloClient";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <ChakraProvider resetCSS>
          <Component {...pageProps} key={router.route} />
        </ChakraProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
}

export default MyApp;
