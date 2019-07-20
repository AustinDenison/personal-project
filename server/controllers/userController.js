const bcrypt = require('bcrypt')
const saltRounds = 12

module.exports = {
    async login(req, res) {
        let {username, hash} = req.body
        const db = req.app.get('db')

        let [existingUser] = await db.get_username(username)
        if (!existingUser) return res.status(401).send('username not found')
        let result = await bcrypt.compare(hash, existingUser.hash)
        if (result) {
            req.session.user = {
                username: existingUser.username,
                id: existingUser.user_id,
                loggedIn: true
            }
            res.send(req.session.user)
        } else res.status(401).send('Username or Password is incorrect')
    },
    async signup(req, res) {
        let {username, email, hash} = req.body
        const db = req.app.get('db')

        let [existingUser] = await db.get_username(username)
        if (existingUser) return res.status(401).send('Username is taken')
        let salt = await bcrypt.genSalt(saltRounds)
        let pass = await bcrypt.hash(hash, salt)
        let [user] = await db.create_user([username, pass ])
        req.session.user = {username: user.username, id: user.user_id, loggedIn: true}
        res.send(req.session.user)
    },
    logout(req, res){
        req.session.destroy()
        res.sendStatus(200)
    }
}