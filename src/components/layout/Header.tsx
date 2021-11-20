import {
  Flex,
  Spacer,
  Box,
  Heading,
  Icon,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BiUserCircle } from "react-icons/bi";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <Heading>VG Sales</Heading>
      <Spacer />
      <Box>
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Icon as={BiUserCircle} />
      </Box>
    </Flex>
  );
};
