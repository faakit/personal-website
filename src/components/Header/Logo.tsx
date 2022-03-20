import { Text } from "@chakra-ui/react"

export default function Logo() {
    return (
        <Text fontSize="5xl" fontWeight="semibold">
            AAS
            <Text as="span" fontSize="6xl" color="blue.500">.</Text>
        </Text>
    )
}