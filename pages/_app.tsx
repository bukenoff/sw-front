import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Head from 'next/head';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex flexDirection="column" minHeight="max">
      <Header />
      <Container maxW="container.xl">
        <Component {...pageProps} />
      </Container>
        <footer>
          footer stuff
        </footer>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
