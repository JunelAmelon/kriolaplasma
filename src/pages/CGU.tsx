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
              Conditions Gu00e9nu00e9rales
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
            {/* Pru00e9ambule */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Info className="text-primary" size={24} />
                Pru00e9ambule
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Les pru00e9sentes conditions gu00e9nu00e9rales d'utilisation (ci-apru00e8s du00e9nommu00e9es "CGU") ru00e9gissent l'utilisation du site web 
                  Kriola Plasma (ci-apru00e8s du00e9nommu00e9 "le Site") accessible u00e0 l'adresse www.kriola-plasma.com, ainsi que les services 
                  qui y sont proposu00e9s.
                </p>
                <p>
                  En accu00e9dant au Site et en utilisant nos services, vous acceptez sans ru00e9serve les pru00e9sentes CGU. Si vous n'acceptez pas 
                  ces conditions, veuillez ne pas utiliser notre Site.
                </p>
                <p>
                  Kriola Plasma se ru00e9serve le droit de modifier les pru00e9sentes CGU u00e0 tout moment. Les modifications prennent effet du00e8s 
                  leur publication sur le Site. Il vous appartient de consulter ru00e9guliu00e8rement les CGU en vigueur.
                </p>
              </div>
            </div>

            {/* Services proposu00e9s */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle className="text-primary" size={24} />
                Services proposu00e9s
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Kriola Plasma propose des services de soins esthu00e9tiques et de bien-u00eatre utilisant la technologie du plasma froid russe. 
                  Ces services comprennent notamment :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Des soins anti-u00e2ge pour le visage et le corps</li>
                  <li>Des traitements capillaires</li>
                  <li>Des soins anti-acnu00e9</li>
                  <li>Des soins post-grossesse</li>
                  <li>La vente de produits cosmu00e9tiques</li>
                </ul>
                <p>
                  Les services sont fournis sur rendez-vous, qui peuvent u00eatre pris via notre plateforme de ru00e9servation en ligne.
                </p>
              </div>
            </div>

            {/* Conditions de ru00e9servation et d'annulation */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                Conditions de ru00e9servation et d'annulation
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  <strong>Ru00e9servation :</strong> Toute ru00e9servation effectuu00e9e sur notre Site est considu00e9ru00e9e comme ferme et du00e9finitive 
                  apru00e8s confirmation par email et/ou SMS.
                </p>
                <p>
                  <strong>Paiement :</strong> Le paiement des services peut u00eatre effectuu00e9 en ligne lors de la ru00e9servation ou sur place 
                  le jour du rendez-vous. Les tarifs indiquu00e9s sur le Site sont en euros TTC.
                </p>
                <p>
                  <strong>Annulation :</strong> Toute annulation doit u00eatre effectuu00e9e au moins 24 heures avant l'heure du rendez-vous. 
                  En cas d'annulation tardive ou de non-pru00e9sentation, le montant total de la prestation pourra u00eatre exigu00e9.
                </p>
                <p>
                  <strong>Report :</strong> Les demandes de report de rendez-vous sont soumises aux mu00eames conditions que les annulations.
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
                  <strong>Commande :</strong> Toute commande passu00e9e sur notre Site est soumise aux pru00e9sentes CGU. La commande n'est 
                  du00e9finitive qu'apru00e8s confirmation du paiement.
                </p>
                <p>
                  <strong>Prix :</strong> Les prix des produits sont indiquu00e9s en euros TTC. Kriola Plasma se ru00e9serve le droit de 
                  modifier ses prix u00e0 tout moment, mais les produits seront facturu00e9s sur la base des tarifs en vigueur au moment 
                  de la validation de la commande.
                </p>
                <p>
                  <strong>Livraison :</strong> Les du00e9lais de livraison sont donnu00e9s u00e0 titre indicatif. Les frais de livraison sont 
                  u00e0 la charge du client et sont indiquu00e9s avant la validation de la commande.
                </p>
                <p>
                  <strong>Droit de ru00e9tractation :</strong> Conformu00e9ment u00e0 la lu00e9gislation en vigueur, vous disposez d'un du00e9lai de 
                  14 jours u00e0 compter de la ru00e9ception du produit pour exercer votre droit de ru00e9tractation, sans avoir u00e0 justifier 
                  de motifs ni u00e0 payer de pu00e9nalitu00e9s.
                </p>
              </div>
            </div>

            {/* Responsabilitu00e9s et garanties */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertCircle className="text-primary" size={24} />
                Responsabilitu00e9s et garanties
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Kriola Plasma s'efforce d'assurer au mieux de ses possibilitu00e9s l'exactitude et la mise u00e0 jour des informations 
                  diffusu00e9es sur le Site. Toutefois, Kriola Plasma ne peut garantir l'exactitude, la pru00e9cision ou l'exhaustivitu00e9 
                  des informations mises u00e0 disposition sur le Site.
                </p>
                <p>
                  Kriola Plasma du00e9cline toute responsabilitu00e9 :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pour toute interruption du Site</li>
                  <li>Pour toute survenance de bugs</li>
                  <li>Pour toute inexactitude ou omission portant sur des informations disponibles sur le Site</li>
                  <li>Pour tous dommages ru00e9sultant d'une intrusion frauduleuse d'un tiers ayant entrau00eenu00e9 une modification des informations mises u00e0 disposition sur le Site</li>
                </ul>
              </div>
            </div>

            {/* Propriu00e9tu00e9 intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="text-primary" size={24} />
                Propriu00e9tu00e9 intellectuelle
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  L'ensemble des u00e9lu00e9ments constituant le Site (textes, graphismes, logiciels, photographies, images, vidu00e9os, sons, 
                  plans, logos, marques, etc.) ainsi que le Site lui-mu00eame, sont protu00e9gu00e9s par les lois relatives u00e0 la propriu00e9tu00e9 
                  intellectuelle.
                </p>
                <p>
                  Ces u00e9lu00e9ments sont la propriu00e9tu00e9 exclusive de Kriola Plasma. Toute reproduction, repru00e9sentation, utilisation ou 
                  adaptation, sous quelque forme que ce soit, de tout ou partie de ces u00e9lu00e9ments, sans l'accord pru00e9alable et u00e9crit 
                  de Kriola Plasma, est strictement interdite.
                </p>
              </div>
            </div>

            {/* Protection des donnu00e9es personnelles */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="text-primary" size={24} />
                Protection des donnu00e9es personnelles
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Kriola Plasma s'engage u00e0 respecter la confidentialitu00e9 des donnu00e9es personnelles communiquu00e9es par les utilisateurs 
                  du Site et u00e0 les traiter dans le respect du Ru00e8glement Gu00e9nu00e9ral sur la Protection des Donnu00e9es (RGPD).
                </p>
                <p>
                  Les informations que nous collectons sont nu00e9cessaires au traitement de votre demande et sont destinu00e9es aux services 
                  concernu00e9s de notre sociu00e9tu00e9. Elles peuvent u00eatre transmises u00e0 nos partenaires chargu00e9s de l'exu00e9cution, du traitement, 
                  de la gestion et du paiement des commandes.
                </p>
                <p>
                  Conformu00e9ment u00e0 la ru00e9glementation en vigueur, vous disposez d'un droit d'accu00e8s, de rectification, de suppression 
                  et d'opposition aux informations qui vous concernent. Vous pouvez exercer ce droit en nous u00e9crivant u00e0 l'adresse 
                  suivante : dpo@kriola-plasma.com.
                </p>
              </div>
            </div>

            {/* Loi applicable et juridiction compu00e9tente */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                Loi applicable et juridiction compu00e9tente
              </h2>
              <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                <p>
                  Les pru00e9sentes CGU sont ru00e9gies par le droit franu00e7ais.
                </p>
                <p>
                  En cas de litige, une solution amiable sera recherchu00e9e avant toute action judiciaire. u00c0 du00e9faut d'accord amiable, 
                  les tribunaux franu00e7ais seront seuls compu00e9tents.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Derniu00e8re mise u00e0 jour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-gray-500 text-sm"
        >
          Derniu00e8re mise u00e0 jour : 8 mai 2025
        </motion.div>
      </div>
    </div>
  );
};

export default CGU;
