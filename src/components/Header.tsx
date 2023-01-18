import { Flex, Heading, Spacer } from '@chakra-ui/react'

interface HeaderProps {
  roomName: string
}

const Header = ({ roomName }: HeaderProps): JSX.Element => {
  return (
    <Flex minWidth='max-content' borderBottom= '1px solid black' alignItems='center' gap='1em' color='lightGrey' bgColor='black' minHeight='max-content'>
      <Flex px='2em' py='1em'>
        <Heading size='lg'>Go Chat</Heading>
        <Heading size='lg'>You are currently in {roomName}</Heading>
      </Flex>
      <Spacer />
    </Flex>
  )
}

export default Header
