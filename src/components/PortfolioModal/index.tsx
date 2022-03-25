import { Button, Divider, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { RiArchiveFill } from "react-icons/ri";
import { PortfolioItem } from "./PortfolioItem";

import * as dataJson from "./PortfolioItems.json";

interface data {
    item: {
        title: string;
        description: string;
        image?: string;
        sourceHref?: string;
        deployHref?: string;
        technologies: string[];
        avatarName?: string;
    }[]
}

export function PortfolioModal() {
    const { isOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();
    const finalRef = React.useRef()

    const data:data = dataJson;

    return (
        <>
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
                onClick={openModal}
            >
                Portfólio
            </Button>


            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                isCentered
                size="xl"
                finalFocusRef={finalRef}
                scrollBehavior="inside"
            >
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(6px)">
                    <ModalContent>
                        <ModalHeader>Alguns projetos interessantes</ModalHeader>
                        <ModalCloseButton />

                        <ModalBody pb="8">
                            <VStack divider={<Divider opacity={1}/>} >
                                {data.item.map((portfolioItem) => {
                                    return (
                                        <PortfolioItem
                                            key={portfolioItem.title}
                                            item={portfolioItem}
                                        />
                                    )
                                })}
                            </VStack>
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
}