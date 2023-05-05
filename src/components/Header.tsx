import { Flex, Heading, Spacer } from '@chakra-ui/react'

interface HeaderProps {
  roomName: string
}

const Header = ({ roomName }: HeaderProps): JSX.Element => {
  return (
    <Flex width='100%' borderBottom= '1px solid black' alignItems='center' gap='1em' color='lightGrey' bgColor='black' minHeight='max-content'>
      <Flex px='2em' py='1em' width='100%' alignItems='center' justifyContent='space-between'>
        <Heading size='lg' width='20%'>Go Chat</Heading>
        <Heading size='lg'>{roomName ? `Room: ${roomName}` : ''}</Heading>
        <Heading size='lg'width='20%'>  </Heading>
      </Flex>
      <Spacer />
    </Flex>
  )
}

export default Header
