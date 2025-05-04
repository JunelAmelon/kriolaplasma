
import { motion } from 'framer-motion';
import { Smartphone, Star, Shield, Zap, Calendar, Bell } from 'lucide-react';

const WebApp = () => {
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
            <Smartphone size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Application Mobile
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
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
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Gérez vos rendez-vous, suivez vos traitements et restez connecté avec votre programme de soins personnalisé.
          </motion.p>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="flex flex-wrap justify-center gap-6 mt-8"
>
  {/* Bouton App Store */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="group"
  >
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center w-40 border border-gray-200 group-hover:border-gray-300">
      <div className="  p-3 rounded-lg mb-2 group-hover:bg-gray-800 transition-colors duration-300">
        <img
          src="https://cdn-icons-png.freepik.com/256/5977/5977575.png"
          alt="App Store"
          className="h-8 w-8"
        />
      </div>
      <span className="text-sm font-semibold text-gray-700">Download on the</span>
      <span className="text-lg font-bold text-gray-900">App Store</span>
    </div>
  </a>

  {/* Bouton Google Play */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="group"
  >
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center w-40 border border-gray-200 group-hover:border-gray-300">
      <div className="  p-3 rounded-lg mb-2 group-hover:bg-gray-800 transition-colors duration-300">
        <img
          src="https://cdn-icons-png.freepik.com/256/732/732208.png"
          alt="Google Play"
          className="h-8 w-8"
        />
      </div>
      <span className="text-sm font-semibold text-gray-700">Get it on</span>
      <span className="text-lg font-bold text-gray-900">Google Play</span>
    </div>
  </a>
</motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Calendar,
              title: "Gestion des Rendez-vous",
              description: "Prenez et gérez vos rendez-vous en quelques clics"
            },
            {
              icon: Bell,
              title: "Rappels Personnalisés",
              description: "Recevez des notifications pour vos soins et rendez-vous"
            },
            {
              icon: Star,
              title: "Suivi des Progrès",
              description: "Visualisez l'évolution de vos traitements"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <feature.icon size={24} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* App Preview */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-800 shadow-xl"
          >
            <div className="absolute top-0 w-[148px] h-[18px] bg-gray-800 rounded-b-2xl left-1/2 -translate-x-1/2" />
            <div className="h-full w-full rounded-[2.3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
                alt="Kriola Plasma App"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-1/4 -left-4 bg-white p-4 rounded-2xl shadow-xl"
          >
            <Shield className="text-primary mb-2" size={20} />
            <p className="text-sm font-medium">Données Sécurisées</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute top-1/2 -right-4 bg-white p-4 rounded-2xl shadow-xl"
          >
            <Zap className="text-primary mb-2" size={20} />
            <p className="text-sm font-medium">Interface Rapide</p>
          </motion.div>
        </div>
    
        {/* Section contextuelle accès multiplateforme */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-gray-700 text-center mb-4 text-base max-w-xl">
            Notre solution est disponible sur mobile (<b>App Store</b>, <b>Google Play</b>) <b>ET</b> sur le web.<br />
            Cliquez sur le bouton ci-dessous pour accéder à la version web directement depuis votre navigateur !
          </p>
          <a
            href="https://app.kriolaplasma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 mb-4 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary-dark transition-colors text-sm"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 17h8"/><path d="M12 13v4"/></svg>
            Accéder à la version web
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default WebApp;