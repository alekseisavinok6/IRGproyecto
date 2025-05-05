const express = require('express')
const app = express()
const PORT = 3000

app.get( '/' , (req, res) => {
    res.send('Eliga entre Cliente o Restaurante')
})

app.listen ( PORT, () => {
    console.log('App corriendo');
})