const bcrypt = require('bcrypt')
const saltRounds = 12

module.exports = {
    async login(req, res) {
        let {username, email, password} = req.body
        const db = req.app.get('db')

        let [existingUser] = await db.get_username_cart(username, email)
        if (!existingUser) return res.status(401).send('username not found')
        let userCart = await db.get_user_cart(existingUser.cart_id)
        let result = await bcrypt.compare(password, existingUser.hash)
        if (result) {
            req.session.user = {
                username: existingUser.username,
                id: existingUser.user_id,
                cart_id: existingUser.cart_id,
                userCart,
                loggedIn: true
            }
            res.send(req.session.user)
        } else res.status(401).send('Username or Password is incorrect')
    },
    async signup(req, res) {
        let {username, email, password} = req.body
        const db = req.app.get('db')

        let [existingUser] = await db.get_username(username, email)
        if (existingUser) return res.status(401).send('Username is taken')
        let salt = await bcrypt.genSalt(saltRounds)
        let hash = await bcrypt.hash(password, salt)
        let [user] = await db.create_user([username, email, hash ])
        let [cart] = await db.create_cart(user.user_id)
        req.session.user = {username: user.username, id: user.user_id, cart_id: cart.cart_id, loggedIn: true}
        res.send(req.session.user)
    },
    logout(req, res) {
        req.session.destroy()
        res.sendStatus(200)
    },
    async editUser(req, res) {
        const db = req.app.get('db')
        let {username, id} = req.body

        let editedUser = await db.edit_user(username, id)
        res.status(200).send(editedUser)
    }
}