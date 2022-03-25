import { Flex, Box } from "@chakra-ui/react";
import Head from "next/head";
import { AboutMe } from "../components/AboutMe";
import { Header } from "../components/Header";
import { PageCard } from "../components/PageCard";


export default function Home() {
  return (
    <>
      <Head>
        <title>André Altoé Santiago</title>
      </Head>
      <main>
        <PageCard>
          <AboutMe />
        </PageCard>
      </main>
    </>
  )
}
