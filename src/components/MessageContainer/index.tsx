import { Flex } from '@chakra-ui/react'
import Message from '../Message'

const MessageContainer = () => {
  return (
    <Flex minWidth='max-content' borderTop= '1px solid black' gap='1em' bgColor='black' direction='column'>
      <Message hourAndMinute='11:30 PM' poster='foo'>
        Hello World
      </Message>
    </Flex>
  );
}

export default MessageContainer;