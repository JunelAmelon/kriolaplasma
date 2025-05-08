import { motion } from 'framer-motion';
import { FileText, Shield, Info, AlertCircle, CheckCircle } from 'lucide-react';

const CGU = () => {
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
            <Shield size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Conditions d'utilisation
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Conditions Générales
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              d'Utilisation
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Veuillez lire attentivement les conditions suivantes avant d'utiliser nos services
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
            {/* Préambule */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Info className="text-primary" size={24} />
                Préambule
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Les présentes conditions générales d'utilisation (ci-après dénommées "CGU") régissent l'utilisation du site web 
                  Kriola Plasma (ci-après dénommé "le Site") accessible à l'adresse www.kriola-plasma.com, ainsi que les services 
                  qui y sont proposés.
                </p>
                <p>
                  En accédant au Site et en utilisant nos services, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas 
                  ces conditions, veuillez ne pas utiliser notre Site.
                </p>
                <p>
                  Kriola Plasma se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès 
                  leur publication sur le Site. Il vous appartient de consulter régulièrement les CGU en vigueur.
                </p>
              </div>
            </div>

            {/* Services proposés */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle className="text-primary" size={24} />
                Services proposés
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Kriola Plasma propose des services de soins esthétiques et de bien-être utilisant la technologie du plasma froid russe. 
                  Ces services comprennent notamment :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Des soins anti-âge pour le visage et le corps</li>
                  <li>Des traitements capillaires</li>
                  <li>Des soins anti-acné</li>
                  <li>Des soins post-grossesse</li>
                  <li>La vente de produits cosmétiques</li>
                </ul>
                <p>
                  Les services sont fournis sur rendez-vous, qui peuvent être pris via notre plateforme de réservation en ligne.
                </p>
              </div>
            </div>

            {/* Conditions de réservation et d'annulation */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                Conditions de réservation et d'annulation
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  <strong>Réservation :</strong> Toute réservation effectuée sur notre Site est considérée comme ferme et définitive 
                  après confirmation par email et/ou SMS.
                </p>
                <p>
                  <strong>Paiement :</strong> Le paiement des services peut être effectué en ligne lors de la réservation ou sur place 
                  le jour du rendez-vous. Les tarifs indiqués sur le Site sont en euros TTC.
                </p>
                <p>
                  <strong>Annulation :</strong> Toute annulation doit être effectuée au moins 24 heures avant l'heure du rendez-vous. 
                  En cas d'annulation tardive ou de non-présentation, le montant total de la prestation pourra être exigé.
                </p>
                <p>
                  <strong>Report :</strong> Les demandes de report de rendez-vous sont soumises aux mêmes conditions que les annulations.
                </p>
              </div>
            </div>

            {/* Conditions d'achat et de livraison */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                Conditions d'achat et de livraison
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  <strong>Commande :</strong> Toute commande passée sur notre Site est soumise aux présentes CGU. La commande n'est 
                  définitive qu'après confirmation du paiement.
                </p>
                <p>
                  <strong>Prix :</strong> Les prix des produits sont indiqués en euros TTC. Kriola Plasma se réserve le droit de 
                  modifier ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment 
                  de la validation de la commande.
                </p>
                <p>
                  <strong>Livraison :</strong> Les délais de livraison sont donnés à titre indicatif. Les frais de livraison sont 
                  à la charge du client et sont indiqués avant la validation de la commande.
                </p>
                <p>
                  <strong>Droit de rétractation :</strong> Conformément à la législation en vigueur, vous disposez d'un délai de 
                  14 jours à compter de la réception du produit pour exercer votre droit de rétractation, sans avoir à justifier 
                  de motifs ni à payer de pénalités.
                </p>
              </div>
            </div>

            {/* Responsabilités et garanties */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertCircle className="text-primary" size={24} />
                Responsabilités et garanties
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Kriola Plasma s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations 
                  diffusées sur le Site. Toutefois, Kriola Plasma ne peut garantir l'exactitude, la précision ou l'exhaustivité 
                  des informations mises à disposition sur le Site.
                </p>
                <p>
                  Kriola Plasma décline toute responsabilité :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pour toute interruption du Site</li>
                  <li>Pour toute survenance de bugs</li>
                  <li>Pour toute inexactitude ou omission portant sur des informations disponibles sur le Site</li>
                  <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le Site</li>
                </ul>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="text-primary" size={24} />
                Propriété intellectuelle
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  L'ensemble des éléments constituant le Site (textes, graphismes, logiciels, photographies, images, vidéos, sons, 
                  plans, logos, marques, etc.) ainsi que le Site lui-même, sont protégés par les lois relatives à la propriété 
                  intellectuelle.
                </p>
                <p>
                  Ces éléments sont la propriété exclusive de Kriola Plasma. Toute reproduction, représentation, utilisation ou 
                  adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, sans l'accord préalable et écrit 
                  de Kriola Plasma, est strictement interdite.
                </p>
              </div>
            </div>

            {/* Protection des données personnelles */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="text-primary" size={24} />
                Protection des données personnelles
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Kriola Plasma s'engage à respecter la confidentialité des données personnelles communiquées par les utilisateurs 
                  du Site et à les traiter dans le respect du Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p>
                  Les informations que nous collectons sont nécessaires au traitement de votre demande et sont destinées aux services 
                  concernés de notre société. Elles peuvent être transmises à nos partenaires chargés de l'exécution, du traitement, 
                  de la gestion et du paiement des commandes.
                </p>
                <p>
                  Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression 
                  et d'opposition aux informations qui vous concernent. Vous pouvez exercer ce droit en nous écrivant à l'adresse 
                  suivante : dpo@kriola-plasma.com.
                </p>
              </div>
            </div>

            {/* Loi applicable et juridiction compétente */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                Loi applicable et juridiction compétente
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Les présentes CGU sont régies par le droit français.
                </p>
                <p>
                  En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut d'accord amiable, 
                  les tribunaux français seront seuls compétents.
                </p>
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

export default CGU;
