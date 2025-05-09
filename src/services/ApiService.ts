/**
 * Service pour communiquer avec l'API backend
 */

// URL de base de l'API depuis les variables d'environnement
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

/**
 * Service API principal pour effectuer des requêtes HTTP
 */
export class ApiService {
  /**
   * Effectue une requête GET
   * @param endpoint - Endpoint de l'API
   * @param options - Options de la requête
   * @returns Promise avec les données de la réponse
   */
  static async get(endpoint: string, options: RequestInit = {}) {
    return ApiService.request(endpoint, { ...options, method: 'GET' });
  }

  /**
   * Effectue une requête POST
   * @param endpoint - Endpoint de l'API
   * @param data - Données à envoyer
   * @param options - Options de la requête
   * @returns Promise avec les données de la réponse
   */
  static async post<T = Record<string, unknown>>(endpoint: string, data: Record<string, unknown>, options: RequestInit = {}): Promise<T> {
    return ApiService.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Effectue une requête PUT
   * @param endpoint - Endpoint de l'API
   * @param data - Données à envoyer
   * @param options - Options de la requête
   * @returns Promise avec les données de la réponse
   */
  static async put<T = Record<string, unknown>>(endpoint: string, data: Record<string, unknown>, options: RequestInit = {}): Promise<T> {
    return ApiService.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * Effectue une requête DELETE
   * @param endpoint - Endpoint de l'API
   * @param options - Options de la requête
   * @returns Promise avec les données de la réponse
   */
  static async delete(endpoint: string, options: RequestInit = {}) {
    return ApiService.request(endpoint, { ...options, method: 'DELETE' });
  }

  /**
   * Méthode privée pour effectuer des requêtes HTTP
   * @param endpoint - Endpoint de l'API
   * @param options - Options de la requête
   * @returns Promise avec les données de la réponse
   */
  private static async request(endpoint: string, options: RequestInit = {}) {
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
}

/**
 * Service pour les produits
 */
export const ProductService = {
  // Récupérer tous les produits
  getAll: async () => {
    return ApiService.get('/products');
  },
  
  // Récupérer un produit par son ID
  getById: async (id: number) => {
    return ApiService.get(`/products/${id}`);
  },
};

/**
 * Service pour les paiements
 */
export const PaymentService = {
  // Créer une intention de paiement Stripe
  createStripeIntent: async (paymentData: Record<string, unknown>) => {
    return ApiService.post('/payments/stripe/intent', paymentData);
  },
  
  // Vérifier le statut d'un paiement Stripe
  getStripePaymentStatus: async (paymentIntentId: string) => {
    return ApiService.post('/payments/stripe/status', { payment_intent_id: paymentIntentId });
  },
  
  // Créer un paiement PayPal
  createPayPalPayment: async (paymentData: Record<string, unknown>) => {
    return ApiService.post('/payments/paypal/create', paymentData);
  },
  
  // Exécuter un paiement PayPal après approbation
  executePayPalPayment: async (paymentData: Record<string, unknown>) => {
    return ApiService.post('/payments/paypal/execute', paymentData);
  },
  
  // Récupérer les détails d'une commande
  getOrder: async (orderId: number) => {
    return ApiService.get(`/payments/orders/${orderId}`);
  },
};
