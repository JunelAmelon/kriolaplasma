import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  priceValue: number; // Prix numérique pour les calculs
};

type CartStore = {
  items: CartItem[];
  addItem: (product: any) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

// Fonction pour extraire la valeur numérique du prix (ex: "89€" -> 89)
const extractPriceValue = (priceString: string): number => {
  const numericValue = parseFloat(priceString.replace(/[^0-9.,]/g, '').replace(',', '.'));
  return isNaN(numericValue) ? 0 : numericValue;
};

export const useCartStore = create<CartStore>(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const priceValue = extractPriceValue(product.price);
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          
          if (existingItem) {
            // Si l'article existe déjà, augmenter la quantité
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            };
          } else {
            // Sinon, ajouter un nouvel article
            return {
              items: [
                ...state.items,
                {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  quantity: 1,
                  priceValue
                }
              ]
            };
          }
        });
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        }));
      },
      
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map(item =>
            item.id === id
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          )
        }));
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.priceValue * item.quantity), 0);
      }
    }),
    {
      name: 'kriola-cart-storage',
    }
  )
);
