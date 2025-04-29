import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Star, ArrowRight, Award, Clock, Shield, Download, ShoppingBag, Sparkles, Zap, Droplet, Scissors, Brain, Heart, Leaf, Sun, Check } from 'lucide-react';
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
    price: "À partir de 210€ la séance​",
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/free-photo/person-enjoying-scalp-massage-spa_23-2151454837.jpg?t=st=1744192213~exp=1744195813~hmac=6f77f8f1fe8bb8a97c58f07b2be381fe19809d0229d38db0c43a085c5563a3f9&w=996"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-left max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8"
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-white">
                  Innovation en Soins Esthétiques
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">
                  Révélez votre
                </span>
                <span className="block mt-2 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  beauté naturelle
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 mb-10"
              >
                Découvrez les soins innovants par plasma froid russe pour une peau rayonnante et des résultats exceptionnels.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center transform hover:scale-105 hover:shadow-[0_0_20px_rgba(185,122,86,0.3)]">
                  Réserver maintenant
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center transform hover:scale-105 hover:bg-white/20">
                  Découvrir
                  <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16"
              >
                {[
                  { number: "15+", label: "Années d'expertise" },
                  { number: "5k+", label: "Clients satisfaits" },
                  { number: "98%", label: "Taux de satisfaction" },
                  { number: "12+", label: "Prix d'excellence" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative w-full max-w-md"
            >
              <div className="relative">
                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 mx-auto max-w-[280px] sm:max-w-full"
                >
                  <div className="relative h-40 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow flex items-center gap-1">
                      <Star size={14} className="text-primary fill-primary" />
                      <span className="text-sm font-medium">4.9</span>
                    </div>
                    <div className="text-center text-white px-4">
                      <h3 className="text-xl font-semibold">Soins Innovants</h3>
                    </div>
                  </div>

                  <div className="p-6 bg-white">
                    <p className="text-gray-600 text-sm mb-4">
                      Technologie plasma froid de dernière génération
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2 text-gray-600">
                        <Sun size={16} className="text-primary" />
                        <span className="text-sm">Effet rajeunissant immédiat</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <Sun size={16} className="text-primary" />
                        <span className="text-sm">Sans douleur</span>
                      </li>
                    </ul>
                    <button className="w-full mt-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                      Réserver
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -left-4 sm:-left-8 top-1/4 bg-white p-3 sm:p-4 rounded-xl shadow-xl scale-75 sm:scale-100"
                >
                  <Shield className="text-primary mb-2" size={20} />
                  <p className="text-xs sm:text-sm font-medium">Résultats Garantis</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -right-4 sm:-right-8 top-1/2 bg-white p-3 sm:p-4 rounded-xl shadow-xl scale-75 sm:scale-100"
                >
                  <Award className="text-primary mb-2" size={20} />
                  <p className="text-xs sm:text-sm font-medium">Expert Certifié</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute -bottom-4 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-3 sm:p-4 rounded-xl shadow-xl w-48 sm:w-64 scale-75 sm:scale-100"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Star className="text-primary" size={20} />
                    <div>
                      <p className="text-xs sm:text-sm font-medium">Note Moyenne</p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={12} className="text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-br from-white via-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={aboutRef}
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://img.freepik.com/free-photo/african-girl-woman-couch-lady-beautician_1157-48226.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740"
                      alt="Notre équipe"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-wearing-pink-gloves-showing-filled-syringe-camera-close-up-portrait_7502-10384.jpg?t=st=1744139915~exp=1744143515~hmac=c1da04024bdb2e41094634440eca774c7872bcb3edb82432f36fc5b8edc8ae0c&w=740"
                      alt="Nos équipements"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-girl-standing-studio-with-cream_1157-29014.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740"
                      alt="Nos soins"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-moisturizing-cream_23-2150331756.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740"
                      alt="Notre institut"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Achievement Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Centre Certifié</div>
                    <div className="text-xs text-gray-600">Expert en Plasma Froid</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold">À PROPOS DE NOUS</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Kriola Plasma, la Référence en
                <span className="text-primary"> Soin au Plasma Froid</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Votre peau mérite le meilleur. Et si la réponse était dans le froid ?
                Chez Kriola Plasma, nous ne vous vendons pas un produit, mais une révélation : celle d'une peau enfin libérée, transcendée, radicalement transformée.
                <br></br> <br></br>
                Pas de promesses en l'air, juste des preuves. Parce que votre peau n'a pas besoin de rêves… mais de résultats.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "5+", label: "Années d'expérience" },
                  { number: "45+", label: "Clients satisfaits" },
                  { number: "98%", label: "Taux de satisfaction" },
                  { number: "3+", label: "Centres en France" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Technologie de pointe certifiée",
                  "Équipe d'experts qualifiés",
                  "Protocoles sur mesure",
                  "Suivi personnalisé"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="group bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center transform hover:scale-105 hover:shadow-2xl shadow-xl">
                En savoir plus
                <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold">NOS SERVICES SPÉCIALISÉS</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Transformations Remarquables
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos traitements innovants qui ont déjà transformé la vie de nombreux clients satisfaits.
            </p>
          </motion.div>

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
                        <button className="w-full mt-6 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                          Réserver
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
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
      <section className="py-32 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold">APPLICATION MOBILE</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Gérez vos Soins depuis
                <span className="text-primary block">Votre Smartphone</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Suivez vos traitements, prenez rendez-vous et accédez à votre programme personnalisé directement depuis notre application mobile.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transition-transform">
                    <Download size={20} />
                    <img
                      src="https://cdn-icons-png.freepik.com/256/5977/5977575.png?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid"
                      alt="Télécharger sur l'App Store"
                      className="h-14 w-auto"
                    />
                    <p className="text-center mt-2 text-sm font-medium text-gray-600">App Store</p>
                  </div>
                </a>
                
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transition-transform">
                    <Download size={20} />
                    <img
                      src="https://cdn-icons-png.freepik.com/256/732/732208.png?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid"
                      alt="Télécharger sur Google Play"
                      className="h-14 w-auto"
                    />
                    <p className="text-center mt-2 text-sm font-medium text-gray-600">Google Play</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-800 shadow-xl">
                <div className="absolute top-0 w-[148px] h-[18px] bg-gray-800 rounded-b-2xl left-1/2 -translate-x-1/2" />
                <div className="h-full w-full rounded-[2.3rem] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
                    alt="Kriola Plasma App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Boutique Preview Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold">BOUTIQUE</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Nos Produits Cosmétiques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une sélection exclusive de produits haute performance pour prolonger les bienfaits de vos soins.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Sérum Anti-âge",
                price: "89€",
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80"
              },
              {
                name: "Crème Régénérante",
                price: "75€",
                image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80"
              },
              {
                name: "Huile Capillaire",
                price: "65€",
                image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80"
              },
              {
                name: "Masque Hydratant",
                price: "45€",
                image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&q=80"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-900 font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-bold">{product.price}</span>
                    <button className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-primary">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;