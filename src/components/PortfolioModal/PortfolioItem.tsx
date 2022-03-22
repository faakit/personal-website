import { Avatar, Button, Divider, Flex, HStack, Text } from "@chakra-ui/react";

interface PortfolioItemProps {
    item: {
        title: string;
        description: string;
        image?: string;
        sourceHref?: string;
        deployHref?: string;
        technologies: string[];
        avatarName?:string;
    }
}

export function PortfolioItem({ item }: PortfolioItemProps) {
    return (
        <Flex>
            <Avatar name={item.avatarName} src={item.image} size="xl" alignSelf="center" />
            <Flex direction="column" pl="4">
                <Text fontSize="xl" fontWeight="semibold" color="gray.700">
                    {item.title}
                </Text>
                <Text color="gray.600" fontSize="sm">
                    {item.description}
                </Text>
                <Divider />
                <Text color="gray.700" fontSize="smaller">
                    Feito com: {item.technologies.map((technology, i) => {
                        if (i + 1 === item.technologies.length) {
                            return technology
                        }
                        return technology + " | "
                    })}
                </Text>
                <HStack justifyContent="flex-end">
                    {!!item.sourceHref ?
                        (
                            <Button>
                                <a target="_blank" href={item.sourceHref} rel="noopener noreferrer">
                                    Ver código
                                </a>
                            </Button>
                        ) : null}
                    {!!item.deployHref ?
                        (
                            <Button colorScheme="teal">
                                <a target="_blank" href={item.deployHref} rel="noopener noreferrer">
                                    Ver deploy
                                </a>
                            </Button>
                        ) : null
                    }
                </HStack>
            </Flex>
        </Flex>
    )
}