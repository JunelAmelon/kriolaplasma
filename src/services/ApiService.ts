/**
 * Service pour communiquer avec l'API backend
 */

// URL de base de l'API depuis les variables d'environnement
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

/**
 * Fonction utilitaire pour effectuer des requu00eates API
 */
async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  console.log(`API Call: ${options.method || 'GET'} ${url}`);
  if (options.body) {
    console.log('Request Body:', JSON.parse(options.body as string));
  }
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  
  try {
    console.log('Sending request with config:', config);
    const response = await fetch(url, config);
    console.log(`Response status: ${response.status} ${response.statusText}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error response:', errorData);
      throw new Error(errorData.message || 'Une erreur est survenue');
    }
    
    const data = await response.json();
    console.log('API response data:', data);
    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

/**
 * Service pour les produits
 */
export const ProductService = {
  // Ru00e9cupu00e9rer tous les produits
  getAll: async () => {
    return fetchApi('/products');
  },
  
  // Ru00e9cupu00e9rer un produit par son ID
  getById: async (id: number) => {
    return fetchApi(`/products/${id}`);
  },
};

/**
 * Service pour les paiements
 */
export const PaymentService = {
  // Cru00e9er une intention de paiement Stripe
  createStripeIntent: async (paymentData: any) => {
    return fetchApi('/payments/stripe/intent', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  },
  
  // Cru00e9er un paiement PayPal
  createPayPalPayment: async (paymentData: any) => {
    return fetchApi('/payments/paypal/create', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  },
  
  // Exu00e9cuter un paiement PayPal apru00e8s approbation
  executePayPalPayment: async (paymentData: any) => {
    return fetchApi('/payments/paypal/execute', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  },
  
  // Ru00e9cupu00e9rer les du00e9tails d'une commande
  getOrder: async (orderId: number) => {
    return fetchApi(`/payments/orders/${orderId}`);
  },
};
