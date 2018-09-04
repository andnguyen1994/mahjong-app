import opneSocket from 'socket.io-client'

const socket = opneSocket('http://192.168.0.12:8080')

export const test = () => {
  socket.on('test', message => console.log(message.username))
  socket.emit('change_username', { username: 'it works!' })
}
