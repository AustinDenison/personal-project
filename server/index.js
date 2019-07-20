require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

const app = express()

app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: false,
        resave: false
    })
)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => {
        console.log(`server is running on ${SERVER_PORT}`)
    })
})