import { Flex } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Head from 'next/head';
import Header from '../components/header';

const Starships = () => {
  return (
    <Flex flexDirection="column" minHeight="max">
      <Header />
      <Container maxW="container.xl">
        <Head>
          <title>Starships</title>
          <meta name="starships" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          starships
        </main>
        <footer>
          footer stuff
        </footer>
      </Container>
    </Flex>
  );
};

export default Starships;
