import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Clock, Star, Users, Calendar, CheckCircle, ArrowRight, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Types pour les formations
interface Formation {
  id: number;
  title: string;
  description: string;
  price: number;
  priceString: string;
  duration: string;
  sessions: number;
  level: string;
  image: string;
  features: string[];
  startDates: string[];
}

// Liste des formations disponibles
const formations: Formation[] = [
  {
    id: 1,
    title: "Formation Plasma Froid Avancée",
    description: "Maîtrisez les techniques de pointe du plasma froid russe pour les soins anti-âge et esthétiques du visage.",
    price: 1990,
    priceString: "1 990€",
    duration: "5 jours (35h)",
    sessions: 5,
    level: "Professionnel",
    image: "https://img.freepik.com/free-photo/person-getting-micro-needling-beauty-treatment_23-2149334293.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740",
    features: [
      "Certification officielle",
      "Kit de démarrage inclus",
      "Support post-formation",
      "Accès à notre communauté d'experts",
      "Matériel pédagogique complet"
    ],
    startDates: [
      "15 juin 2025",
      "10 septembre 2025",
      "5 décembre 2025"
    ]
  },
  {
    id: 2,
    title: "Masterclass Traitement Capillaire",
    description: "Spécialisez-vous dans les traitements capillaires par plasma froid pour résoudre les problèmes d'alopécie et stimuler la repousse.",
    price: 1490,
    priceString: "1 490€",
    duration: "3 jours (21h)",
    sessions: 3,
    level: "Intermédiaire",
    image: "https://img.freepik.com/free-photo/person-enjoying-scalp-massage-spa_23-2151454867.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740",
    features: [
      "Techniques spécifiques pour le cuir chevelu",
      "Étude des cas cliniques",
      "Pratique sur modèles",
      "Suivi personnalisé post-formation",
      "Certificat de spécialisation"
    ],
    startDates: [
      "20 juillet 2025",
      "15 octobre 2025",
      "20 janvier 2026"
    ]
  },
  {
    id: 3,
    title: "Formation Plasma Esthétique Initiation",
    description: "Découvrez les fondamentaux du plasma froid et ses applications dans le domaine de l'esthétique pour débutants.",
    price: 990,
    priceString: "990€",
    duration: "2 jours (14h)",
    sessions: 2,
    level: "Débutant",
    image: "https://img.freepik.com/free-photo/african-girl-woman-couch-lady-beautician_1157-48228.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740",
    features: [
      "Aucun prérequis nécessaire",
      "Matériel de base fourni",
      "Introduction aux techniques fondamentales",
      "Conseils pour démarrer votre activité",
      "Attestation de formation"
    ],
    startDates: [
      "5 juin 2025",
      "25 août 2025",
      "10 novembre 2025"
    ]
  },
  {
    id: 4,
    title: "Perfectionnement Anti-Âge Visage",
    description: "Perfectionnez vos techniques de traitement anti-âge du visage avec les dernières innovations en plasma froid.",
    price: 1290,
    priceString: "1 290€",
    duration: "3 jours (21h)",
    sessions: 3,
    level: "Avancé",
    image: "images/vieillisementformation.png",
    features: [
      "Techniques avancées de lifting non-chirurgical",
      "Traitement des rides profondes",
      "Protocoles personnalisés",
      "Pratique intensive sur modèles",
      "Certification de spécialiste"
    ],
    startDates: [
      "12 juillet 2025",
      "18 septembre 2025",
      "15 décembre 2025"
    ]
  }
];

const Formation = () => {
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (formation: Formation) => {
    setSelectedFormation(formation);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
            <GraduationCap size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Centre de formation
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Devenez expert en
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Soins par Plasma Froid
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Des formations professionnelles certifiantes pour maîtriser les techniques de pointe du plasma froid russe
          </motion.p>
        </div>

        {/* Pourquoi nous choisir */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Pourquoi choisir nos <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">formations</span> ?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise reconnue</h3>
              <p className="text-gray-600">
                Formateurs certifiés avec plus de 10 ans d'expérience dans le domaine du plasma froid
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Groupes restreints</h3>
              <p className="text-gray-600">
                Maximum 8 participants par session pour un apprentissage personnalisé et une attention individuelle
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification officielle</h3>
              <p className="text-gray-600">
                Repartez avec une certification reconnue dans le secteur et un accompagnement post-formation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nos formations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Nos <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">programmes</span> de formation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {formations.map((formation) => (
              <div 
                key={formation.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={formation.image} 
                    alt={formation.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {formation.level}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{formation.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{formation.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-1 text-sm text-gray-700">
                      <Clock size={16} className="text-primary" />
                      <span>{formation.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-700">
                      <Calendar size={16} className="text-primary" />
                      <span>{formation.sessions} sessions</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                      <Star size={16} className="text-primary" />
                      <span>{formation.priceString}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => openModal(formation)}
                      className="flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Voir les détails
                      <ArrowRight size={16} />
                    </button>
                    
                    <Link 
                      to="/contact" 
                      className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
                    >
                      S'inscrire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Ce que disent nos <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">étudiants</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Martin",
                role: "Esthéticienne indépendante",
                testimonial: "Cette formation a transformé mon activité. J'ai pu proposer de nouveaux services premium à mes clients et augmenter mon chiffre d'affaires de 40% en seulement 3 mois.",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Thomas Dubois",
                role: "Propriétaire de salon de beauté",
                testimonial: "La qualité de l'enseignement est exceptionnelle. Les formateurs sont de vrais experts qui partagent généreusement leur savoir-faire et leurs astuces professionnelles.",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Amina Koné",
                role: "Infirmière esthétique",
                testimonial: "Formation complète et pratique. J'ai particulièrement apprécié les sessions pratiques sur modèles qui m'ont permis de gagner en confiance avant de traiter mes propres patients.",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 relative">
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="pt-6">
                  <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
                  <div>
                    <h4 className="font-semibold"><span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">{testimonial.name}</span></h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl shadow-lg p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Prêt à développer vos compétences ?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Rejoignez nos formations certifiantes et devenez un expert reconnu dans le domaine du plasma froid. 
            Places limitées à 8 participants par session pour garantir un apprentissage optimal.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Demander des informations
            </Link>
            
            <a 
              href="#formations" 
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Voir les prochaines sessions
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal détails formation */}
      {showModal && selectedFormation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={selectedFormation.image} 
                alt={selectedFormation.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition-colors"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedFormation.level}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{selectedFormation.title}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">{selectedFormation.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <FileText size={18} className="text-primary" />
                    Détails de la formation
                  </h4>
                  
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span><strong>Durée :</strong> {selectedFormation.duration}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span><strong>Sessions :</strong> {selectedFormation.sessions} journées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span><strong>Participants :</strong> 8 maximum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-primary" />
                      <span><strong>Niveau :</strong> {selectedFormation.level}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-primary font-bold" />
                      <span><strong>Prix :</strong> {selectedFormation.priceString}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    Ce qui est inclus
                  </h4>
                  
                  <ul className="space-y-2">
                    {selectedFormation.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  Prochaines sessions
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedFormation.startDates.map((date, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-lg p-3 text-center hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
                    >
                      {date}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t pt-6">
                <button 
                  onClick={closeModal}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Fermer
                </button>
                
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  <Mail size={16} />
                  Demander des informations
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Formation;
