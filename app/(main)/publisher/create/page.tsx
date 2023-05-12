'use client';
import { Button, useColorMode } from '@chakra-ui/react';

export default function Create() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Create {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
}
