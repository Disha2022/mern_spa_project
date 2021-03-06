

// setting stripe payment method
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'; //consider getting a key
import { useEffect, useState } from 'react';

const stripeKey = process.env.STRIPE_PK || "pk_test_TYooMQauvdEDq54NiTphI7jx"

//setup payment method
const stripePromise = loadStripe(stripeKey);
const serverUrl = process.env.STRIPE_PK ? 'https://mern-workout-tracker.herokuapp.com' : 'http://localhost:3001';
export default function Donate() {
  const [secret, setSecret] = useState(false);
  useEffect(() => {
    fetch(serverUrl + "/secret").then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      setSecret(responseJson.client_secret)
      return responseJson.client_secret;
      // Call stripe.confirmCardPayment() with the client secret.
    });
  }, [])

  const options = {
    // passing the client secret obtained from the server
    clientSecret: secret,
  };

  return (
    <>
      {secret && (
        <Elements stripe={stripePromise} options={options}>
          <Form></Form>
        </Elements>
      )}
    </>

  )
}

function Form() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Pay</button>
    </form>
  )
}
