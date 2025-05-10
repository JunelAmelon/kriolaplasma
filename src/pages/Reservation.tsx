import { useState } from 'react';
// import { InlineWidget } from 'react-calendly'; // Pas besoin de Calendly car nous utilisons notre propre interface
import { Calendar, Clock, Star, Shield, Award, Phone, ChevronRight, Check, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCartStore } from '../store/cartStore';

// Interface pour le type Service
interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  priceString: string;
  duration: string;
  image: string;
}

// Interface pour les réservations
interface ReservationItemData {
  serviceId: number;
  serviceName: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  priceString: string;
  image: string;
}

// Liste des services disponibles pour la réservation
const services: Service[] = [
  {
    id: 1,
    title: "Repousse Capillaire Intense",
    description: "Redonnez vie à vos cheveux avec notre traitement exclusif qui stimule la repousse et fortifie le cuir chevelu.",
    price: 210,
    priceString: "210€",
    duration: "55 min",
    image: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-moisturizing-cream_23-2150331756.jpg?t=st=1744189377~exp=1744192977~hmac=c796dd7546bd033bf4d9158f581966e65ee558e205a98e1d0dd4130c4e44b587&w=996"
  },
  {
    id: 2,
    title: "Soin Visage Anti-Acné",
    description: "Dites adieu à l'acné ! Notre solution élimine boutons et kystes en profondeur, pour une peau nette et saine.",
    price: 145,
    priceString: "145€",
    duration: "40 min",
    image: "https://img.freepik.com/free-photo/person-dealing-with-rosacea_23-2150478609.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740"
  },
  {
    id: 3,
    title: "Remodelage Post-Grossesse",
    description: "Redonnez à votre corps sa splendeur d'avant bébé ! Notre solution agit comme une machine à remonter le temps.",
    price: 250,
    priceString: "250€",
    duration: "70 min",
    image: "https://img.freepik.com/free-photo/intimate-portrait-beautiful-mother-holding-her-young-child_23-2150551743.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740"
  },
  {
    id: 4,
    title: "Lifting Regard Express",
    description: "Atténue le relâchement cutané (paupières tombantes, bajoues, cou fripé…)",
    price: 225,
    priceString: "225€",
    duration: "25 min",
    image: "https://img.freepik.com/free-photo/portrait-sensual-brunette-woman-pink-jacket_197531-16810.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740"
  },
  {
    id: 5,
    title: "Sculpture du Menton",
    description: "Votre profil devient une œuvre d'art ! Notre technologie fond les graisses et redessine l'ovale comme un sculpteur.",
    price: 230,
    priceString: "230€",
    duration: "45 min",
    image: "https://img.freepik.com/free-photo/portrait-young-woman-with-afro-haircut_273609-22077.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740"
  },
  {
    id: 6,
    title: "Soin Anti-Âge Global",
    description: "Lissez rides et ridules pour une peau visiblement plus jeune et éclatante. Passer donc à l'action maintenant !",
    price: 280,
    priceString: "280€",
    duration: "60 min",
    image: "/images/soinvieillsement.png"
  }
];

// Heures disponibles pour les rendez-vous
const availableHours = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

