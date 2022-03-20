import { Flex, Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import { AboutMe } from "../components/AboutMe";
import { Header } from "../components/Header";


export default function Home() {
  return (
    <>
      <Head>
        <title>André Altoé Santiago</title>
      </Head>
      <main>
        <Flex
          w="100vw"
          h={["auto","100vh"]}
          direction="column"
          align="center"
          justify="center"
        >
          <Box
            w={['100vw', '90vw']}
            bg="gray.100"
            borderRadius={10}
            boxShadow="dark-lg"
            pt={["0","3rem"]}
            pb="5rem"
          >
            <Box
              maxW="80vw"
              mx="auto"
            >
              <Header />

              <AboutMe/>
            </Box>

          </Box>
        </Flex>
      </main>
    </>
  )
}
