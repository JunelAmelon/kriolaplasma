import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Star, ArrowRight, Award, Clock, Shield, ShoppingBag, Sparkles, Zap, Scissors, Brain, Sun, Check, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const services = [
  {
    title: "Repousse Capillaire Intense",
    description: "Redonnez vie à vos cheveux avec notre traitement exclusif qui stimule la repousse et fortifie le cuir chevelu.",
    icon: Zap,
    price: "À partir de 210€ la séance",
    duration: "55 min",
    benefits: [
      "Jusqu'à 120 nouveaux cheveux/cm²*",
      "Arrêt de la chute en 3 semaines",
      "Solution personnalisée selon votre type de calvitie"
    ],
    image: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-moisturizing-cream_23-2150331756.jpg?t=st=1744189377~exp=1744192977~hmac=c796dd7546bd033bf4d9158f581966e65ee558e205a98e1d0dd4130c4e44b587&w=996",
    rating: 4.9,
    special: "🔴 Offre lancement : Diagnostic capillaire gratuit"
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
    rating: 4.8,
    testimonial: "\"Enfin libérée après 15 ans d'acné !\" - Sophie, 32 ans"
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
    rating: 5.0,
    urgency: "🌟 Offre spéciale jeunes mamans"
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
    rating: 4.9,
    highlight: "💫 Le plus demandé en institut"
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
    rating: 4.7,
    guarantee: "🎯 Résultats cliniquement prouvés"
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
    rating: 4.9,
    badge: "🏆 Prix de l'innovation esthétique 2024"
  }
];



const products = [
  {
    id: 1,
    name: "Sérum Anti-âge Premium",
    price: "89€",
    rating: 5,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80",
    description: "Formule avancée enrichie en peptides et acide hyaluronique"
  },
  {
    id: 2,
    name: "Crème Régénérante Nuit",
    price: "75€",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80",
    description: "Réparation intense pendant votre sommeil"
  },
  {
    id: 3,
    name: "Huile Capillaire Fortifiante",
    price: "65€",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80",
    description: "Stimule la croissance et renforce les cheveux"
  },
  {
    id: 4,
    name: "Masque Hydratant Intense",
    price: "45€",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&q=80",
    description: "Hydratation profonde et éclat immédiat"
  }
];

const Home = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-100px 0px',
  });

  return (
    <>

      {/* Hero Section */}<section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
  {/* Image en arrière-plan avec overlay professionnel */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://img.freepik.com/free-photo/person-enjoying-scalp-massage-spa_23-2151454837.jpg"
      alt="Soin esthétique professionnel"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
  </div>

  {/* Contenu principal avec grille professionnelle */}
  <div className="relative z-10 container mx-auto px-6 py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
      
      {/* Colonne texte */}
      <div className="max-w-2xl space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-primary"></div>
          <span className="text-sm font-medium text-primary/90 tracking-widest">TECHNOLOGIE BREVETÉE</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          <span className="block">Révolution en</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">soins esthétiques</span>
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          Le plasma froid médical redéfinit les standards de beauté avec des résultats cliniquement prouvés, sans temps de récupération.
        </p>

        {/* Groupe CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="/reservation"
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            Consultation gratuite
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            Nos services
          </Link>
        </div>
      </div>

      {/* Colonne visuelle avec carte de preuve sociale */}
      <div className="relative h-full min-h-[400px] flex items-center justify-center">
        {/* Élément décoratif */}
        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        
        {/* Carte flottante avec preuve sociale */}
        <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-xs mx-auto lg:mx-0 lg:ml-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">4.9/5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Avis clients vérifiés</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-primary h-2 rounded-full" style={{width: '96%'}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Élément décoratif subtil */}
  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-primary/10 blur-3xl z-0"></div>
</section>

      {/* About Section */}
      <section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      {/* Galerie d'images modernisée */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img
              src="https://img.freepik.com/free-photo/african-girl-woman-couch-lady-beautician_1157-48226.jpg"
              alt="Notre équipe"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://img.freepik.com/free-photo/beautiful-female-wearing-pink-gloves-showing-filled-syringe-camera-close-up-portrait_7502-10384.jpg"
              alt="Nos équipements"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="space-y-4 mt-12">
          <div className="rounded-2xl overflow-hidden aspect-[3/4]">
            <img
              src="https://img.freepik.com/free-photo/beautiful-girl-standing-studio-with-cream_1157-29014.jpg"
              alt="Nos soins"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square relative">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-moisturizing-cream_23-2150331756.jpg"
              alt="Notre institut"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            {/* Badge flottant moderne */}
            <div className="absolute -bottom-4 -right-4 bg-white p-5 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Centre Certifié</div>
                  <div className="text-xs text-gray-500">Expert en Plasma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu texte */}
      <div className="flex-1 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 rounded-full">
          <Award className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">À PROPOS DE NOUS</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Kriola Plasma,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            Excellence en soins
          </span>
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Votre peau mérite une approche révolutionnaire. Le plasma froid médical offre des résultats cliniquement prouvés pour une transformation visible sans intervention invasive.
        </p>

        {/* Statistiques modernes */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { number: "5+", label: "Ans d'expertise" },
            { number: "450+", label: "Clients satisfaits" },
            { number: "98%", label: "Satisfaction" },
            { number: "3", label: "Centres en France" }
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-2xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <ul className="space-y-3 mb-8">
          {[
            "Technologie certifiée CE",
            "Équipe d'experts diplômés",
            "Protocoles personnalisés",
            "Suivi post-traitement"
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-300"
        >
          Découvrir nos services
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      {/* Nouveau design pour le titre seulement */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-primary/10 rounded-full border border-primary/20 mx-auto">
        <Sparkles className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Nos services spécialisés
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        <span className="block">Notre expertise,</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
          votre transformation
        </span>
      </h2>
      
      <p className="text-gray-600 max-w-2xl mx-auto">
        Découvrez nos traitements innovants qui ont déjà transformé la vie de nombreux clients satisfaits.
      </p>
    </div>

    {/* Conservation exacte du système de cartes existant */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.4, duration: 0.6 }}
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
          slideShadows: false,
        }}
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
        modules={[Autoplay, EffectCoverflow]}
        className="py-10 px-4 sm:px-10"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-80 sm:h-96">
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
                      {Icon && <Icon size={20} className="text-primary" />}
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
          );
        })}
      </Swiper>
    </motion.div>
  </div>
