require('dotenv').config()
const express = require('express')
// import ('dotenv').config();
// import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Samrathdeepcom')
})

app.get('/youtube', (req, res) => {
  res.send('<h1>Please Login</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})