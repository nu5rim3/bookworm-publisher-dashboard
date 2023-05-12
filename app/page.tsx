'use client'

import { Link } from '@chakra-ui/next-js'
import { Button, useColorMode } from '@chakra-ui/react'
import Login from './(authentication)/login/page';

export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Login />
  )
}