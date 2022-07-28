import { useEffect } from "react";
import React from "react";
import { connect, sendMsg } from './api';
import { Box, Button } from '@chakra-ui/react';
import Header from './components/Header'

const App = () : JSX.Element => {
  useEffect(() => {
    connect();
  }, [])

  const send: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    sendMsg("hello");
  };

  return (
    <Box>
      <Header></Header>
      <Button onClick={send}>Hit</Button >
    </Box>
  );
}

export default App;