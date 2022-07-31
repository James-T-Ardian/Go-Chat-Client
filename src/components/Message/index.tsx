import { Box, Flex } from '@chakra-ui/react'

interface IProps {
  children: string
  hourAndMinute: string
  poster: string
}
const MessageContainer: React.FC<IProps> = ({children, hourAndMinute, poster}) => {
  return (
    <Flex px='2em' py='1em' direction='column'>
      <Box className="message-bubble" maxWidth='fit-content' bgColor='darkGrey' px='1em' borderRadius='10px'>
        <Flex className="name-and-time-container" alignItems='baseline'>
          <Box className="message-poster" pr='1em' color='lightGrey' fontSize='xl'>{poster}</Box>
          <Box className="message-hour-and-minute" color='grey'>{hourAndMinute}</Box>
        </Flex>
        <Box className="message-text" fontSize='2xl' color='lightGrey'>{children}</Box>
      </Box>
    </Flex>
  );
}

export default MessageContainer;