import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' color='lightGrey' bgColor='black'>
      <Box px='8' py='4'>
        <Heading size='lg'>Go Chat</Heading>
      </Box>
      <Spacer />
    </Flex>
  );
}

export default Header;