import { Button, Icon } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiLinkedinBoxFill } from "react-icons/ri";

interface ContactButtonProps {
    title: string;
    href: string;
    icon: ElementType;
    colorScheme?: string;
}

export function ContactButton({ href, icon, title, colorScheme }: ContactButtonProps) {
    return (
        <Button leftIcon={<Icon as={icon} />} colorScheme={colorScheme}>
            <a target="_blank" href={href} rel="noopener noreferrer">
                {title}
            </a>
        </Button>
    )
}