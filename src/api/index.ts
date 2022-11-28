const socket = new WebSocket("ws://localhost:8080/ws");

const connect = (messageHandler: (msg: MessageEvent<any>) => void, onOpenHandler:() => void) => {
  console.log("Attempting Connection...");

  socket.onopen = onOpenHandler;

  socket.onmessage = messageHandler;

  socket.onclose = (event: CloseEvent) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error: Event) => {
    console.log("Socket Error: ", error);
  };
};

const sendMsg = (msg: Message) => {
  socket.send(JSON.stringify(msg));
};

export { connect, sendMsg };