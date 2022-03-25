import Head from "next/head";
import Canvas from "../components/Canvas";
import { PageCard } from "../components/PageCard";
import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import { Signatures } from "../components/Signatures";

import { fauna } from "../services/fauna";
import { query as q } from 'faunadb';

interface SignatureProps {
    signatures: {
        imgId: string;
        image: string;
    }[];
    baseURL: string;
}

export default function Signature({ signatures, baseURL }: SignatureProps) {
    const [image, setImage] = useState('');
    const canvasRef = useRef(null);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {
        async function postSignature(image: string) {
            const rawResponse = await fetch(baseURL + '/api/gallery',
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "image": image })
                });

            alert("Enviado!!");
            
            if(typeof window) {
                window.location.reload();
            }
        }

        if (!!image) {
            postSignature(image);
        }
    }, [image]);

    return (
        <>
            <Head>
                <title>Assinatura | André Altoé Santiago</title>
            </Head>
            <main>
                <PageCard>
                    <Flex
                        align="center"
                        justify="center"
                        direction="column"
                    >
                        {!!isWideVersion && <> 
                        <Text fontSize="xl" color="gray.700" pb="8">
                            Faça sua assinatura no quadro abaixo e faça parte da minha história! :)
                        </Text>
                            <Box backgroundColor="gray.300" borderRadius="4">
                                <Canvas
                                    width={600}
                                    height={300}
                                    setData={setImage}
                                    parentCanvasRef={canvasRef}
                                />
                            </Box>
                            <Flex pt="8">
                                <Button colorScheme="blue" onClick={() => canvasRef.current()}>Enviar!</Button>
                                {typeof window && <Button ml="8" onClick={() => window.location.reload()}>Apagar</Button>}
                            </Flex>
                        </>}
                    </Flex>
                </PageCard>
                <Signatures signatures={signatures} />
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const faunaQuery = await fauna.query(
        q.Map(
            q.Paginate(q.Match(q.Index('image'))),
            q.Lambda(x => q.Get(x))
        )
    ) as any;

    const resultJson = faunaQuery.data.map((image) => {
        return image.data;
    })

    return {
        props: {
            signatures: resultJson,
            baseURL: process.env.THISBASEURL
        },
        revalidate: 20 // 20 seconds
    }
}