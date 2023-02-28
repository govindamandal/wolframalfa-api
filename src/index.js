const express = require('express')
const app = express()
const port = 3000
const WolframAlphaAPI = require('wolfram-alpha-node');
const { APPID } = require('./config');
const waApi = WolframAlphaAPI(APPID);

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/mathsteps', async (req, res) => {
  const response = await waApi.getFull('5x^2 + 30x + 45 = 0');
  res.send(JSON.stringify(response));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})