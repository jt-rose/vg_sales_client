import { Flex, Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Flex w="full" minHeight="100vh" flexDirection="column" padding="5">
      <Header />
      <Box flexGrow={1} backgroundColor="azure">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
