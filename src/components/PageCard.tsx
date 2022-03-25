import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "./Header";

interface PageCardProps {
    children: ReactNode;
}

export function PageCard({ children } : PageCardProps) {
    return (
        <Flex
          w="100%"
          h={["auto","100vh"]}
          direction="column"
          align="center"
          justify="center"
        >
          <Box
            w={['100%', '85%']}
            bg="gray.100"
            borderRadius={10}
            boxShadow="dark-lg"
            pt={["0","3rem"]}
            pb="5rem"
          >
            <Box
              maxW="80%"
              mx="auto"
            >
              <Header />


                {children}
            </Box>

          </Box>
        </Flex>
    )
}