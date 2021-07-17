import '../styles/globals.css';
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Footer from '../components/footer';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <VStack height="100vh">
      <Header />
      <Container maxW="container.xl" flex="1">
        <Component {...pageProps} />
      </Container>
      <Footer />
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
