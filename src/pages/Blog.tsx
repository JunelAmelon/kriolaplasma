import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Les bienfaits du plasma froid pour la peau",
    excerpt: "Découvrez comment le plasma froid révolutionne les soins anti-âge et la régénération cutanée.",
    image: "https://images.unsplash.com/photo-1612908992737-6b0d8e919bd3?auto=format&fit=crop&q=80",
    author: "Dr. Sophie Martin",
    date: "15 Mars 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Traitement de l'alopécie : innovations 2024",
    excerpt: "Les dernières avancées dans le traitement de la perte de cheveux par plasma froid.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80",
    author: "Dr. Pierre Dubois",
    date: "12 Mars 2024",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "Blépharoplastie non chirurgicale",
    excerpt: "Comment rajeunir son regard sans chirurgie grâce au plasma froid.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
    author: "Dr. Marie Laurent",
    date: "10 Mars 2024",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Soins post-traitement : les essentiels",
    excerpt: "Guide complet pour optimiser les résultats de vos soins au plasma froid.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&q=80",
    author: "Dr. Julie Bernard",
    date: "8 Mars 2024",
    readTime: "4 min"
  }
];

const Blog = () => {
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
            <BookOpen size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Blog & Actualités
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Découvrez Nos
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Articles Experts
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Restez informé des dernières innovations en matière de soins esthétiques et découvrez nos conseils d'experts.
          </motion.p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-primary" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-primary" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  Lire la suite
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;