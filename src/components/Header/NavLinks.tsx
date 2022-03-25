import { Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function NavLinks() {
    const { asPath } = useRouter();

    return (
        <Stack spacing={8} direction="row">
            <Link href="/">
                <Text color={asPath === "/" ? "gray.900" : "gray.500"} fontSize="xl">Sobre mim</Text>
            </Link>

            <Link href="/signature">
                <Text color={asPath === "/signature" ? "gray.800" : "gray.500"} fontSize="xl">Assinaturas</Text>
            </Link>

            <Text color="gray.400" fontSize="xl">Com que trabalho</Text>
        </Stack>
    )
}