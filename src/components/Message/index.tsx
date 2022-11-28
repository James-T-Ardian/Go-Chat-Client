import { Box, Flex } from '@chakra-ui/react'

interface MessageProps {
  children: string
  hourAndMinute: string
  poster: string
}
const Message: React.FC<MessageProps> = ({children, hourAndMinute, poster}): JSX.Element => {
  return (
    <Flex px='2em' py='1em' direction='column'>
      <Box className="message-bubble" maxWidth='fit-content' bgColor='darkGrey' px='1em' borderRadius='10px'>
        <Flex className="name-and-time-container" alignItems='baseline' justifyContent='space-between'>
          <Box className="message-poster" pr='1em' color='lightGrey' fontSize='xl'>{poster}</Box>
          <Box className="message-hour-and-minute" color='grey'>{hourAndMinute}</Box>
        </Flex>
        <Box className="message-text" fontSize='2xl' color='lightGrey'>{children}</Box>
      </Box>
    </Flex>
  );
}

export default Message;