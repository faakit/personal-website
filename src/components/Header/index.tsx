import { Text, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
    return (
        <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            direction={["column", "row"]}
        >
            <Logo />

            <NavLinks />
        </Flex>
    )
}