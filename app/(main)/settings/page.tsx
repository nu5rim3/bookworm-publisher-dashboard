'use client';
import { Button, useColorMode } from '@chakra-ui/react';

export default function Settings() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Settings {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
}
