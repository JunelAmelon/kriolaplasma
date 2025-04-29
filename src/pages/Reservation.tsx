import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, ArrowRight, Star, Shield, Award } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const Reservation = () => {
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
            <Calendar size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Réservation en ligne
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Votre Rendez-vous
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              en Quelques Clics
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Réservez votre soin en toute simplicité. Notre équipe d'experts vous accueillera pour une expérience sur-mesure.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center gap-8 mt-8 mb-16"
          >
            {[
              { icon: Star, text: "4.9/5 - 150+ avis" },
              { icon: Shield, text: "Paiement sécurisé" },
              { icon: Award, text: "Expert certifié" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <badge.icon size={20} className="text-primary" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Services List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                Nos Prestations
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Soin Anti-Âge Global", duration: "60 min", price: "280€" },
                  { name: "Traitement Alopécie", duration: "45 min", price: "210€" },
                  { name: "Lifting Regard Express", duration: "25 min", price: "225€" },
                  { name: "Soin Visage Anti-Acné", duration: "40 min", price: "145€" }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{service.name}</h4>
                      <span className="text-primary font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                      <Clock size={14} className="text-primary" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark p-6 rounded-2xl text-white">
              <h3 className="text-lg font-semibold mb-4">🎁 Offre Spéciale</h3>
              <p className="text-white/90 mb-4">
                -15% sur votre premier soin + diagnostic personnalisé offert
              </p>
              <p className="text-sm text-white/80">
                *Offre valable pour toute première réservation
              </p>
            </div>
          </motion.div>

          {/* Center Column - Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <InlineWidget
              url="https://calendly.com/junelamelon92"
              styles={{
                height: '700px',
                width: '100%',
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Section - Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <Clock size={24} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Horaires d'ouverture</h3>
            <p className="text-gray-600">
              Lun-Ven: 9h-19h<br />
              Sam: 10h-18h<br />
              Dim: Fermé
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <Phone size={24} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Contact direct</h3>
            <p className="text-gray-600">
              Tél: 01 23 45 67 89<br />
              Email: contact@kriola-plasma.com
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <Shield size={24} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Politique d'annulation</h3>
            <p className="text-gray-600">
              Annulation gratuite jusqu'à 24h avant le rendez-vous
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;