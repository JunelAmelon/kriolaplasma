import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Package, Truck, Shield } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import Cart from '../components/Cart';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: "Sérum Anti-âge Premium",
    price: "89€",
    rating: 5,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80",
    description: "Formule avancée enrichie en peptides et acide hyaluronique"
  },
  {
    id: 2,
    name: "Crème Régénérante Nuit",
    price: "75€",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80",
    description: "Réparation intense pendant votre sommeil"
  },
  {
    id: 3,
    name: "Huile Capillaire Fortifiante",
    price: "65€",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80",
    description: "Stimule la croissance et renforce les cheveux"
  },
  {
    id: 4,
    name: "Masque Hydratant Intense",
    price: "45€",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&q=80",
    description: "Hydratation profonde et éclat immédiat"
  }
];

const Boutique = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCartStore();
  
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
            <ShoppingBag size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Boutique Exclusive
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Produits Professionnels
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Pour Votre Routine
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Une sélection exclusive de produits haute performance pour prolonger les bienfaits de vos soins à domicile.
          </motion.p>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Package,
              title: "Livraison Gratuite",
              description: "Pour toute commande supérieure à 100€"
            },
            {
              icon: Truck,
              title: "Expédition Rapide",
              description: "Livraison sous 24-48h"
            },
            {
              icon: Shield,
              title: "Garantie Satisfaction",
              description: "30 jours pour changer d'avis"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <feature.icon size={24} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
      
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-10"
      >
        <ShoppingBag size={24} />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
            {getTotalItems()}
          </span>
        )}
      </button>
      
      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Boutique;