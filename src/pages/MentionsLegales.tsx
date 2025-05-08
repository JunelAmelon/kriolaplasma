import { motion } from 'framer-motion';
import { FileText, Shield, Building, Mail, Phone } from 'lucide-react';

const MentionsLegales = () => {
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
            <FileText size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Informations légales
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Mentions Légales
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Informations légales concernant notre site web et notre entreprise
          </motion.p>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="space-y-10">
            {/* Éditeur du site */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Building className="text-primary" size={24} />
                Éditeur du site
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-2">
                <p><strong>Raison sociale :</strong> Kriola Plasma</p>
                <p><strong>Forme juridique :</strong> SARL</p>
                <p><strong>Capital social :</strong> 10 000€</p>
                <p><strong>SIRET :</strong> 123 456 789 00012</p>
                <p><strong>Adresse :</strong> 123 Avenue des Soins, 75001 Paris, France</p>
                <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
                <p><strong>Email :</strong> contact@kriola-plasma.com</p>
                <p><strong>Directeur de la publication :</strong> Kriola Plasma</p>
              </div>
            </div>

            {/* Hébergeur */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="text-primary" size={24} />
                Hébergement
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-2">
                <p><strong>Hébergeur :</strong> OVH SAS</p>
                <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                <p><strong>Téléphone :</strong> 09 72 10 10 07</p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                Propriété intellectuelle
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  L'ensemble du contenu du site Kriola Plasma (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur. 
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                  quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Kriola Plasma.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon 
                  et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </div>
            </div>

            {/* Données personnelles */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="text-primary" size={24} />
                Protection des données personnelles
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
                  de rectification, d'effacement, de limitation, de portabilité et d'opposition aux données vous concernant.
                </p>
                <p>
                  Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter 
                  notre Délégué à la Protection des Données à l'adresse suivante : dpo@kriola-plasma.com.
                </p>
                <p>
                  Pour plus d'informations sur la façon dont nous traitons vos données, veuillez consulter notre 
                  <a href="/cgu" className="text-primary hover:underline ml-1">politique de confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Crédits */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                Crédits
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-2">
                <p><strong>Conception et développement :</strong> Kriola Plasma</p>
                <p><strong>Photographies :</strong> Freepik, Unsplash, Pexels</p>
                <p><strong>Icônes :</strong> Lucide Icons</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Mail className="text-primary" size={24} />
                Contact
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-2">
                <p>
                  Pour toute question concernant le site ou nos services, vous pouvez nous contacter :
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Phone size={16} className="text-primary" />
                  <span>01 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <span>contact@kriola-plasma.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dernière mise à jour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-gray-500 text-sm"
        >
          Dernière mise à jour : 8 mai 2025
        </motion.div>
      </div>
    </div>
  );
};

export default MentionsLegales;
