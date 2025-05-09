import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { 
  Zap, 
  Scissors, 
  Brain, 
  Leaf, 
  Sun, 
  Star, 
  ArrowRight,
  Shield,
  Award,
  Clock
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const services = [
  {
    title: "Repousse Capillaire Intense",
    description: "Redonnez vie à vos cheveux avec notre traitement exclusif qui stimule la repousse et fortifie le cuir chevelu.",
    icon: Zap,
    price: "À partir de 210€ la séance​",
    duration: "55 min",
    benefits: [
      "Jusqu'à 120 nouveaux cheveux/cm²*",
      "Arrêt de la chute en 3 semaines",
      "Solution personnalisée selon votre type de calvitie"
    ],
    image: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-moisturizing-cream_23-2150331756.jpg?t=st=1744189377~exp=1744192977~hmac=c796dd7546bd033bf4d9158f581966e65ee558e205a98e1d0dd4130c4e44b587&w=996",
    rating: 4.9
  },
  {
    title: "Soin Visage Anti-Acné",
    description: "L'acné n'aura plus jamais droit de cité sur votre visage ! Notre arme secrète élimine boutons et kystes sans merci.",
    icon: Shield,
    price: "À partir de 145€ la séance",
    duration: "40 min",
    benefits: [
      "Résultats visibles dès 72h",
      "Technique anti-récidive brevetée",
      "Peau unifiée sans effets secondaires"
    ],
    image: "https://img.freepik.com/free-photo/person-dealing-with-rosacea_23-2150478609.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740",
    rating: 4.8
  },
  { 
    title: "Remodelage Post-Grossesse",
    description: "Redonnez à votre corps sa splendeur d'avant bébé ! Notre combo magique agit comme une machine à remonter le temps.",
    icon: Award,
    price: "À partir de 250€ la séance",
    duration: "70 min",
    benefits: [
      "Ventre raffermi comme au lycée",
      "Vergetures atténuées à 95%",
      "Stimulation naturelle du collagène"
    ],
    image: "https://img.freepik.com/free-photo/intimate-portrait-beautiful-mother-holding-her-young-child_23-2150551743.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740",
    rating: 5.0
  },
  {
    title: "Lifting Regard Express",
    description: "Rajeunissez votre regard instantanément avec notre solution non chirurgicale pour paupières tombantes.",
    icon: Scissors,
    price: "À partir de 225€ la séance.",
    duration: "25 min",
    benefits: [
      "Effet 'yeux ouverts' garanti",
      "Solution même pour blépharochalasis sévère",
      "Aucune trace, retour au travail direct"
    ],
    image: "https://img.freepik.com/free-photo/portrait-sensual-brunette-woman-pink-jacket_197531-16810.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740",
    rating: 4.9
  },
  {
     title: "Sculpture du Menton",
    description: "Votre profil devient une œuvre d'art ! Notre technologie fond les graisses et redessine l'ovale comme un sculpteur.",
    icon: Brain,
    price: "À partir de 230€ la séance",
    duration: "45 min",
    benefits: [
      "Contour de mâchoire ciselé",
      "Peau ultra-tonique",
      "Résultats comparables à une liposuccion"
    ],
    image: "https://img.freepik.com/free-photo/portrait-young-woman-with-afro-haircut_273609-22077.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740",
    rating: 4.7
  },
  {
     title: "Soin Anti-Âge Global",
    description: "Lissez rides et ridules pour une peau visiblement plus jeune et éclatante.",
    icon: Clock,
    price: "À partir de 280€ la séance",
    duration: "60 min",
    benefits: [
      "Rides effacées jusqu'à 80%",
      "Effet lifting instantané",
      "Protection anti-âge longue durée"
    ],
    image: "https://img.freepik.com/free-photo/before-after-portrait-woman-retouched_23-2149121640.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740",
    rating: 4.9
  }
];

const Services = () => {
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
            <Leaf size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Nos Soins Spécialisés
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Des Soins Innovants pour
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Votre Bien-être
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez notre gamme complète de soins par plasma froid, conçus pour répondre à vos besoins spécifiques avec des résultats exceptionnels.
          </motion.p>
        </div>

        {/* Services Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[Autoplay, EffectCoverflow]}
            breakpoints={{
    640: {
      slidesPerView: 1.4,
    },
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 2.8,
    },
    1280: {
      slidesPerView: 3.2,
    },
  }}
            className="py-10"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star size={14} className="text-primary fill-primary" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <service.icon size={20} className="text-primary" />
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-white/80 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-primary font-semibold">{service.price}</span>
                      <span className="text-gray-600 text-sm">{service.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <Sun size={16} className="text-primary" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/reservation" className="w-full mt-6 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                      Réserver
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;