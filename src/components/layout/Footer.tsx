import { Flex, Text, Icon } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";

export const Footer = () => {
  return (
    <Flex>
      <Text>Developed by Jeff Rose, 2021</Text>
      <Icon as={BiUserCircle} />
    </Flex>
  );
};
