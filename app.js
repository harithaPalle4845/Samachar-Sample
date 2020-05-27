const express = require('express')
const bodyParser = require('body-parser')
const { init } = require('./config/db')
const routes = require('./routes/user.route')

const app = express()
app.use(bodyParser.json())
app.use(routes)

init().then(() => {
  console.log('starting server on port 3000')
  app.listen(3000)
})