</section>

      {/* Web App Section */}
      <section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      {/* Partie texte - Gauche */}
      <div className="flex-1 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20">
          <Smartphone className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">APPLICATION MOBILE & WEB</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Votre programme de soins,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            accessible partout
          </span>
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Gérez vos rendez-vous, suivez votre progression et accédez à votre programme personnalisé depuis notre application mobile ou directement via votre navigateur.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://app.kriolaplasma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-gray-900 hover:bg-primary text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M8 17h8"/>
              <path d="M12 13v4"/>
            </svg>
            Accéder à la version web
          </a>
        </div>

        {/* Boutons stores */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px]"
          >
            <div className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-3 transition-all duration-300 flex items-center gap-3">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/5968/5968566.png" 
                alt="Google Play" 
                className="h-8 w-8"
              />
              <div className="text-left">
                <div className="text-xs text-gray-500">Disponible sur</div>
                <div className="font-semibold text-gray-900">Google Play</div>
              </div>
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px]"
          >
            <div className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-3 transition-all duration-300 flex items-center gap-3">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/179/179309.png" 
                alt="App Store" 
                className="h-8 w-8"
              />
              <div className="text-left">
                <div className="text-xs text-gray-500">Télécharger sur</div>
                <div className="font-semibold text-gray-900">App Store</div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Partie visuelle - Droite */}
      <div className="flex-1 relative w-full max-w-xl">
        {/* Mockup mobile moderne */}
        <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[40px] p-1 shadow-2xl">
          {/* Encoche */}
          <div className="absolute top-0 w-[120px] h-[24px] bg-gray-900 rounded-b-xl left-1/2 -translate-x-1/2 z-10" />
          
          {/* Écran */}
          <div className="relative h-full w-full rounded-[36px] overflow-hidden border-[12px] border-gray-900">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Application Kriola Plasma"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
          </div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary/5 blur-3xl -z-10" />
      </div>
    </div>
  </div>
</section>

{/* Boutique Preview Section */}
<section className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary/10">
  <div className="container mx-auto px-4">
    <div className="text-center mb-14">
      {/* Nouveau design pour le badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20 mx-auto"
      >
        <ShoppingBag className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Boutique exclusive
        </span>
      </motion.div>

      {/* Nouveau design pour le titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
      >
        <span className="block">Nos produits</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
          professionnels
        </span>
      </motion.h2>

      {/* Sous-titre conservé avec légères améliorations */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-600 max-w-xl mx-auto text-lg"
      >
        Sélection premium de soins experts pour sublimer votre routine beauté.
      </motion.p>
    </div>

    {/* Grille de produits inchangée */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Link to="/reservation" className="absolute bottom-4 left-4 right-4 bg-white text-gray-900 py-2 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2">
              Commander
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-bold">{product.price}</span>
              <div className="flex items-center gap-1">
                <Star size={16} className="text-primary fill-primary" />
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default Home;