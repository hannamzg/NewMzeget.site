import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const Kitchens = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Kitchen photos from mhatbah folder
  const kitchenPhotos = [
    '/photos/mhatbah/27000012-e199-4e8b-88d5-e8ae6e74dec7.jpg',
    '/photos/mhatbah/139279670_2819888698249422_8337821421472006119_n.jpg',
    '/photos/mhatbah/139458467_2819886834916275_850871242881701092_n.jpg',
    '/photos/mhatbah/139609917_2819890588249233_1418210908941531446_n.jpg',
    '/photos/mhatbah/139781068_2819886844916274_9171180682271333363_n.jpg',
    '/photos/mhatbah/3f4e1591-3a3f-411b-96e7-8dd72cad9a90.jpg',
    '/photos/mhatbah/49729384_2218638805041084_7241681346320400384_n.jpg',
    '/photos/mhatbah/5017d09e-3dba-48e7-8e95-27291f4dd469.jpg',
    '/photos/mhatbah/d04b0c93-e4de-402c-bb5e-14e5fd9970d5.jpg',
    '/photos/mhatbah/SAM_3804.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % kitchenPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + kitchenPhotos.length) % kitchenPhotos.length);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const kitchenProjects = [
    {
      id: 1,
      title: "מטבח מודרני עם אי מרכזי",
      description: "מטבח מודרני עם אי מרכזי, ארונות לבנים ומשטח שיש. עיצוב נקי ופונקציונלי עם תאורה מובנית.",
      image: '/photos/mhatbah/27000012-e199-4e8b-88d5-e8ae6e74dec7.jpg',
      category: "מטבחים",
      style: "מודרני",
      materials: "MDF מצופה למינציה, שיש",
      dimensions: "4x3 מטר",
      price: "85,000 ₪",
      features: ["אי מרכזי", "מגירות נסתרות", "תאורה LED", "משטח שיש"],
      location: "אבו סנאן 166"
    },
    {
      id: 2,
      title: "מטבח כפרי עם עץ גלוי",
      description: "מטבח כפרי עם עץ אלון גלוי, ידיות ברזל וצבעים חמים. עיצוב מסורתי וחם.",
      image: '/photos/mhatbah/139458467_2819886834916275_850871242881701092_n.jpg',
      category: "מטבחים",
      style: "כפרי",
      materials: "עץ אלון טבעי",
      dimensions: "5x3 מטר",
      price: "120,000 ₪",
      features: ["עץ גלוי", "ידיות ברזל", "צבעים חמים", "משטח עץ"],
      location: "אבו סנאן 166"
    },
    {
      id: 3,
      title: "מטבח מינימליסטי לבן",
      description: "מטבח מינימליסטי עם קווים נקיים, ידיות נסתרות וצבע לבן. עיצוב נקי ומודרני.",
      image: '/photos/mhatbah/139609917_2819890588249233_1418210908941531446_n.jpg',
      category: "מטבחים",
      style: "מינימליסטי",
      materials: "MDF מצופה למינציה",
      dimensions: "3.5x2.5 מטר",
      price: "65,000 ₪",
      features: ["ידיות נסתרות", "קווים נקיים", "צבע לבן", "מגירות נסתרות"],
      location: "אבו סנאן 166"
    },
    {
      id: 4,
      title: "מטבח קלאסי עם עץ כהה",
      description: "מטבח קלאסי עם עץ אגוז כהה, ידיות מעוצבות ועיצוב מסורתי ואלגנטי.",
      image: '/photos/mhatbah/139781068_2819886844916274_9171180682271333363_n.jpg',
      category: "מטבחים",
      style: "קלאסי",
      materials: "עץ אגוז טבעי",
      dimensions: "4.5x3 מטר",
      price: "95,000 ₪",
      features: ["עץ אגוז", "ידיות מעוצבות", "עיצוב קלאסי", "משטח גרניט"],
      location: "אבו סנאן 166"
    },
    {
      id: 5,
      title: "מטבח L עם אי מרכזי",
      description: "מטבח בצורת L עם אי מרכזי, ארונות אפורים ומשטח שיש. עיצוב מודרני ופונקציונלי.",
      image: '/photos/mhatbah/139279670_2819888698249422_8337821421472006119_n.jpg',
      category: "מטבחים",
      style: "מודרני",
      materials: "MDF מצופה למינציה, שיש",
      dimensions: "6x4 מטר",
      price: "110,000 ₪",
      features: ["צורת L", "אי מרכזי", "ארונות אפורים", "משטח שיש"],
      location: "אבו סנאן 166"
    },
    {
      id: 6,
      title: "מטבח כפרי עם אי עץ",
      description: "מטבח כפרי עם אי עץ מרכזי, ארונות לבנים וידיות ברזל. עיצוב כפרי וחם.",
      image: '/photos/mhatbah/3f4e1591-3a3f-411b-96e7-8dd72cad9a90.jpg',
      category: "מטבחים",
      style: "כפרי",
      materials: "עץ אלון, MDF מצופה",
      dimensions: "5x3.5 מטר",
      price: "105,000 ₪",
      features: ["אי עץ", "ארונות לבנים", "ידיות ברזל", "עיצוב כפרי"],
      location: "אבו סנאן 166"
    },
    {
      id: 7,
      title: "מטבח מודרני עם משטח שיש",
      description: "מטבח מודרני עם משטח שיש שחור, ארונות לבנים ותאורה מובנית. עיצוב אלגנטי ומודרני.",
      image: '/photos/mhatbah/49729384_2218638805041084_7241681346320400384_n.jpg',
      category: "מטבחים",
      style: "מודרני",
      materials: "MDF מצופה למינציה, שיש שחור",
      dimensions: "4x3 מטר",
      price: "90,000 ₪",
      features: ["משטח שיש שחור", "תאורה מובנית", "ארונות לבנים", "עיצוב אלגנטי"],
      location: "אבו סנאן 166"
    },
    {
      id: 8,
      title: "מטבח כפרי עם ארונות עץ",
      description: "מטבח כפרי עם ארונות עץ אלון, משטח עץ וידיות ברזל. עיצוב כפרי מסורתי.",
      image: '/photos/mhatbah/5017d09e-3dba-48e7-8e95-27291f4dd469.jpg',
      category: "מטבחים",
      style: "כפרי",
      materials: "עץ אלון טבעי",
      dimensions: "5x3 מטר",
      price: "115,000 ₪",
      features: ["ארונות עץ אלון", "משטח עץ", "ידיות ברזל", "עיצוב כפרי"],
      location: "אבו סנאן 166"
    },
    {
      id: 9,
      title: "מטבח מינימליסטי עם אי",
      description: "מטבח מינימליסטי עם אי מרכזי, ארונות לבנים וקווים נקיים. עיצוב פשוט ואלגנטי.",
      image: '/photos/mhatbah/d04b0c93-e4de-402c-bb5e-14e5fd9970d5.jpg',
      category: "מטבחים",
      style: "מינימליסטי",
      materials: "MDF מצופה למינציה",
      dimensions: "4x3 מטר",
      price: "75,000 ₪",
      features: ["אי מרכזי", "ארונות לבנים", "קווים נקיים", "עיצוב פשוט"],
      location: "אבו סנאן 166"
    },
    {
      id: 10,
      title: "מטבח קלאסי עם ארונות כהה",
      description: "מטבח קלאסי עם ארונות עץ כהה, משטח שיש וידיות מעוצבות. עיצוב מסורתי ואלגנטי.",
      image: '/photos/mhatbah/SAM_3804.jpg',
      category: "מטבחים",
      style: "קלאסי",
      materials: "עץ אגוז טבעי, שיש",
      dimensions: "4.5x3 מטר",
      price: "100,000 ₪",
      features: ["ארונות עץ כהה", "משטח שיש", "ידיות מעוצבות", "עיצוב קלאסי"],
      location: "אבו סנאן 166"
    }
  ];

  return (
    <>
      <SEO 
        title="מטבחים בהתאמה אישית - אלי מזיגית נגרות"
        description="מטבחים בהתאמה אישית עם חומרי גלם איכותיים. מטבחים מודרניים, כפריים, קלאסיים ומינימליסטיים. עיצוב מוקפד ואיכות בלתי מתפשרת."
        url="https://elimazigit.com/kitchens"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <img src="/images/logo.png" alt="אלי מזיגית נגרות" className="h-20 w-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              מטבחים בהתאמה אישית
            </h1>
            <p className="text-xl text-neutral-600 mb-4 leading-relaxed">
              מטבחים מעוצבים ומקצועיים עם חומרי גלם איכותיים. כל מטבח מעוצב בהתאמה מלאה 
              לצרכים שלך, החל מהתכנון ועד ההתקנה הסופית.
            </p>
            <p className="text-lg text-primary-600 font-semibold mb-8">
              מיקום הנגרייה: אבו סנאן 166
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+972525119685" className="btn-primary">
                התקשר לייעוץ - 052-5119685
              </a>
              <a href="#projects" className="btn-outline">
                צפה בפרויקטים
              </a>
            </div>
          </div>
          
          {/* Modern Photo Gallery */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Main Gallery Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-50 p-4">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(${currentSlide * 100}%)` }}>
                  {kitchenPhotos.map((photo, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative group cursor-pointer" onClick={() => openModal(photo)}>
                        <div className="relative overflow-hidden rounded-2xl">
                          <img 
                            src={photo} 
                            alt={`מטבח ${index + 1}`}
                            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-all duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          
                          {/* Photo Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-bold mb-1">מטבח מעוצב #{index + 1}</h3>
                                <p className="text-sm opacity-90">לחץ להגדלה</p>
                              </div>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                  {index + 1} / {kitchenPhotos.length}
                                </span>
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Modern Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-20 group"
              >
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-20 group"
              >
                <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Progress Bar */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-white text-sm font-medium">{currentSlide + 1}</span>
                    <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-300"
                        style={{ width: `${((currentSlide + 1) / kitchenPhotos.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{kitchenPhotos.length}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Thumbnail Strip */}
            <div className="mt-8">
              <div className="flex justify-center space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                {kitchenPhotos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex-shrink-0 relative group transition-all duration-300 ${
                      index === currentSlide 
                        ? 'scale-110 ring-4 ring-primary-500 ring-offset-2' 
                        : 'hover:scale-105 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={photo} 
                        alt={`תמונה ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    {index === currentSlide && (
                      <div className="absolute inset-0 bg-primary-500/20 rounded-xl" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
        {/* Kitchen Types */}
        <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              סוגי מטבחים
            </h2>
            <p className="text-xl text-neutral-600">
              מגוון רחב של סגנונות מטבחים לכל טעם ותקציב
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/kitchens/modern" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">מודרני</h3>
              <p className="text-neutral-600 text-sm mb-4">קווים נקיים, צבעים ניטרליים, עיצוב מינימליסטי</p>
              <div className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                צפה בפרטים ←
              </div>
            </Link>
            
            <Link to="/kitchens/country" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">כפרי</h3>
              <p className="text-neutral-600 text-sm mb-4">עץ גלוי, צבעים חמים, עיצוב מסורתי</p>
              <div className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                צפה בפרטים ←
              </div>
            </Link>
            
            <Link to="/kitchens/classic" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">קלאסי</h3>
              <p className="text-neutral-600 text-sm mb-4">עיצוב מסורתי, עץ כהה, אלגנטיות</p>
              <div className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                צפה בפרטים ←
              </div>
            </Link>
            
            <Link to="/kitchens/minimalist" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">מינימליסטי</h3>
              <p className="text-neutral-600 text-sm mb-4">פשטות, פונקציונליות, עיצוב נקי</p>
              <div className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                צפה בפרטים ←
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              פרויקטי מטבחים
            </h2>
            <p className="text-xl text-neutral-600">
              {kitchenProjects.length} פרויקטים מעוצבים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitchenProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showPrice={true} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              מוכן לתכנן את המטבח החדש שלך?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              קבל הצעת מחיר חינם ותתחיל ליצור את המטבח המושלם עבורך
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+972525119685" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-colors duration-200">
                התקשר עכשיו - 052-5119685
              </a>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-3 rounded-lg transition-all duration-200">
                שלח הודעה
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-7xl max-h-full group">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 z-10"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
            
            {/* Modal Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={modalImage}
                alt="מטבח"
                className="max-w-full max-h-[90vh] object-contain transition-transform duration-300 group-hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">מטבח מעוצב</h3>
                    <p className="text-sm opacity-90">לחץ מחוץ לתמונה לסגירה</p>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Kitchens;
