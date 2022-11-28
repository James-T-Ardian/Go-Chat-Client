import { Flex } from '@chakra-ui/react'
import Message from '../Message'

// twentyFourHourStandardTimestamp must always be in the form of hh:mm where h is hour and m is minute
const convertToTwelveHourStandard = (twentyFourHourStandardTimestamp: string): string => {
  const hoursInTwentyFourHoursStandard: number | undefined = parseInt(twentyFourHourStandardTimestamp.slice(0,2))

  if (hoursInTwentyFourHoursStandard < 0 || hoursInTwentyFourHoursStandard > 23) {
    return 'undefined'
  }

  const minutes: string = twentyFourHourStandardTimestamp.slice(3, 5)
  let hoursInTwelveHoursStandard: number
  let amOrPM: string

  if (hoursInTwentyFourHoursStandard == 12) {
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
}

const MessagesContainer: React.FC<MessageContainerProps> = ({messages}): JSX.Element => {
  return (
    <Flex minWidth='max-content' borderTop= '1px solid black' gap='1em' bgColor='black' direction='column'>
      {
        messages.map((message: Message) => {
          return (
            <Message hourAndMinute={convertToTwelveHourStandard(message.timeStamp?.slice(11, 16) ?? '')} poster={message.sender ?? ''}>
              {message.body as string}
            </Message>
          )
        })
      }
    </Flex>
  );
}

export default MessagesContainer;