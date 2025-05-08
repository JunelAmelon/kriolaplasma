import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    description: string;
  };
  index: number;
  showAddToCart?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, index, showAddToCart = true }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {showAddToCart ? (
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-4 left-4 right-4 bg-white text-gray-900 py-2 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2"
          >
            Ajouter au panier
            <ShoppingCart size={16} />
          </button>
        ) : (
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-4 left-4 right-4 bg-white text-gray-900 py-2 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2"
          >
            Commander
            <ArrowRight size={16} />
          </button>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold">{product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-primary fill-primary" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
