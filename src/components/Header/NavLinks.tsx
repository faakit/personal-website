import { Stack, Text } from "@chakra-ui/react";

export function NavLinks() {
    return (
        <Stack spacing={8} direction="row">
            <Text color="gray.500" fontSize="xl">Sobre mim</Text>
            <Text color="gray.500" fontSize="xl">Portfolio</Text>
            <Text color="gray.500" fontSize="xl">Com que trabalho</Text>
        </Stack>
    )
}