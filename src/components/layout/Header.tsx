import {
  Flex,
  Spacer,
  Box,
  Heading,
  IconButton,
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
        <IconButton
          aria-label="toggle dark mode"
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          marginRight="3"
        />
        <IconButton aria-label="user settings" as={BiUserCircle} />
      </Box>
    </Flex>
  );
};
