import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Chargez Stripe une seule fois pour éviter des rechargements inutiles
const stripePromise = loadStripe('pk_test_51RMnpsQ8IBztqCOIBmaqhc2X1mtkUcGkp8iOxgH4WUGqfWzgjoi9lNofX9XktkA2pHzJMC6sszFhCZO2slWeIRyI00NKm8KXkF');

interface StripeProviderProps {
  children: React.ReactNode;
}

const StripeProvider: React.FC<StripeProviderProps> = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
};

export default StripeProvider;
