import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: props.total
    }
  }

    onToken = (token) => {
      let { amount } = this.state
      amount *= 100
      token.card = void 0
      axios.post('/api/payment', { token, amount: this.state.amount }).then(res => {
        console.log(res)
        alert(`Congratulations you wasted ${amount}!`)
      })
      }
     
      render() {
        return (
          <StripeCheckout
            token={this.onToken}
            stripeKey= {process.env.REACT_APP_PUBLISHABLE_KEY}
            amount={this.state.amount * 100}
          />
        )
      }
}

export default Checkout