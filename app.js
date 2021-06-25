const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({reply: 'It is working!'})
})

app.listen(PORT, () => {
  console.log(`Server started at \x1b[36m%s\x1b[0m`, `http://localhost:${PORT}`)
})