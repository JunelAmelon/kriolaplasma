import { PaymentService } from './ApiService';

export interface PaymentIntentResponse {
  clientSecret: string;
  paymentIntentId: string;
  amount: number;
  status: string;
}

export interface PaymentStatusResponse {
  status: string;
  amount: number;
  currency: string;
  payment_method: string;
}

class StripeService {
  /**
   * Create a payment intent for an order
   * @param orderId - The ID of the order to create a payment intent for
   * @param metadata - Additional metadata for the payment
   * @returns Promise with the payment intent details
   */
  async createPaymentIntent(orderId: number, metadata: Record<string, unknown> = {}): Promise<PaymentIntentResponse> {
    try {
      // Utiliser le PaymentService pour créer l'intention de paiement
      const response = await PaymentService.createStripeIntent({
        order_id: orderId,
        metadata
      });
      // Conversion sécurisée du type de la réponse
      return response as unknown as PaymentIntentResponse;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw error;
    }
  }

  /**
   * Get the status of a payment intent
   * @param paymentIntentId - The ID of the payment intent to check
   * @returns Promise with the payment status
   */
  async getPaymentStatus(paymentIntentId: string): Promise<PaymentStatusResponse> {
    try {
      // Utiliser le PaymentService pour vérifier le statut du paiement
      const response = await PaymentService.getStripePaymentStatus(paymentIntentId);
      // Conversion sécurisée du type de la réponse
      return response as unknown as PaymentStatusResponse;
    } catch (error) {
      console.error('Error getting payment status:', error);
      throw error;
    }
  }
}

export const stripeService = new StripeService();
