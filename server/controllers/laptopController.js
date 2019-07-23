module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.getAll_laptops().then(laptops => res.status(200).send(laptops))
        .catch(err => {
            res.status(500).send('something went wrong')
            console.log(err)
        })
    },

    search: (req, res) => {
        console.log('hit search', req.query)
        const db = req.app.get('db')

        // db.{[reqArray]}rs
        
    }
}