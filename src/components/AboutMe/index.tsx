import { Avatar, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiArchiveFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { ContactModal } from "../ContactModal";
import { PortfolioModal } from "../PortfolioModal";
import { IconLink } from "./IconLink";

export function AboutMe() {
    return (
        <Flex 
        justifyContent="space-between" 
        pt="2.5rem" 
        direction={["column", "row"]}
        align="center"
        >
            <Flex direction="column">
                <Text fontSize="xl" pb="2">Olá, sou André.</Text>
                <Text
                    fontSize="5xl"
                    fontWeight="semibold"
                    lineHeight="3.2rem"
                    color="gray.600"
                    maxW="50rem"
                >
                    Sou um desenvolvedor fullstack e amo ser desafiado!
                </Text>
                <HStack py="1rem">
                    <IconLink href="https://www.linkedin.com/in/andre-altoe/" icon={RiLinkedinBoxFill} />

                    <IconLink href="https://github.com/faakit" icon={RiGithubFill} />
                </HStack>
                <HStack spacing="8">
                    <PortfolioModal/>
                    <ContactModal/>
                </HStack>
            </Flex>
            <Avatar w={["16rem"]} h={["16rem"]} name="André Altoé" src="./images/profile.png" mt={["3rem","0"]}/>
        </Flex>
    )
}