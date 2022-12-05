import { useEffect, useState } from "react"
import React from "react"
import { connect, sendMsg } from './api'
import { Box, Button, Flex } from '@chakra-ui/react'
import Header from './components/Header'
import MessagesContainer from './components/MessagesContainer'
import { SendMessage, JoinRoom, GetCurrentUsername } from "./constants"

const App = (): JSX.Element => {
  const [senderName, setSenderName] = useState<string>('')
  const [messagesArray, setMessagesArray] = useState<Message[]>([])

  useEffect(() => {
    connect(messageHandler, onOpenHandler);
  }, [])

  const onOpenHandler = (): void => {
    sendMsg({
      action: GetCurrentUsername
    })
  }

  const messageHandler = (msg: MessageEvent<any>): void => {
    const jsonMsg: Message = JSON.parse(msg.data ?? '{}')
    console.log("message get:", jsonMsg)
    if (jsonMsg.action === GetCurrentUsername){
      setSenderName(jsonMsg.body ?? '')
    } else {
      setMessagesArray((prevState: Message[]) => [...prevState, jsonMsg])
    }
  }

  const send: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    sendMsg({
      action: SendMessage,
      sender: senderName,
      body: "Hellow World",
      target: "asdf"
    });
  };

  const join: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    sendMsg({
      action: JoinRoom,
      target: "asdf"
    })
  };

  return (
    <Flex direction='column' minHeight='100vh' bgColor='black' justifyContent='flex-start'>
      <Header></Header>
      <MessagesContainer messages={messagesArray}></MessagesContainer>
      { senderName !== '' && (
        <>
          <Box>
            <Button onClick={send}>Hit</Button>
            <Button onClick={join}>join room</Button >
          </Box>
        </>
      )}
    </Flex>
  );
}

export default App;