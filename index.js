require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gitHub', (req,res)=>{
  res.send('This is Git Hub')
 })

app.get('/login', (req,res) => {
  res.send('<h1>Login Here</h1>')
})
app.get('/register',(req,res)=>{
  res.send('<h2>Register Here</h2>')
})
app.listen(port , () => {
  console.log(`Example app listening on port ${port}`)
})