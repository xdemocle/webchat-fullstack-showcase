import { applyMiddleware } from 'redux'
import socketIO from 'socket.io-client'
import socketIoMiddleware from 'redux-socket.io-middleware'
import { SOCKET_ENDPOINT } from '../app/constants'

export const io = socketIO.connect(SOCKET_ENDPOINT)

export default applyMiddleware(socketIoMiddleware(io))
