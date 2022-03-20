import { Icon } from "@chakra-ui/react"
import { ElementType } from "react"

interface IconLinkProps {
    href: string;
    icon: ElementType;
}

export function IconLink({ icon, href }: IconLinkProps) {
    return (
        <a target="_blank" href={href} rel="noopener noreferrer">
            <Icon as={icon} fontSize="3rem"></Icon>
        </a>
    )
}