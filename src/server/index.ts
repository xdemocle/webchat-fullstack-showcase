/**
 * Fork with changes from:
 * https://raw.githubusercontent.com/rakeden/typescript-socketio-react-redux-chat/master/server/src/index.ts
 */
import * as express from 'express'
import * as http from 'http'
import * as socketIo from 'socket.io'
import { SOCKET_PORT } from '../app/constants'

const isEnvProduction = process.env.NODE_ENV !== 'development'

const ChatState = {
  messages: [],
}

class Server {
  public app: any
  private server: any
  private port: number
  private io: any

  constructor() {
    this.port = SOCKET_PORT
    this.createApp()
    this.createServer()
    this.createSocket()
    this.listen()
  }

  private createApp(): void {
    this.app = express()

    if (isEnvProduction) {
      this.app.use('/', express.static(process.cwd() + '/dist'))
      console.log(
        '[LOG]',
        'Visit production website at ' + 'http://localhost:' + this.port
      )
    }
  }

  private createServer(): void {
    this.server = http.createServer(this.app)
  }

  private createSocket(): void {
    this.io = socketIo(this.server)
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log('[DEBUG] WebSocket listening *:%s', this.port)
    })

    this.io.on('connect', (socket: any) => {
      console.log('Connected client on port %s.', this.port)

      // During first connection, emit the whole history to the new client connected
      this.io.emit('GET_STATE_MESSAGES', ChatState.messages)

      socket.on('action', (action: any) => {
        switch (action.type) {
          case 'SEND_MESSAGE':
            // Emit to every clients connected
            this.io.emit('GET_MESSAGE', action.payload)

            // Save in temporary store of socket server instance
            ChatState.messages.push(action.payload)
        }
      })

      socket.on('disconnect', () => {
        console.log('Client disconnected')
      })
    })
  }
}

export default new Server()
