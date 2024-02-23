"use client"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { axiosPublic } from '../Hooks/useAxiosSecure';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const CheckoutForm = () => {
  const [secret, setSecret] = useState("")
  const {user} = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const donation = 10;
  

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios.post("http://localhost:5000/payment-intened", { donation: donation })
      .then((res) => res.json())
      .then((data) => setSecret(data.secret));      
      
  }, [axiosPublic,donation]);
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
 
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    // confirm card payment 
    const { paymentIntent,error:confirmError } = await stripe.confirmCardPayment(
      '{secret}',
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      }, 
    );
    if (confirmError.type === "card_error" || confirmError.type === "validation_error") {
      setMessage(confirmError.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>

    </div>
  );
};

export default CheckoutForm;