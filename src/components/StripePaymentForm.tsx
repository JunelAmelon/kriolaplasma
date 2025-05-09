import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { stripeService } from '../services/StripeService';

interface StripePaymentFormProps {
  orderId: number;
  amount: number;
  onPaymentSuccess: (paymentIntentId: string) => void;
  onPaymentError: (error: string) => void;
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

const StripePaymentForm: React.FC<StripePaymentFormProps> = ({ 
  orderId, 
  amount, 
  onPaymentSuccess, 
  onPaymentError 
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [clientSecret, setClientSecret] = useState<string>('');

  useEffect(() => {
    // Create a payment intent when the component mounts
    const createIntent = async () => {
      try {
        const { clientSecret } = await stripeService.createPaymentIntent(orderId);
        setClientSecret(clientSecret);
      } catch (err: any) {
        setError(err.message || 'Une erreur est survenue lors de la préparation du paiement.');
        onPaymentError(err.message || 'Une erreur est survenue lors de la préparation du paiement.');
      }
    };

    createIntent();
  }, [orderId, onPaymentError]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return;
    }

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setProcessing(false);
      setError('Erreur lors du chargement du formulaire de carte. Veuillez réessayer.');
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            // Vous pouvez ajouter des détails de facturation ici si nécessaire
          }
        }
      });

      if (error) {
        setError(error.message || 'Une erreur est survenue lors du paiement.');
        onPaymentError(error.message || 'Une erreur est survenue lors du paiement.');
      } else if (paymentIntent.status === 'succeeded') {
        onPaymentSuccess(paymentIntent.id);
      } else {
        setError(`Le paiement est ${paymentIntent.status}. Veuillez réessayer.`);
        onPaymentError(`Le paiement est ${paymentIntent.status}. Veuillez réessayer.`);
      }
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors du paiement.');
      onPaymentError(err.message || 'Une erreur est survenue lors du paiement.');
    }

    setProcessing(false);
  };

  return (
    <div className="stripe-payment-form">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Détails de paiement</h3>
          <div className="p-4 border border-gray-300 rounded-md bg-white">
            <CardElement options={CARD_ELEMENT_OPTIONS} />
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || processing || !clientSecret}
          className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {processing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Traitement en cours...
            </span>
          ) : (
            `Payer ${amount.toFixed(2)} €`
          )}
        </button>
      </form>
    </div>
  );
};

export default StripePaymentForm;
