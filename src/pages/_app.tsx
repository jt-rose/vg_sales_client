import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import { Layout } from "src/components/layout/Layout";

const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: "red" }));

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={customTheme}>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
