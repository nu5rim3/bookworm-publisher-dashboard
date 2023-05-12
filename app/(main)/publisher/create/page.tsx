'use client'
import { Link } from '@chakra-ui/next-js'
import { Button, useColorMode } from '@chakra-ui/react'

export default function Create() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            Create {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
}