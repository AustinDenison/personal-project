const stripe = require('stripe')(process.env.REACT_APP_SECRET_KEY)

module.exports = {
    pay:(req,res)=>{
        let {token:{id},amount} = req.body;
        amount *= 100
        stripe.charges.create(
            {
                amount:amount,
                currency:'usd',
                source:id,
                description:'Test Charge'
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log('Successful payment',charge)
                    return res.status(200).send(charge)
                }
            }
        )
    },
}