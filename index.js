/*
const express = require('express')
// import { Express } from 'express' // the above line do similar work as this line just different styling
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (request, response)=>{
    response.send("Ali Shair");
})

app.get('/login', (request, response)=>{ // after starting the code if we change the file it should run agian for proper working
    response.send("<h1>Please login at alishair.com</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // after console.log it is continuousally listening it will not terminate
})

// the whole code is a server that is continuously listening on '/' and '/twitter'
*/
require('dotenv').config()
const express = require('express')
// import { Express } from 'express' // the above line do similar work as this line just different styling
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (request, response)=>{
    response.send("Ali Shair");
})

app.get('/login', (request, response)=>{ // after starting the code if we change the file it should run agian for proper working
    response.send("<h1>Please login at alishair.com</h1>");
})

app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`) // after console.log it is continuousally listening it will not terminate
  console.log(`Example app listening on port ${process.env.PORT}`) // after console.log it is continuousally listening it will not terminate
})

// the whole code is a server that is continuously listening on '/' and '/twitter'