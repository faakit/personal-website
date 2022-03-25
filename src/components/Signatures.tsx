import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

interface SingnatureProps {
    signatures: {
        imgId: string;
        image: string;
    }[];
}

export function Signatures({ signatures }: SingnatureProps) {
    return (
        <Flex mt={["2rem", "-5rem"]} align="center" direction="column">
            <Text textAlign="center" fontSize="4xl" color="white" fontFamily="monospace" pb="8">
                Galeria de Assinaturas
            </Text>
            <Flex
                w={['100%', '85%']}
                margin="0 auto"
                justifyContent="space-evenly"
                wrap="wrap"
            >
                {signatures.map((signature) => {
                    return (
                        <Image
                            key={signature.imgId}
                            src={signature.image}
                            alt=""
                            w={[500]}
                            filter="invert(1)"
                        />
                    )
                })}
            </Flex>
        </Flex>
    )
}