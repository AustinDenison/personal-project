require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const initSession = require('./middleware/initSession')
const uc = require('./controllers/userController')
const lc = require('./controllers/laptopController')
const authCheck = require('./middleware/authCheck');
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

const app = express()

app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: true,
        resave: false
    })
)

app.use(initSession)
// app.use()

app.post('/api/login', uc.login)
app.post('/api/signup', uc.signup)
app.delete('/api/logout', uc.logout)

app.get('/api/laptops', lc.getAll)
app.post('/api/laptops', lc.addLaptop)
app.delete('/api/laptops', lc.deleteItem)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => {
        console.log(`server is running on ${SERVER_PORT}`)
    })
})