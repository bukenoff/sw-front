import { Flex } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Head from 'next/head';
import Header from '../components/header';

const News = () => {
  return (
    <Flex flexDirection="column" minHeight="max">
      <Header />
      <Container maxW="container.xl">
        <Head>
          <title>News</title>
          <meta name="news" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          news
        </main>
        <footer>
          footer stuff
        </footer>
      </Container>
    </Flex>
  );
};

export default News;
