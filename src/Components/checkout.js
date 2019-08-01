import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Checkout extends Component {
    onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
      }
     
      render() {
        return (
          <StripeCheckout
            token={this.onToken}
            stripeKey="my_PUBLISHABLE_stripekey"
          />
        )
      }
}

export default Checkout