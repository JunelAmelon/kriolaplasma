import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCartStore } from '../store/cartStore';
import { CreditCard, ShoppingBag, CheckCircle, ArrowLeft, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Composants pour Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Composants pour PayPal
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// Remplacez par votre clé publique Stripe (à mettre dans un .env en production)
const stripePromise = loadStripe('pk_test_votreclépublique');

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const { getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  
  const stripe = useStripe();
  const elements = useElements();
  
  const handleStripeSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      toast.error('Le service de paiement Stripe n\'est pas disponible pour le moment. Veuillez réessayer plus tard.');
      return;
    }
    
    setIsProcessing(true);
    setPaymentError(null);
    
    // Dans un environnement réel, vous devriez appeler votre API backend ici
    // qui créerait une intention de paiement avec Stripe
    
    // Simulation d'un appel API
    try {
      // Afficher un toast de chargement
      const loadingToast = toast.loading('Traitement de votre paiement en cours...');
      
      // Simuler une requête réseau
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulation de paiement réussi
      setPaymentSuccess(true);
      clearCart();
      
      // Mettre à jour le toast de chargement avec un message de succès
      toast.update(loadingToast, { 
        render: 'Paiement réussi ! Merci pour votre commande.', 
        type: 'success', 
        isLoading: false,
        autoClose: 5000
      });
      
      // Redirection après 2 secondes
      setTimeout(() => {
        navigate('/boutique');
      }, 2000);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
      setPaymentError(errorMessage);
      toast.error(`Erreur de paiement: ${errorMessage}`);
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handlePayPalSuccess = async () => {
    setPaymentSuccess(true);
    clearCart();
    
    // Afficher un toast de succès
    toast.success('Paiement PayPal réussi ! Merci pour votre commande.', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    // Redirection après 2 secondes
    setTimeout(() => {
      navigate('/boutique');
    }, 2000);
  };
  
  if (paymentSuccess) {
    return (
      <div className="text-center py-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <CheckCircle size={64} className="text-green-500 mx-auto" />
        </motion.div>
        <h2 className="text-2xl font-bold mb-4">Paiement réussi !</h2>
        <p className="text-gray-600 mb-8">Merci pour votre commande. Un email de confirmation vous a été envoyé.</p>
        <Link 
          to="/boutique"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors"
        >
          <ArrowLeft size={16} />
          Retour à la boutique
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Méthode de paiement</h2>
        
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() => setPaymentMethod('stripe')}
            className={`flex-1 border rounded-xl p-4 flex items-center gap-3 ${paymentMethod === 'stripe' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
          >
            <CreditCard size={24} className={paymentMethod === 'stripe' ? 'text-primary' : 'text-gray-400'} />
            <div className="text-left">
              <div className={`font-medium ${paymentMethod === 'stripe' ? 'text-primary' : 'text-gray-700'}`}>Carte bancaire</div>
              <div className="text-xs text-gray-500">Visa, Mastercard, etc.</div>
            </div>
          </button>
          
          <button
            type="button"
            onClick={() => setPaymentMethod('paypal')}
            className={`flex-1 border rounded-xl p-4 flex items-center gap-3 ${paymentMethod === 'paypal' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={paymentMethod === 'paypal' ? 'text-[#003087]' : 'text-gray-400'}>
              <path d="M20.9 7.3C20.7 6.8 20.4 6.4 20 6C19.6 5.6 19.2 5.3 18.7 5.1C18.2 4.9 17.7 4.8 17.2 4.8H13.5C13.3 4.8 13.1 4.9 13 5.1C12.9 5.3 12.8 5.4 12.8 5.6L11.5 13.8C11.5 13.9 11.5 14 11.6 14.1C11.7 14.2 11.8 14.2 11.9 14.2H13.5L13.2 16.1C13.2 16.2 13.2 16.3 13.3 16.3C13.4 16.4 13.4 16.4 13.5 16.4H15.6C15.8 16.4 16 16.3 16.1 16.1C16.2 16 16.3 15.8 16.3 15.6L16.9 12.1H18.6C19.1 12.1 19.6 12 20.1 11.8C20.6 11.6 21 11.3 21.4 10.9C21.8 10.5 22.1 10.1 22.3 9.6C22.5 9.1 22.6 8.6 22.6 8.1C22.7 7.8 22.6 7.5 22.5 7.2C22.4 7 22.2 6.8 22 6.7" fill="currentColor"/>
              <path d="M9.5 6.2C9.3 5.7 9 5.3 8.6 4.9C8.2 4.5 7.8 4.2 7.3 4C6.8 3.8 6.3 3.7 5.8 3.7H2.1C1.9 3.7 1.7 3.8 1.6 4C1.5 4.2 1.4 4.3 1.4 4.5L0.1 12.7C0.1 12.8 0.1 12.9 0.2 13C0.3 13.1 0.4 13.1 0.5 13.1H2.1L1.8 15C1.8 15.1 1.8 15.2 1.9 15.2C2 15.3 2 15.3 2.1 15.3H4.2C4.4 15.3 4.6 15.2 4.7 15C4.8 14.9 4.9 14.7 4.9 14.5L5.5 11H7.2C7.7 11 8.2 10.9 8.7 10.7C9.2 10.5 9.6 10.2 10 9.8C10.4 9.4 10.7 9 10.9 8.5C11.1 8 11.2 7.5 11.2 7C11.2 6.7 11.1 6.4 11 6.1C10.8 6 10.6 5.8 10.4 5.7" fill="currentColor"/>
            </svg>
            <div className="text-left">
              <div className={`font-medium ${paymentMethod === 'paypal' ? 'text-[#003087]' : 'text-gray-700'}`}>PayPal</div>
              <div className="text-xs text-gray-500">Paiement sécurisé</div>
            </div>
          </button>
        </div>
        
        {paymentMethod === 'stripe' ? (
          <form onSubmit={handleStripeSubmit} className="space-y-6">
            <div className="border rounded-lg p-4">
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
            </div>
            
            {paymentError && (
              <div className="text-red-500 text-sm">{paymentError}</div>
            )}
            
            <button
              type="submit"
              disabled={!stripe || isProcessing}
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg text-center font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Traitement en cours...' : `Payer ${getTotalPrice().toFixed(2)}€`}
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <PayPalButtons
              createOrder={(_, actions) => {
                console.log('PayPal createOrder called');
                return actions.order.create({
                  intent: 'CAPTURE',
                  purchase_units: [
                    {
                      amount: {
                        value: getTotalPrice().toFixed(2),
                        currency_code: 'EUR'
                      },
                      description: 'Commande Kriola Plasma'
                    },
                  ],
                }).then(orderId => {
                  console.log('PayPal order created:', orderId);
                  return orderId;
                }).catch(err => {
                  console.error('PayPal createOrder error:', err);
                  throw err;
                });
              }}
              onApprove={(data, actions) => {
                console.log('PayPal onApprove called', data);
                // Cette fonction est appelée quand le paiement est approuvé
                return actions.order!.capture().then((details) => {
                  console.log('PayPal capture successful:', details);
                  handlePayPalSuccess();
                }).catch(err => {
                  console.error('PayPal capture error:', err);
                  throw err;
                });
              }}
              onError={(err) => {
                console.error('PayPal error:', err);
                
                // Afficher un toast d'erreur avec des détails
                let errorMessage = 'Une erreur est survenue lors du traitement du paiement PayPal.';
                
                // Essayer d'extraire un message d'erreur plus précis
                if (err && typeof err === 'object') {
                  const errorObj = err as unknown;
                  if ('message' in err) {
                    errorMessage = `Erreur PayPal: ${(errorObj as { message: string }).message}`;
                  } else if ('details' in err) {
                    errorMessage = `Erreur PayPal: ${JSON.stringify((errorObj as { details: unknown }).details)}`;
                  }
                }
                
                toast.error(errorMessage, {
                  position: 'top-center',
                  autoClose: 7000, // Reste plus longtemps pour les erreurs
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
              style={{ layout: 'vertical' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Checkout = () => {
  const { items, removeItem, getTotalItems, getTotalPrice } = useCartStore();
  const navigate = useNavigate();
  
  // Rediriger vers la boutique si le panier est vide
  React.useEffect(() => {
    if (items.length === 0) {
      navigate('/boutique');
    }
  }, [items, navigate]);
  
  if (items.length === 0) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-xl mb-8"
          >
            <CreditCard size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Paiement sécurisé
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Veuillez finaliser
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                votre commande
              </span>
            </span>
          </motion.h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <Elements stripe={stripePromise}>
                <PaymentForm />
              </Elements>
            </motion.div>
          </div>
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 sticky top-32"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <ShoppingBag size={20} className="text-primary" />
                <span>Récapitulatif</span>
                <span className="ml-auto bg-primary text-white text-xs px-2 py-1 rounded-full">
                  {getTotalItems()}
                </span>
              </h2>
              
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-3 pb-4 border-b">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                          aria-label="Supprimer l'article"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-sm text-gray-500">
                          {item.price} x {item.quantity}
                        </div>
                        <div className="font-semibold text-primary">
                          {(item.priceValue * item.quantity).toFixed(2)}€
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{getTotalPrice().toFixed(2)}€</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Livraison</span>
                  <span className="font-medium">Gratuite</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t">
                  <span>Total</span>
                  <span className="text-primary">{getTotalPrice().toFixed(2)}€</span>
                </div>
              </div>
              
              <div className="mt-6">
                {/* Vérifier si les articles proviennent d'une réservation ou de la boutique */}
                {items.some(item => item.name.includes('Rendez-vous') || item.name.includes('Traitement')) ? (
                  <Link 
                    to="/reservation"
                    className="flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-700 py-3 rounded-lg text-center font-medium transition-colors hover:bg-gray-50"
                  >
                    <ArrowLeft size={16} />
                    Retour à la page de réservation
                  </Link>
                ) : (
                  <Link 
                    to="/boutique"
                    className="flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-700 py-3 rounded-lg text-center font-medium transition-colors hover:bg-gray-50"
                  >
                    <ArrowLeft size={16} />
                    Retour à la boutique
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrapper pour fournir le contexte PayPal
const CheckoutWithPayPal = () => {
  // Utilisation de la clu00e9 client PayPal depuis les variables d'environnement
  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'AaLHBer1MhNnlb321T6NdSzV_ZU6obnVUhgyoiEGUHwpBhNaJLDnRr6nMMdiaOKy2gduSvv9iSpjOGKW';
  
  return (
    <PayPalScriptProvider options={{ clientId: paypalClientId, currency: "EUR" }}>
      <Checkout />
    </PayPalScriptProvider>
  );
};

export default CheckoutWithPayPal;
