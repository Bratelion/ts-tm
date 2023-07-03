import type { AppProps } from 'next/app';
import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from '@/themes';
import { Nunito } from 'next/font/google';
import { Global } from '@emotion/react';

const nunito = Nunito({ subsets: ['latin-ext'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={`
          :root {
            --font-nunito: ${nunito.style.fontFamily};
          }
        `}
      />
      <ChakraProvider theme={theme}>
        <Container as='main'>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
      ;
    </>
  );
}
