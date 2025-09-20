import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const Storage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Storage photos from else folder
  const storagePhotos = [
    '/photos/else/494019260_3992377524333861_3298556453641261166_n.jpg',
    '/photos/else/495282898_4006142402957373_7791888312326666985_n.jpg',
    '/photos/else/495928833_4007166942854919_5664893369073884393_n.jpg',
    '/photos/else/496926984_4007166902854923_3133161704785308882_n.jpg',
    '/photos/else/5b309f55-bb01-4e91-a6d0-8f8823685373.jpg',
    '/photos/else/6f566845-accc-4a1b-94d2-bf5e5a145da2.jpg',
    '/photos/else/70611119_2390895297815433_8301619308639813632_n.jpg',
    '/photos/else/70684017_2390895307815432_7003091278757888000_n.jpg',
    '/photos/else/80001432_2468275273410768_3530089717150253056_n.jpg',
    '/photos/else/fdfd8429-89f4-498f-909e-c0492a499523.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % storagePhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + storagePhotos.length) % storagePhotos.length);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const storageProjects = [
    {
      id: 1,
      title: "ספרייה מודרנית עם מדפים פתוחים",
      description: "ספרייה מודרנית עם מדפים פתוחים ומדפים סגורים. עיצוב מינימליסטי ואלגנטי עם תאורה מובנית.",
      image: '/photos/else/494019260_3992377524333861_3298556453641261166_n.jpg',
      category: "ספריות",
      style: "מודרני",
      materials: "MDF מצופה למינציה",
      dimensions: "3x2.5 מטר",
      price: "25,000 ₪",
      features: ["מדפים פתוחים", "מדפים סגורים", "תאורה מובנית", "עיצוב מינימליסטי"],
      location: "אבו סנאן 166"
    },
    {
      id: 2,
      title: "חדר ארונות מלא",
      description: "חדר ארונות מלא עם מגירות נסתרות, מדפים ומראה מודרני. פתרון אחסון מושלם.",
      image: '/photos/else/495282898_4006142402957373_7791888312326666985_n.jpg',
      category: "חדרי ארונות",
      style: "מודרני",
      materials: "MDF מצופה למינציה",
      dimensions: "4x2 מטר",
      price: "35,000 ₪",
      features: ["מגירות נסתרות", "מדפים", "מראה מודרני", "פתרון אחסון"],
      location: "אבו סנאן 166"
    },
    {
      id: 3,
      title: "ארון אמבטיה עם מראה",
      description: "ארון אמבטיה עם מראה מובנית, מגירות נסתרות ועיצוב מודרני. עמיד ללחות.",
      image: '/photos/else/495928833_4007166942854919_5664893369073884393_n.jpg',
      category: "ארונות אמבטיה",
      style: "מודרני",
      materials: "MDF עמיד ללחות",
      dimensions: "1.5x0.6 מטר",
      price: "8,000 ₪",
      features: ["מראה מובנית", "מגירות נסתרות", "עמיד ללחות", "עיצוב מודרני"],
      location: "אבו סנאן 166"
    },
    {
      id: 4,
      title: "ספרייה כפרית מעץ",
      description: "ספרייה כפרית מעץ אלון טבעי עם מדפים פתוחים ועיצוב מסורתי וחם.",
      image: '/photos/else/496926984_4007166902854923_3133161704785308882_n.jpg',
      category: "ספריות",
      style: "כפרי",
      materials: "עץ אלון טבעי",
      dimensions: "2.5x2 מטר",
      price: "18,000 ₪",
      features: ["עץ אלון", "מדפים פתוחים", "עיצוב כפרי", "מראה טבעי"],
      location: "אבו סנאן 166"
    },
    {
      id: 5,
      title: "ארון קיר מלא",
      description: "ארון קיר מלא עם מגירות נסתרות, מדפים ותאורה מובנית. עיצוב קלאסי ואלגנטי.",
      image: '/photos/else/5b309f55-bb01-4e91-a6d0-8f8823685373.jpg',
      category: "ארונות",
      style: "קלאסי",
      materials: "עץ אגוז טבעי",
      dimensions: "3x2.5 מטר",
      price: "28,000 ₪",
      features: ["מגירות נסתרות", "מדפים", "תאורה מובנית", "עיצוב קלאסי"],
      location: "אבו סנאן 166"
    },
    {
      id: 6,
      title: "ספרייה מינימליסטית",
      description: "ספרייה מינימליסטית עם קווים נקיים, מדפים פתוחים ועיצוב פשוט ואלגנטי.",
      image: '/photos/else/6f566845-accc-4a1b-94d2-bf5e5a145da2.jpg',
      category: "ספריות",
      style: "מינימליסטי",
      materials: "MDF מצופה למינציה",
      dimensions: "2x1.5 מטר",
      price: "15,000 ₪",
      features: ["קווים נקיים", "מדפים פתוחים", "עיצוב פשוט", "מראה אלגנטי"],
      location: "אבו סנאן 166"
    },
    {
      id: 7,
      title: "ארון קיר מודרני",
      description: "ארון קיר מודרני עם מגירות נסתרות, מדפים ותאורה LED מובנית. עיצוב נקי ופונקציונלי.",
      image: '/photos/else/70611119_2390895297815433_8301619308639813632_n.jpg',
      category: "ארונות",
      style: "מודרני",
      materials: "MDF מצופה למינציה",
      dimensions: "3x2.5 מטר",
      price: "30,000 ₪",
      features: ["מגירות נסתרות", "תאורה LED", "עיצוב נקי", "פונקציונלי"],
      location: "אבו סנאן 166"
    },
    {
      id: 8,
      title: "ספרייה קלאסית מעץ",
      description: "ספרייה קלאסית מעץ אגוז עם מדפים פתוחים וסגורים. עיצוב מסורתי ואלגנטי.",
      image: '/photos/else/70684017_2390895307815432_7003091278757888000_n.jpg',
      category: "ספריות",
      style: "קלאסי",
      materials: "עץ אגוז טבעי",
      dimensions: "2.5x2 מטר",
      price: "22,000 ₪",
      features: ["עץ אגוז", "מדפים פתוחים", "מדפים סגורים", "עיצוב קלאסי"],
      location: "אבו סנאן 166"
    },
    {
      id: 9,
      title: "חדר ארונות כפרי",
      description: "חדר ארונות כפרי עם עץ אלון גלוי, מגירות נסתרות ועיצוב מסורתי וחם.",
      image: '/photos/else/80001432_2468275273410768_3530089717150253056_n.jpg',
      category: "חדרי ארונות",
      style: "כפרי",
      materials: "עץ אלון טבעי",
      dimensions: "4x2 מטר",
      price: "40,000 ₪",
      features: ["עץ אלון גלוי", "מגירות נסתרות", "עיצוב כפרי", "מראה חם"],
      location: "אבו סנאן 166"
    },
    {
      id: 10,
      title: "ארון אמבטיה כפרי",
      description: "ארון אמבטיה כפרי עם עץ אלון, מראה מובנית ועיצוב מסורתי. עמיד ללחות.",
      image: '/photos/else/fdfd8429-89f4-498f-909e-c0492a499523.jpg',
      category: "ארונות אמבטיה",
      style: "כפרי",
      materials: "עץ אלון עמיד ללחות",
      dimensions: "1.5x0.6 מטר",
      price: "12,000 ₪",
      features: ["עץ אלון", "מראה מובנית", "עיצוב כפרי", "עמיד ללחות"],
      location: "אבו סנאן 166"
    }
  ];

  return (
    <>
      <SEO 
        title="ספריות וארונות בהתאמה אישית - אלי מזיגית נגרות"
        description="ספריות, ארונות וחדרי ארונות בהתאמה אישית. פתרונות אחסון חכמים עם עיצוב מוקפד וחומרי גלם איכותיים."
        url="https://elimazigit.com/storage"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <img src="/images/logo.png" alt="אלי מזיגית נגרות" className="h-20 w-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              ספריות וארונות מעוצבים
            </h1>
            <p className="text-xl text-neutral-600 mb-4 leading-relaxed">
              פתרונות אחסון חכמים עם עיצוב מוקפד. ספריות, ארונות וחדרי ארונות 
              בהתאמה אישית עם חומרי גלם איכותיים.
            </p>
            <p className="text-lg text-primary-600 font-semibold mb-8">
              מיקום הנגרייה: אבו סנאן 166
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/972525119685?text=שלום אלי! אני מעוניין בייעוץ עבור פתרון אחסון. אשמח לקבל הצעת מחיר." className="btn-primary">
                שלח לייעוץ ב-WhatsApp
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
                  {storagePhotos.map((photo, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative group cursor-pointer" onClick={() => openModal(photo)}>
                        <div className="relative overflow-hidden rounded-2xl">
                          <img 
                            src={photo} 
                            alt={`פתרון אחסון ${index + 1}`}
                            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-all duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          
                          {/* Photo Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-bold mb-1">פתרון אחסון #{index + 1}</h3>
                                <p className="text-sm opacity-90">לחץ להגדלה</p>
                              </div>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                  {index + 1} / {storagePhotos.length}
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
                        style={{ width: `${((currentSlide + 1) / storagePhotos.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{storagePhotos.length}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Thumbnail Strip */}
            <div className="mt-8">
              <div className="flex justify-center space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                {storagePhotos.map((photo, index) => (
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

      {/* Storage Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              סוגי פתרונות אחסון
            </h2>
            <p className="text-xl text-neutral-600">
              מגוון רחב של פתרונות אחסון לכל צורך
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/storage/modern-library" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">ספריות מודרניות</h3>
              <p className="text-neutral-600 text-sm mb-4">מדפים מעוצבים, תאורה מובנית, עיצוב נקי</p>
              <div className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                צפה בפרטים ←
              </div>
            </Link>
            
            <Link to="/storage/classic-library" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">ספריות קלאסיות</h3>
              <p className="text-neutral-600 text-sm mb-4">עץ כהה, פרטים מעוצבים, עיצוב מסורתי</p>
              <div className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                צפה בפרטים ←
              </div>
            </Link>
            
            <Link to="/storage/traditional-library" className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">ספריות מסורתיות</h3>
              <p className="text-neutral-600 text-sm mb-4">עץ גלוי, עיצוב כפרי, פרטים מסורתיים</p>
              <div className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                צפה בפרטים ←
              </div>
            </Link>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛁</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">ארונות אמבטיה</h3>
              <p className="text-neutral-600 text-sm">ארונות עמידים ללחות עם מראות</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section id="projects" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              פרויקטי אחסון
            </h2>
            <p className="text-xl text-neutral-600">
              {storageProjects.length} פרויקטים מעוצבים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storageProjects.map((project) => (
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
              מה כלול בפתרון האחסון שלך?
            </h2>
            <p className="text-xl text-neutral-600">
              כל מה שצריך לפתרון אחסון מושלם
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">מדפים מותאמים</h3>
              <p className="text-neutral-600">מדפים פתוחים וסגורים במידות מותאמות</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">מגירות נסתרות</h3>
              <p className="text-neutral-600">מגירות נסתרות לניצול מקסימלי של החלל</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">תאורה מובנית</h3>
              <p className="text-neutral-600">תאורה LED מובנית במדפים ובמגירות</p>
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
              מוכן לתכנן את פתרון האחסון החדש שלך?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              קבל הצעת מחיר חינם ותתחיל ליצור את פתרון האחסון המושלם עבורך
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
                alt="פתרון אחסון"
                className="max-w-full max-h-[90vh] object-contain transition-transform duration-300 group-hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">פתרון אחסון מעוצב</h3>
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

export default Storage;
