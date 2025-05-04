import { motion } from 'framer-motion';
import { Smartphone, Star, Shield, Zap, Calendar, Bell, ArrowRight } from 'lucide-react';

const WebApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 pt-32 md:pt-40 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header - Titre conservé */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 mb-6 md:mb-8 shadow-sm"
          >
            <Smartphone size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary tracking-wider">
              APPLICATION MOBILE & WEB
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Votre Beauté
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Entre Vos Mains
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            Gérez vos rendez-vous, suivez vos traitements et restez connecté avec votre programme de soins personnalisé.
          </motion.p>
        </div>

        {/* Section App Preview - Optimisée mobile */}
        <div className="relative mb-16 md:mb-24">
          {/* Mockup mobile avec positionnement relatif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-[260px] md:w-[280px] h-[520px] md:h-[580px] bg-gray-900 rounded-[32px] md:rounded-[40px] p-1 shadow-2xl z-10"
          >
            <div className="absolute top-0 w-[100px] md:w-[120px] h-[20px] md:h-[24px] bg-gray-900 rounded-b-xl left-1/2 -translate-x-1/2 z-10" />
            <div className="relative h-full w-full rounded-[28px] md:rounded-[36px] overflow-hidden border-[10px] md:border-[12px] border-gray-900">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Kriola Plasma App"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
            </div>
          </motion.div>

          {/* Cartes flottantes - Position absolue modifiée pour mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-8 left-2 md:-left-6 md:bottom-auto md:top-1/4 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-100 z-20 w-[140px] md:w-auto"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1 md:p-2 bg-primary/10 rounded-lg">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <span className="text-xs md:text-sm font-medium">Données sécurisées</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -top-8 right-2 md:-right-6 md:top-1/2 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-100 z-20 w-[140px] md:w-auto"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1 md:p-2 bg-primary/10 rounded-lg">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <span className="text-xs md:text-sm font-medium">Interface rapide</span>
            </div>
          </motion.div>
        </div>

        {/* Features - Meilleure disposition mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            {
              icon: Calendar,
              title: "Gestion des rendez-vous",
              description: "Prenez et gérez vos rendez-vous en temps réel"
            },
            {
              icon: Bell,
              title: "Notifications intelligentes",
              description: "Rappels personnalisés pour vos soins"
            },
            {
              icon: Star,
              title: "Suivi de progression",
              description: "Visualisez l'évolution de vos résultats"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-primary/10 rounded-lg">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Boutons de téléchargement - Optimisé mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 md:mb-8 text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Disponible sur toutes les plateformes</h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Téléchargez l'application mobile ou accédez-y depuis votre navigateur
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12 w-full max-w-md mx-auto">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 min-w-[160px]"
            >
              <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3 border border-gray-200 hover:border-gray-300">
                <div className="p-1 rounded-md bg-gray-100 group-hover:bg-gray-200 transition-colors">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
                    alt="App Store"
                    className="h-6 w-6"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Télécharger sur</div>
                  <div className="font-semibold text-gray-900 text-sm">App Store</div>
                </div>
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 min-w-[160px]"
            >
              <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3 border border-gray-200 hover:border-gray-300">
                <div className="p-1 rounded-md bg-gray-100 group-hover:bg-gray-200 transition-colors">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732208.png"
                    alt="Google Play"
                    className="h-6 w-6"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Disponible sur</div>
                  <div className="font-semibold text-gray-900 text-sm">Google Play</div>
                </div>
              </div>
            </a>
          </div>

          <a
            href="https://app.kriolaplasma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-primary text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M8 17h8"/>
              <path d="M12 13v4"/>
            </svg>
            Accéder à la version web
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WebApp;