import { useEffect, useState } from "react";
import React from "react";
import { connect, sendMsg } from './api';
import { Box, Button } from '@chakra-ui/react';
import Header from './components/Header'
import MessageContainer from './components/MessageContainer'
import { SendMessage, JoinRoom, GetCurrentUsername } from "./constants";

const App = () : JSX.Element => {
  const [senderName, setSenderName] = useState('')
  useEffect(() => {
    connect(messageHandler, onOpenHandler);
  }, [])

  const onOpenHandler = (): void => {
    sendMsg({
      action: GetCurrentUsername
    });
  }

  const messageHandler = (msg: MessageEvent<any>): void => {
    const jsonMsg: Message = JSON.parse(msg.data ?? '{}')
    console.log("message get:", jsonMsg)
    if (jsonMsg.action === GetCurrentUsername){
      setSenderName(jsonMsg.body ?? '')
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
    <Box>
      <Header></Header>
      <MessageContainer></MessageContainer>
      { senderName !== '' && (
        <>
          <Button onClick={send}>Hit</Button >
          <Button onClick={join}>join room</Button >
        </>
      )}

    </Box>
  );
}

export default App;