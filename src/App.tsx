import React, { useEffect, useState } from 'react'
import { connect, sendMessageWS } from './api'
import { Flex } from '@chakra-ui/react'
import Header from './components/Header'
import MessagesContainer from './components/MessagesContainer'
import { SendMessage, JoinRoom, GetCurrentUsername } from './constants'
import InputGroup, { InputSendHandler } from './components/InputGroup'

const App = (): JSX.Element => {
  const [userName, setUserName] = useState<string>('')
  const [messagesArray, setMessagesArray] = useState<Message[]>([])
  const [roomName, setRoomName] = useState<string>('')

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
      setUserName(jsonMsg.body ?? '')
    } else {
      setMessagesArray((prevState: Message[]) => [...prevState, jsonMsg])
    }
  }

  const sendMessage: InputSendHandler = (messageText: string): React.MouseEventHandler<HTMLButtonElement> => {
    return (): void => {
      sendMessageWS({
        action: SendMessage,
        sender: userName,
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
      setRoomName(roomName)
    }
  }

  return (
    <Flex direction='column' height='100%' bgColor='black' justifyContent='center' alignItems='center' width='100%'>
      <Header roomName={roomName}></Header>
      <MessagesContainer userName= {userName} messages={messagesArray}></MessagesContainer>
      { userName !== '' && (
        <>
          <Flex bgColor="black" width='50vw' direction='column' justifyContent='center' alignItems='center'>
            <InputGroup onInputSend={sendMessage} inputButtonText='Send' textInputPlaceholder='Type your message here'/>
            <InputGroup onInputSend={joinRoom} inputButtonText='Join' textInputPlaceholder='Type the room you want to join here'/>
          </Flex>
        </>
      )}
    </Flex>
  )
}

export default App
