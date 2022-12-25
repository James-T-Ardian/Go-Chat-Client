import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'

const Header = (): JSX.Element => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='1em' color='lightGrey' bgColor='black' minHeight='max-content'>
      <Box px='2em' py='1em'>
        <Heading size='lg'>Go Chat</Heading>
      </Box>
      <Spacer />
    </Flex>
  )
}

export default Header
