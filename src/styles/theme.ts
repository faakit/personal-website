import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        headings: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: "linear-gradient(82.8deg, #97DAFF 0.98%, #7199D5 94.24%)"
            }
        }
    }
})