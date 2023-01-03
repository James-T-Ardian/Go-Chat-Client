const socket = new WebSocket('ws://localhost:8080/ws')

const connect = (messageHandler: (msg: MessageEvent<any>) => void, onOpenHandler: () => void) => {
  console.log('Attempting Connection...')

  socket.onopen = onOpenHandler

  socket.onmessage = messageHandler

  socket.onclose = (event: CloseEvent): void => {
    console.log('Socket Closed Connection: ', event)
  }

  socket.onerror = (error: Event): void => {
    console.log('Socket Error: ', error)
  }
}

const sendMessageWS = (msg: Message): void => {
  socket.send(JSON.stringify(msg))
}

export { connect, sendMessageWS }