const Reservation = () => {
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  
  // État pour suivre l'étape actuelle du processus de réservation
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // États pour suivre les sélections de l'utilisateur
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [reservationItems, setReservationItems] = useState<ReservationItemData[]>([]);
  
  // Générer les dates disponibles (14 jours à partir d'aujourd'hui)
  const generateAvailableDates = (): Array<{ date: Date; formatted: string }> => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Exclure les dimanches (0 = dimanche)
      if (date.getDay() !== 0) {
        dates.push({
          date: date,
          formatted: date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'long' })
        });
      }
    }
    
    return dates;
  };
  
  const availableDates = generateAvailableDates();
  
  // Fonction pour ajouter une réservation
  const addReservation = (): void => {
    if (selectedService && selectedDate && selectedTime) {
      const newReservation: ReservationItemData = {
        serviceId: selectedService.id,
        serviceName: selectedService.title,
        price: selectedService.price,
        priceString: selectedService.priceString,
        date: selectedDate,
        time: selectedTime,
        duration: selectedService.duration,
        image: selectedService.image
      };
      
      setReservationItems([...reservationItems, newReservation]);
      
      // Réinitialiser les sélections pour permettre d'ajouter d'autres réservations
      setSelectedService(null);
      setSelectedDate('');
      setSelectedTime('');
      setCurrentStep(1);
    }
  };
  
  // Fonction pour procéder au paiement
  const proceedToCheckout = (): void => {
    // Ajouter chaque réservation au panier
    reservationItems.forEach(item => {
      addItem({
        id: item.serviceId,
        name: item.serviceName,
        price: item.priceString,
        priceValue: item.price, // Ajout du prix numérique pour les calculs
        quantity: 1,
        image: item.image
      });
    });
    
    // Rediriger vers la page de paiement
    navigate('/checkout');
  };
  
  // Fonction pour formater la date en français
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
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

          {/* Étapes de réservation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center items-center space-x-4 mt-10"
          >
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step < 4 ? step : <Check size={18} />}
                </div>
                {step < 4 && (
                  <div className="ml-2 mr-2">
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center items-center space-x-8 mt-2 text-sm text-gray-600"
          >
            <span className={currentStep >= 1 ? 'text-primary font-medium' : ''}>Traitement</span>
            <span className={currentStep >= 2 ? 'text-primary font-medium' : ''}>Date</span>
            <span className={currentStep >= 3 ? 'text-primary font-medium' : ''}>Heure</span>
            <span className={currentStep >= 4 ? 'text-primary font-medium' : ''}>Récapitulatif</span>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center gap-8 mt-8 mb-8"
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

        {/* Contenu principal - Étapes de réservation */}
        <div className="max-w-6xl mx-auto">
          {/* Étape 1: Sélection du traitement */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar size={24} className="text-primary" />
                Choisissez votre traitement
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      selectedService?.id === service.id
                        ? 'ring-4 ring-primary ring-opacity-50'
                        : 'hover:scale-[1.02]'
                    }`}
                  >
                    {/* Image avec overlay et badge de prix */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                      
                      {/* Badge de prix */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary font-bold px-4 py-2 rounded-full shadow-md">
                        {service.priceString}
                      </div>
                      
                      {/* Badge de durée */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm shadow-md">
                        <Clock size={14} className="text-primary" />
                        <span>{service.duration}</span>
                      </div>
                      
                      {/* Indicateur de sélection */}
                      {selectedService?.id === service.id && (
                        <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-full shadow-lg">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                    
                    {/* Contenu texte */}
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      {/* Bouton de sélection */}
                      <button 
                        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 shadow-md ${
                          selectedService?.id === service.id
                            ? 'bg-gradient-to-r from-primary to-primary-dark text-white transform scale-105'
                            : 'bg-gradient-to-r from-primary/10 to-primary/20 text-primary hover:from-primary/20 hover:to-primary/30 hover:shadow-lg'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service);
                        }}
                      >
                        {selectedService?.id === service.id ? (
                          <span className="flex items-center justify-center gap-2">
                            <Check size={16} /> Sélectionné
                          </span>
                        ) : (
                          'Réserver ce soin'
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => selectedService && setCurrentStep(2)}
                  disabled={!selectedService}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    selectedService
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  } transition-colors`}
                >
                  Continuer
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Étape 2: Sélection de la date */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar size={24} className="text-primary" />
                Choisissez une date
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {availableDates.map((dateObj, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedDate(dateObj.formatted)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedDate === dateObj.formatted
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <p className="font-medium text-center">{dateObj.formatted}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Retour
                </button>
                <button
                  onClick={() => selectedDate && setCurrentStep(3)}
                  disabled={!selectedDate}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    selectedDate
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  } transition-colors`}
                >
                  Continuer
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Étape 3: Sélection de l'heure */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Clock size={24} className="text-primary" />
                Choisissez une heure
              </h2>
              
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {availableHours.map((hour, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedTime(hour)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedTime === hour
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <p className="font-medium text-center">{hour}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Retour
                </button>
                <button
                  onClick={() => {
                    if (selectedTime) {
                      addReservation();
                      setCurrentStep(4);
                    }
                  }}
                  disabled={!selectedTime}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    selectedTime
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  } transition-colors`}
                >
                  Continuer
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Étape 4: Récapitulatif et paiement */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <ShoppingBag size={24} className="text-primary" />
                Récapitulatif de votre réservation
              </h2>
              
              {reservationItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Vous n'avez pas encore sélectionné de rendez-vous.</p>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="mt-4 px-6 py-3 rounded-lg font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
                  >
                    Réserver un rendez-vous
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    {reservationItems.map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 border rounded-xl">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.serviceName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-medium">{item.serviceName}</h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                            <Calendar size={14} className="text-primary" />
                            <span>{formatDate(item.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                            <Clock size={14} className="text-primary" />
                            <span>{item.time} ({item.duration})</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end justify-between">
                          <span className="font-bold text-primary">{item.priceString}</span>
                          <button
                            onClick={() => {
                              setReservationItems(reservationItems.filter((_, i) => i !== index));
                            }}
                            className="text-red-500 hover:text-red-700"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">{reservationItems.reduce((total, item) => total + item.price, 0)}€</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Ajouter un autre rendez-vous
                    </button>
                    <button
                      onClick={proceedToCheckout}
                      className="px-6 py-3 rounded-lg font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
                    >
                      Procéder au paiement
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </div>

        {/* Section d'informations complémentaires */}
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
            <Link 
              to="/cgu" 
              className="text-primary hover:underline mt-2 inline-block"
            >
              Voir les conditions générales
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;