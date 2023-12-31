import Head from 'next/head';
import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { unselectableText } from '@/themes/customSx';

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Task manager</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        flexDirection={'column'}
        justifyContent={'space-between'}
        alignItems='center'
        padding={'6rem'}
        minH={'100vh'}
      >
        <Box
          color={`${colorMode}.text`}
          bg={`${colorMode}.background`}
          p={2}
          borderRadius={5}
          sx={unselectableText}
          _hover={{ bg: `${colorMode}.secondary`, cursor: 'pointer' }}
        >
          This is a headline
        </Box>
      </Flex>
    </>
  );
}
