import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const Bedrooms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Bedroom photos from beedrooms folder
  const bedroomPhotos = [
    '/photos/beedrooms/12d28fa7-d693-4c43-b814-70e81bb2013f.jpg',
    '/photos/beedrooms/2361db37-5033-4994-9206-4f5f1c77e416.jpg',
    '/photos/beedrooms/458476336_3775848119320137_4194093141021137689_n.jpg',
    '/photos/beedrooms/458692020_3775848255986790_7584708277185232989_n.jpg',
    '/photos/beedrooms/493071296_3993153510922929_4881324682366187318_n.jpg',
    '/photos/beedrooms/493279435_3992376671000613_3641866465839409284_n.jpg',
    '/photos/beedrooms/493538194_3993153494256264_8531605647312620830_n.jpg',
    '/photos/beedrooms/494071429_3992376651000615_1704838858269106062_n.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bedroomPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bedroomPhotos.length) % bedroomPhotos.length);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const bedroomProjects = [
    {
      id: 1,
      title: "חדר שינה ראשי עם ארונות מובנים",
      description: "חדר שינה ראשי עם ארונות מובנים מעץ אלון, מגירות נסתרות ומראה כפרי חם.",
      image: '/photos/beedrooms/12d28fa7-d693-4c43-b814-70e81bb2013f.jpg',
      category: "חדרי שינה",
      style: "כפרי",
      materials: "עץ אלון טבעי",
      dimensions: "4x3 מטר",
      price: "45,000 ₪",
      features: ["ארונות מובנים", "מגירות נסתרות", "מראה כפרי", "תאורה מובנית"],
      location: "אבו סנאן 166"
    },
    {
      id: 2,
      title: "חדר ילדים עם מיטה כפולה",
      description: "חדר ילדים עם מיטה כפולה, ארונות צבעוניים ומדפים לספרים וצעצועים.",
      image: '/photos/beedrooms/2361db37-5033-4994-9206-4f5f1c77e416.jpg',
      category: "חדרי שינה",
      style: "מודרני",
      materials: "MDF מצופה למינציה",
      dimensions: "3x3 מטר",
      price: "35,000 ₪",
      features: ["מיטה כפולה", "ארונות צבעוניים", "מדפים", "מגירות"],
      location: "אבו סנאן 166"
    },
    {
      id: 3,
      title: "חדר שינה מינימליסטי",
      description: "חדר שינה מינימליסטי עם ארונות לבנים, קווים נקיים ועיצוב פשוט ואלגנטי.",
      image: '/photos/beedrooms/458476336_3775848119320137_4194093141021137689_n.jpg',
      category: "חדרי שינה",
      style: "מינימליסטי",
      materials: "MDF מצופה למינציה",
      dimensions: "3.5x3 מטר",
      price: "40,000 ₪",
      features: ["ארונות לבנים", "קווים נקיים", "עיצוב פשוט", "מגירות נסתרות"],
      location: "אבו סנאן 166"
    },
    {
      id: 4,
      title: "חדר נוער עם שולחן עבודה",
      description: "חדר נוער עם שולחן עבודה מובנה, מדפים לספרים וארונות אחסון חכמים.",
      image: '/photos/beedrooms/458692020_3775848255986790_7584708277185232989_n.jpg',
      category: "חדרי שינה",
      style: "מודרני",
      materials: "MDF מצופה למינציה",
      dimensions: "4x3 מטר",
      price: "50,000 ₪",
      features: ["שולחן עבודה", "מדפים", "ארונות אחסון", "תאורה מובנית"],
      location: "אבו סנאן 166"
    },
    {
      id: 5,
      title: "חדר אורחים קלאסי",
      description: "חדר אורחים קלאסי עם ארונות עץ כהה, עיצוב מסורתי ואלגנטי.",
      image: '/photos/beedrooms/493071296_3993153510922929_4881324682366187318_n.jpg',
      category: "חדרי שינה",
      style: "קלאסי",
      materials: "עץ אגוז טבעי",
      dimensions: "3x3 מטר",
      price: "42,000 ₪",
      features: ["עץ כהה", "עיצוב קלאסי", "ארונות מעוצבים", "מגירות"],
      location: "אבו סנאן 166"
    },
    {
      id: 6,
      title: "חדר שינה עם ארון מלא",
      description: "חדר שינה עם ארון מלא מקיר לקיר, מגירות נסתרות ומראה מודרני.",
      image: '/photos/beedrooms/493279435_3992376671000613_3641866465839409284_n.jpg',
      category: "חדרי שינה",
      style: "מודרני",
      materials: "MDF מצופה למינציה",
      dimensions: "4x3 מטר",
      price: "48,000 ₪",
      features: ["ארון מלא", "מגירות נסתרות", "מראה מודרני", "תאורה LED"],
      location: "אבו סנאן 166"
    },
    {
      id: 7,
      title: "חדר שינה ראשי עם מראה",
      description: "חדר שינה ראשי עם ארונות מובנים ומראה גדולה, עיצוב אלגנטי ומודרני.",
      image: '/photos/beedrooms/493538194_3993153494256264_8531605647312620830_n.jpg',
      category: "חדרי שינה",
      style: "מודרני",
      materials: "MDF מצופה למינציה",
      dimensions: "4x3 מטר",
      price: "52,000 ₪",
      features: ["ארונות מובנים", "מראה גדולה", "עיצוב אלגנטי", "תאורה מובנית"],
      location: "אבו סנאן 166"
    },
    {
      id: 8,
      title: "חדר ילדים עם נושא צבעוני",
      description: "חדר ילדים עם נושא צבעוני, מיטה כפולה וארונות מעוצבים עם צבעים חמים.",
      image: '/photos/beedrooms/494071429_3992376651000615_1704838858269106062_n.jpg',
      category: "חדרי שינה",
      style: "מודרני",
      materials: "MDF מצופה למינציה",
      dimensions: "3x3 מטר",
      price: "38,000 ₪",
      features: ["נושא צבעוני", "מיטה כפולה", "ארונות מעוצבים", "צבעים חמים"],
      location: "אבו סנאן 166"
    }
  ];

  return (
    <>
      <SEO 
        title="חדרי שינה בהתאמה אישית - אלי מזיגית נגרות"
        description="חדרי שינה מעוצבים עם ארונות מובנים ופתרונות אחסון חכמים. חדרי שינה ראשיים, חדרי ילדים, חדרי נוער וחדרי אורחים בהתאמה אישית."
        url="https://elimazigit.com/bedrooms"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <img src="/images/logo.png" alt="אלי מזיגית נגרות" className="h-20 w-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              חדרי שינה מעוצבים
            </h1>
            <p className="text-xl text-neutral-600 mb-4 leading-relaxed">
              חדרי שינה עם ארונות מובנים ופתרונות אחסון חכמים. כל חדר מעוצב בהתאמה מלאה 
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
                  {bedroomPhotos.map((photo, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative group cursor-pointer" onClick={() => openModal(photo)}>
                        <div className="relative overflow-hidden rounded-2xl">
                          <img 
                            src={photo} 
                            alt={`חדר שינה ${index + 1}`}
                            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-all duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          
                          {/* Photo Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-bold mb-1">חדר שינה #{index + 1}</h3>
                                <p className="text-sm opacity-90">לחץ להגדלה</p>
                              </div>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                  {index + 1} / {bedroomPhotos.length}
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
                        style={{ width: `${((currentSlide + 1) / bedroomPhotos.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{bedroomPhotos.length}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Thumbnail Strip */}
            <div className="mt-8">
              <div className="flex justify-center space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                {bedroomPhotos.map((photo, index) => (
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

      {/* Bedroom Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              סוגי חדרי שינה
            </h2>
            <p className="text-xl text-neutral-600">
              פתרונות מותאמים לכל סוג של חדר שינה
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/bedrooms/modern" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">מודרני</h3>
              <p className="text-neutral-600 text-sm mb-4">עיצוב נקי ופונקציונלי עם קווים ישרים</p>
              <div className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                צפה בפרטים ←
              </div>
            </Link>
            
            <Link to="/bedrooms/classic" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">קלאסי</h3>
              <p className="text-neutral-600 text-sm mb-4">עיצוב מסורתי, עץ כהה, אלגנטיות</p>
              <div className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                צפה בפרטים ←
              </div>
            </Link>
            
            <Link to="/bedrooms/minimalist" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
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
              פרויקטי חדרי שינה
            </h2>
            <p className="text-xl text-neutral-600">
              {bedroomProjects.length} פרויקטים מעוצבים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bedroomProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showPrice={true} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              מה כלול בחדר השינה שלך?
            </h2>
            <p className="text-xl text-neutral-600">
              כל מה שצריך לחדר שינה מושלם
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">ארונות מובנים</h3>
              <p className="text-neutral-600">ארונות מותאמים בדיוק למידות החדר עם מגירות נסתרות</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">פתרונות אחסון</h3>
              <p className="text-neutral-600">מגירות, מדפים ופתרונות אחסון חכמים לכל הצרכים</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">תאורה מובנית</h3>
              <p className="text-neutral-600">תאורה LED מובנית בארונות ובמדפים</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">עיצוב מותאם</h3>
              <p className="text-neutral-600">עיצוב מותאם בדיוק לטעם ולסגנון שלך</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">חומרי גלם איכותיים</h3>
              <p className="text-neutral-600">עץ טבעי, MDF איכותי וחומרים עמידים</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">אחריות מלאה</h3>
              <p className="text-neutral-600">אחריות של שנתיים על כל העבודות</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              מוכן לתכנן את חדר השינה החדש שלך?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              קבל הצעת מחיר חינם ותתחיל ליצור את חדר השינה המושלם עבורך
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
                alt="חדר שינה"
                className="max-w-full max-h-[90vh] object-contain transition-transform duration-300 group-hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">חדר שינה מעוצב</h3>
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

export default Bedrooms;
