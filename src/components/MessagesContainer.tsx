import { Flex } from '@chakra-ui/react'
import Message from './Message'

// twentyFourHourStandardTimestamp must always be in the form of hh:mm where h is hour and m is minute
const convertToTwelveHourStandard = (twentyFourHourStandardTimestamp: string): string => {
  const hoursInTwentyFourHoursStandard: number | undefined = parseInt(twentyFourHourStandardTimestamp.slice(0, 2))

  if (hoursInTwentyFourHoursStandard < 0 || hoursInTwentyFourHoursStandard > 23) {
    return 'undefined'
  }

  const minutes: string = twentyFourHourStandardTimestamp.slice(3, 5)
  let hoursInTwelveHoursStandard: number
  let amOrPM: string

  if (hoursInTwentyFourHoursStandard === 12) {
    amOrPM = 'PM'
    hoursInTwelveHoursStandard = hoursInTwentyFourHoursStandard
  } else if (hoursInTwentyFourHoursStandard / 12 > 0) {
    amOrPM = 'PM'
    hoursInTwelveHoursStandard = hoursInTwentyFourHoursStandard % 12
  } else {
    amOrPM = 'AM'
    hoursInTwelveHoursStandard = hoursInTwentyFourHoursStandard
  }

  return `${hoursInTwelveHoursStandard.toString()}:${minutes} ${amOrPM}`
}

interface MessageContainerProps {
  messages: Message[]
  userName: string
}

const MessagesContainer: React.FC<MessageContainerProps> = ({ messages, userName }: MessageContainerProps): JSX.Element => {
  return (
    <Flex height='75vh' minWidth='max-content' width='50vw' gap='1em' bgColor='black' direction='column' overflowY='scroll' css={{
      '&::-webkit-scrollbar': {
        width: 0,
        height: 0
      },
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none'
    }}>
      {
        messages.map((message: Message) => {
          return (
            <Message userName={userName} hourAndMinute={convertToTwelveHourStandard(message.timeStamp?.slice(11, 16) ?? '')} poster={message.sender ?? ''}>
              {message.body as string}
            </Message>
          )
        })
      }
    </Flex>
  )
}

export default MessagesContainer
