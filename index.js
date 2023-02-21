const express = require('express');
const routerApi = require('./routes/index')


const app = express()
const port = 3001

routerApi(app)

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})

app.get('/', (req, res) => {
  res.send("Hola bella")
})

