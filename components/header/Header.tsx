import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import Link from 'next/link';
import { HamburgerIcon } from "@chakra-ui/icons";
import { routes } from "../../constants/routes";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      width="full"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Logo
        </Heading>
      </Flex>

      <Spacer />

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "min-content", md: "auto" }}
        alignItems="right"
        mt={{ base: 4, md: 0 }}
      >
        {routes.map((route) => (
          <Link key={route.title} href={route.path} passHref>
            <Text as="a">{route.title}</Text>
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};
