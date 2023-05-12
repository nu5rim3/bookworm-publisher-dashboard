'use client'
import { Button, Heading, Stack, Text, useColorMode } from '@chakra-ui/react'

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Stack align={'center'}>
            <Heading fontSize={'4xl'}>TODO</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
                book sales
            </Text>
            <Text fontSize={'lg'} color={'gray.600'}>
                book status
            </Text>
            <Text fontSize={'lg'} color={'gray.600'}>
                book progress
            </Text>
        </Stack>
    )
}