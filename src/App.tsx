import { useEffect } from "react";
import React from "react";
import { connect, sendMsg } from './api';

const App = () : JSX.Element => {
  useEffect(() => {
    connect();
  }, [])

  const send: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    sendMsg("hello");
  };

  return (
    <div className="App">
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;