import * as express from 'express'
import * as http from 'http'
import * as socketIo from 'socket.io'

const isEnvProduction = process.env.NODE_ENV !== 'development'

class Server {
  public app: any
  private server: any
  private port: number
  private io: any

  constructor() {
    this.port = 8008
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

      socket.on('action', (action: any) => {
        switch (action.type) {
          case 'SEND_MESSAGE':
            this.io.emit('GET_MESSAGE', action.data)
        }
      })

      socket.on('disconnect', () => {
        console.log('Client disconnected')
      })
    })
  }
}

export default new Server()
