'use client';

import { Button, Stack, useColorMode, useToast } from '@chakra-ui/react';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

export default function Writer() {
  const toast = useToast();
  const { colorMode } = useColorMode();
  const editorRef = useRef<any>(null);
  // const log = () => {
  //     if (editorRef.current) {
  //         console.log(editorRef.current.getContent());
  //     }
  // };

  const onSaveAsDraft = () => {
    console.log('[API] - save as Draft');
    toast({
      title: 'Save as Draft.',
      description: "We've saved your book as a draft for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  const onReadyToPublish = () => {
    console.log('[API] - ready to publish');
    toast({
      title: 'Ready to Publish.',
      description: "We've send your book reday to publish process.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Editor
        apiKey="oe5v35rhzdlpixmn84vu1uxt7e0wjy7i659chhf4v7sie81r"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<h1>Start to tell our story here</h1>"
        init={{
          height: '80vh',
          menubar: true,
          toolbar_sticky: true,
          mobile: {
            menubar: true,
          },
          branding: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | preview fullscreen ',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          skin: colorMode === 'dark' ? 'oxide-dark' : 'oxide',
          content_css: colorMode === 'dark' ? 'dark' : 'default',
        }}
      />

      <Stack
        spacing={2}
        py={5}
        direction={{ base: 'column', sm: 'row' }}
        align={'start'}
        justify={'flex-start'}
      >
        <Button
          onClick={onSaveAsDraft}
          fontSize={'sm'}
          rounded={'full'}
          _focus={{
            bg: 'gray.200',
          }}
        >
          Save As Draft
        </Button>
        <Button
          onClick={onReadyToPublish}
          fontSize={'sm'}
          rounded={'full'}
          colorScheme="cyan"
          variant="solid"
          bg={'cyan.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'cyan.500',
          }}
          _focus={{
            bg: 'cyan.500',
          }}
        >
          Ready to Publish
        </Button>
      </Stack>
    </>
  );
}
