'use client'
import { Link } from '@chakra-ui/next-js'
import { Button, useColorMode } from '@chakra-ui/react'

export default function Comments() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            Comments {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
}