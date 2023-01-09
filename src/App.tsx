import React, { useEffect, useState } from 'react'
import { connect, sendMessageWS } from './api'
import { Box, Flex } from '@chakra-ui/react'
import Header from './components/Header'
import MessagesContainer from './components/MessagesContainer'
import { SendMessage, JoinRoom, GetCurrentUsername } from './constants'
import InputGroup, { InputSendHandler } from './components/InputGroup'

const App = (): JSX.Element => {
  const [senderName, setSenderName] = useState<string>('')
  const [messagesArray, setMessagesArray] = useState<Message[]>([])

  useEffect(() => {
    connect(messageHandler, onOpenHandler)
  }, [])

  const onOpenHandler = (): void => {
    sendMessageWS({
      action: GetCurrentUsername
    })
  }

  const messageHandler = (msg: MessageEvent<any>): void => {
    const jsonMsg: Message = JSON.parse(msg.data ?? '{}')
    console.log('message get:', jsonMsg)
    if (jsonMsg.action === GetCurrentUsername) {
      setSenderName(jsonMsg.body ?? '')
    } else {
      setMessagesArray((prevState: Message[]) => [...prevState, jsonMsg])
    }
  }

  const sendMessage: InputSendHandler = (messageText: string): React.MouseEventHandler<HTMLButtonElement> => {
    return (): void => {
      sendMessageWS({
        action: SendMessage,
        sender: senderName,
        body: messageText,
        target: 'asdf'
      })
    }
  }

  const joinRoom: InputSendHandler = (roomName: string): React.MouseEventHandler<HTMLButtonElement> => {
    return (): void => {
      setMessagesArray([])
      sendMessageWS({
        action: JoinRoom,
        target: roomName
      })
    }
  }

  return (
    <Flex direction='column' minHeight='100vh' bgColor='black' justifyContent='flex-start'>
      <Header></Header>
      <MessagesContainer messages={messagesArray}></MessagesContainer>
      { senderName !== '' && (
        <>
          <Box bgColor="black">
            <InputGroup onInputSend={sendMessage} inputButtonText='Send' textInputPlaceholder='Type your message here'/>
            <InputGroup onInputSend={joinRoom} inputButtonText='Join' textInputPlaceholder='Type the room you want to join here'/>
          </Box>
        </>
      )}
    </Flex>
  )
}

export default App
