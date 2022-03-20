import { Avatar, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiArchiveFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { IconLink } from "./IconLink";

export function AboutMe() {
    return (
        <Flex justifyContent="space-between" pt="2.5rem" direction={["column", "row"]}>
            <Flex direction="column">
                <Text fontSize="xl" pb="2">Olá, sou André</Text>
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
                    <Button
                        size="lg"
                        variant="outline"
                        leftIcon={<Icon as={RiArchiveFill} />}
                        fontWeight="400"
                        color="gray.700"
                        _hover={{
                            bgColor: "gray.300"
                        }}
                        boxShadow="xl"
                    >
                        Portfolio
                    </Button>
                    <Button
                        size="lg"
                        variant="solid"
                        bgColor="gray.800"
                        color="white"
                        _hover={{
                            bgColor: "gray.500"
                        }}
                        boxShadow="dark-lg"
                    >
                        Contato
                    </Button>
                </HStack>
            </Flex>
            <Avatar w={["16rem"]} h={["16rem"]} name="André Altoé" src="./images/profile.png" />
        </Flex>
    )
}