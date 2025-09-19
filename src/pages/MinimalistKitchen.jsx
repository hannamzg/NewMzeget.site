import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const MinimalistKitchen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Minimalist kitchen photos
  const minimalistKitchenPhotos = [
    '/photos/mhatbah/139609917_2819890588249233_1418210908941531446_n.jpg',
    '/photos/mhatbah/d04b0c93-e4de-402c-bb5e-14e5fd9970d5.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % minimalistKitchenPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + minimalistKitchenPhotos.length) % minimalistKitchenPhotos.length);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const minimalistKitchenProjects = [
    {
      id: 1,
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
      id: 2,
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
    }
  ];

  return (
    <>
      <SEO 
        title="מטבחים מינימליסטיים - אלי מזיגית נגרות"
        description="מטבחים מינימליסטיים עם פשטות, פונקציונליות ועיצוב נקי. מטבחים מעוצבים עם קווים נקיים וצבעים ניטרליים."
        url="https://elimazigit.com/kitchens/minimalist"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-neutral-100 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <img src="/images/logo.png" alt="אלי מזיגית נגרות" className="h-20 w-auto" />
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              מטבחים מינימליסטיים
            </h1>
            <p className="text-xl text-neutral-600 mb-4 leading-relaxed">
              מטבחים מינימליסטיים עם פשטות, פונקציונליות ועיצוב נקי. 
              מטבחים מעוצבים עם קווים נקיים וצבעים ניטרליים.
            </p>
            <p className="text-lg text-gray-600 font-semibold mb-8">
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
          
          {/* Photo Gallery */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-50 p-4">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(${currentSlide * 100}%)` }}>
                  {minimalistKitchenPhotos.map((photo, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative group cursor-pointer" onClick={() => openModal(photo)}>
                        <div className="relative overflow-hidden rounded-2xl">
                          <img 
                            src={photo} 
                            alt={`מטבח מינימליסטי ${index + 1}`}
                            className="w-full h-[550px] md:h-[650px] object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-bold mb-1">מטבח מינימליסטי #{index + 1}</h3>
                                <p className="text-sm opacity-90">לחץ להגדלה</p>
                              </div>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                  {index + 1} / {minimalistKitchenPhotos.length}
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
              
              {/* Navigation Buttons */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-20 group"
              >
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-20 group"
              >
                <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
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
                        style={{ width: `${((currentSlide + 1) / minimalistKitchenPhotos.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{minimalistKitchenPhotos.length}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="mt-8">
              <div className="flex justify-center space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                {minimalistKitchenPhotos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex-shrink-0 relative group transition-all duration-300 ${
                      index === currentSlide 
                        ? 'scale-110 ring-4 ring-gray-500 ring-offset-2' 
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
                      <div className="absolute inset-0 bg-gray-500/20 rounded-xl" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Kitchen Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              מאפיינים של מטבח מינימליסטי
            </h2>
            <p className="text-xl text-neutral-600">
              מה שהופך מטבח למינימליסטי ונקי
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">פשטות</h3>
              <p className="text-neutral-600">עיצוב פשוט ונקי ללא עיטורים מיותרים</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">פונקציונליות</h3>
              <p className="text-neutral-600">כל אלמנט משרת מטרה ספציפית ופונקציונלית</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">עיצוב נקי</h3>
              <p className="text-neutral-600">קווים נקיים וישרים ללא הפרעות ויזואליות</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">ידיות נסתרות</h3>
              <p className="text-neutral-600">ידיות נסתרות או מנגנון פתיחה נסתר</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">צבעים ניטרליים</h3>
              <p className="text-neutral-600">צבעים ניטרליים כמו לבן, אפור ושחור</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">מגירות נסתרות</h3>
              <p className="text-neutral-600">מגירות עם מנגנון פתיחה נסתר למראה נקי</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section id="projects" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              פרויקטי מטבחים מינימליסטיים
            </h2>
            <p className="text-xl text-neutral-600">
              {minimalistKitchenProjects.length} פרויקטים מעוצבים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {minimalistKitchenProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showPrice={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              הפילוסופיה של המינימליזם
            </h2>
            <p className="text-xl text-neutral-600">
              המטבח המינימליסטי הוא יותר מסתם עיצוב - זה דרך חיים
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">יתרונות המטבח המינימליסטי</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">פשטות ובהירות</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    המטבח המינימליסטי מבוסס על עקרון "פחות זה יותר". הוא יוצר חלל נקי ובהיר 
                    שמאפשר להתמקד במה שחשוב באמת - הבישול והאוכל. ללא הפרעות ויזואליות, 
                    המטבח הופך למקום של שלווה וריכוז.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">קלות תחזוקה</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    עם פחות אלמנטים ופרטים, המטבח המינימליסטי דורש פחות תחזוקה וניקוי. 
                    כל משטח נגיש וקל לניקוי, מה שחוסך זמן יקר ומאפשר לשמור על המטבח 
                    נקי ומסודר תמיד.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">יעילות מקסימלית</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    כל אלמנט במטבח המינימליסטי משרת מטרה ספציפית. אין מקום למיותר או לא פונקציונלי. 
                    זה יוצר מטבח יעיל וחכם שמאפשר בישול נוח ומהיר עם כל מה שצריך בהישג יד.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">אלמנטים מינימליסטיים מיוחדים</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">קווים נקיים וישרים</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    המטבח המינימליסטי מתבסס על קווים נקיים וישרים ללא עיטורים מיותרים. 
                    זה יוצר מראה נקי ומסודר שמעניק תחושה של סדר וארגון מושלם.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">מנגנונים נסתרים</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    ידיות נסתרות, מגירות עם פתיחה בלחיצה, ומנגנונים חכמים שמאפשרים גישה 
                    נוחה לתוכן תוך שמירה על מראה נקי ונקי מעיטורים מיותרים.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">צבעים ניטרליים</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    הצבעים במטבח המינימליסטי ניטרליים וקלאסיים - לבן, אפור, שחור. 
                    אלה צבעים שלא יוצאים מהאופנה ויוצרים בסיס נקי לכל סוג של עיצוב.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              תהליך יצירת המטבח המינימליסטי
            </h2>
            <p className="text-xl text-neutral-600">
              איך אנחנו יוצרים את המטבח המינימליסטי המושלם עבורך
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">ניתוח צרכים</h3>
              <p className="text-neutral-600 leading-relaxed">
                ניתוח מדויק של הצרכים והרגלי הבישול. 
                זיהוי מה באמת נחוץ ומה מיותר.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">תכנון נקי</h3>
              <p className="text-neutral-600 leading-relaxed">
                תכנון מדויק המבוסס על עקרונות מינימליסטיים. 
                כל אלמנט נבחר בקפידה לפי הפונקציונליות שלו.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">ייצור מדויק</h3>
              <p className="text-neutral-600 leading-relaxed">
                ייצור מדויק עם דגש על איכות ודיוק. 
                כל פרט מעוצב בקפידה ללא פשרות.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">התקנה מושלמת</h3>
              <p className="text-neutral-600 leading-relaxed">
                התקנה מדויקת שמבטיחה תוצאה מושלמת. 
                כל פרט במקום הנכון והמדויק.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              חומרי גלם למטבחים מינימליסטיים
            </h2>
            <p className="text-xl text-neutral-600">
              חומרי גלם נקיים ופונקציונליים למטבח מינימליסטי
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">חומרי גלם מומלצים</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">MDF מצופה למינציה</h4>
                    <p className="text-neutral-600">חומר עמיד וקל לניקוי עם מראה נקי. עמיד בפני לחות וטמפרטורות גבוהות.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">משטחי קוורץ</h4>
                    <p className="text-neutral-600">משטחי קוורץ נקיים ועמידים. עמידים בפני חום, כתמים ושריטות.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">מנגנונים נסתרים</h4>
                    <p className="text-neutral-600">מנגנוני פתיחה נסתרים למראה נקי. פתרון אלגנטי ופונקציונלי.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">צבעים ניטרליים</h4>
                    <p className="text-neutral-600">צבעים ניטרליים כמו לבן, אפור ושחור. צבעים שלא יוצאים מהאופנה.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/photos/mhatbah/139609917_2819890588249233_1418210908941531446_n.jpg" 
                alt="מטבח מינימליסטי"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">מדוע מינימליזם הוא הבחירה החכמה?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">פשטות ובהירות</h4>
                <p className="text-neutral-600 text-sm">מינימליזם יוצר חלל נקי ובהיר שמאפשר להתמקד במה שחשוב</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">יעילות מקסימלית</h4>
                <p className="text-neutral-600 text-sm">כל אלמנט משרת מטרה ספציפית ללא מיותר או לא פונקציונלי</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">עיצוב נצחי</h4>
                <p className="text-neutral-600 text-sm">העיצוב המינימליסטי לא יוצא מהאופנה ומשמר את ערכו</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost and Investment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              השקעה במטבח מינימליסטי - השקעה בפשטות
            </h2>
            <p className="text-xl text-neutral-600">
              מדוע מטבח מינימליסטי הוא השקעה שמחזירה את עצמה
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">טווחי מחירים</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-500 pl-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">מטבח מינימליסטי בסיסי</h4>
                  <p className="text-2xl font-bold text-gray-600 mb-2">55,000 - 75,000 ₪</p>
                  <p className="text-neutral-600">MDF מצופה, משטחי קוורץ בסיסיים, מנגנונים סטנדרטיים</p>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">מטבח מינימליסטי מתקדם</h4>
                  <p className="text-2xl font-bold text-gray-600 mb-2">75,000 - 95,000 ₪</p>
                  <p className="text-neutral-600">חומרי גלם איכותיים, משטחי קוורץ מתקדמים, מנגנונים נסתרים</p>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">מטבח מינימליסטי פרימיום</h4>
                  <p className="text-2xl font-bold text-gray-600 mb-2">95,000+ ₪</p>
                  <p className="text-neutral-600">חומרי גלם יוקרתיים, טכנולוגיות מתקדמות, עיצוב מותאם אישית</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">יתרונות כלכליים</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">חיסכון בעלויות תחזוקה</h4>
                    <p className="text-neutral-600">מטבח מינימליסטי דורש פחות תחזוקה וניקוי</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">יעילות אנרגטית</h4>
                    <p className="text-neutral-600">מטבח מינימליסטי מאפשר שימוש יעיל יותר באנרגיה</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">עיצוב נצחי</h4>
                    <p className="text-neutral-600">העיצוב המינימליסטי לא יוצא מהאופנה ומשמר את ערכו</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">ערך נדל"ן</h4>
                    <p className="text-neutral-600">מטבח מינימליסטי מעלה את ערך הנדל"ן ומשפר את מכירת הבית</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              מוכן לתכנן את המטבח המינימליסטי שלך?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              קבל הצעת מחיר חינם ותתחיל ליצור את המטבח המינימליסטי המושלם עבורך
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+972525119685" className="bg-white text-gray-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-colors duration-200">
                התקשר עכשיו - 052-5119685
              </a>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-gray-600 font-medium px-8 py-3 rounded-lg transition-all duration-200">
                שלח הודעה
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-7xl max-h-full group">
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
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={modalImage}
                alt="מטבח מינימליסטי"
                className="max-w-full max-h-[90vh] object-contain transition-transform duration-300 group-hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MinimalistKitchen;
