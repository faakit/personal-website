import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { RiLinkedinBoxFill, RiMailFill, RiWhatsappFill } from "react-icons/ri";
import { ContactButton } from "./ContactButton";

export function ContactModal() {
    const { isOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();
    const finalRef = React.useRef()

    return (
        <>
            <Button
                size="lg"
                variant="solid"
                bgColor="gray.800"
                color="white"
                _hover={{
                    bgColor: "gray.500"
                }}
                boxShadow="dark-lg"
                onClick={openModal}
            >
                Contato
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                isCentered
                size="xl"
                finalFocusRef={finalRef}
            >
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(6px)">
                    <ModalContent>
                        <ModalHeader>Contato</ModalHeader>
                        <ModalCloseButton />

                        <ModalBody>
                            <Text
                                fontSize="xl"
                                color="gray.700"
                                textAlign="center"
                            >
                                Você pode me contatar pelos seguintes links
                            </Text>
                            <VStack pt="8" spacing="4">
                                <ContactButton title="LinkedIn" icon={RiLinkedinBoxFill} href="https://www.linkedin.com/in/andre-altoe/" colorScheme="linkedin"/>
                                <ContactButton colorScheme="whatsapp" title="Whatsapp" icon={RiWhatsappFill} href="https://api.whatsapp.com/send?phone=5528999850991&text=Ol%C3%A1%2C%20vim%20pelo%20website!" />
                                <ContactButton title="E-mail" icon={RiMailFill} href="mailto:andrealtosan@gmail.com" />
                            </VStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={closeModal} colorScheme="blue">
                                Fechar
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
}