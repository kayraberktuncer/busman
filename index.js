const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, './board/build')))
app.get('/board', function (request, response) {
  response.sendFile(path.resolve(__dirname, './board', 'build', 'index.html'))
})

app.listen(5000, () => {
  console.log('running on 5000')
})
