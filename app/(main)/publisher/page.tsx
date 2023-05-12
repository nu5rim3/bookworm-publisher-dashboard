'use client'
import PublishCardItem from '@/components/publishCardItem';
import { Link } from '@chakra-ui/next-js'
import { Button, useColorMode } from '@chakra-ui/react'

const publishItem = [1,2,3,4];

export default function Publisher() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            {publishItem.map((item) => (
                <PublishCardItem key={item} />
            ))}
        </>
    )
}