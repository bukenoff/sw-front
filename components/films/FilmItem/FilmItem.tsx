import { Flex, Image, Text } from '@chakra-ui/react';

export const FilmItem = () => {
  return (
    <Flex border="1px solid black">
      <Flex flex="1" flexDirection="column">
        <Text as="h1">Star Wars 6</Text>
        <Text as="p">cool movie</Text>
      </Flex>
      <Flex flex="0 0 30%">
        <Image src="" />
      </Flex>
    </Flex>
  );
};
