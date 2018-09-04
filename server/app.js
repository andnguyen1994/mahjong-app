const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('hello world')
})

server = app.listen(8080)

const io = require('socket.io')(server)

io.on('connection', socket => {
  console.log('new user connected')

  console.log(socket.id)
  // socket.username = 'anonymous'

  // socket.on('change_username', data => {
  //   socket.username = data.username
  //   console.log(data.username)
  //   socket.emit('test', {
  //     username: socket.username
  //   })
  // })
})
