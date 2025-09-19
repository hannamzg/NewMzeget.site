import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const CountryKitchen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Country kitchen photos
  const countryKitchenPhotos = [
    '/photos/mhatbah/139458467_2819886834916275_850871242881701092_n.jpg',
    '/photos/mhatbah/3f4e1591-3a3f-411b-96e7-8dd72cad9a90.jpg',
    '/photos/mhatbah/5017d09e-3dba-48e7-8e95-27291f4dd469.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % countryKitchenPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + countryKitchenPhotos.length) % countryKitchenPhotos.length);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const countryKitchenProjects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
    }
  ];

  return (
    <>
      <SEO 
        title="מטבחים כפריים - אלי מזיגית נגרות"
        description="מטבחים כפריים עם עץ גלוי, צבעים חמים ועיצוב מסורתי. מטבחים מעוצבים עם חומרי גלם טבעיים ואווירה חמימה."
        url="https://elimazigit.com/kitchens/country"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <img src="/images/logo.png" alt="אלי מזיגית נגרות" className="h-20 w-auto" />
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🌾</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              מטבחים כפריים
            </h1>
            <p className="text-xl text-neutral-600 mb-4 leading-relaxed">
              מטבחים כפריים עם עץ גלוי, צבעים חמים ועיצוב מסורתי. 
              מטבחים מעוצבים עם חומרי גלם טבעיים ואווירה חמימה ומזמינה.
            </p>
            <p className="text-lg text-amber-600 font-semibold mb-8">
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
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white to-amber-50 p-4">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(${currentSlide * 100}%)` }}>
                  {countryKitchenPhotos.map((photo, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative group cursor-pointer" onClick={() => openModal(photo)}>
                        <div className="relative overflow-hidden rounded-2xl">
                          <img 
                            src={photo} 
                            alt={`מטבח כפרי ${index + 1}`}
                            className="w-full h-[550px] md:h-[650px] object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-bold mb-1">מטבח כפרי #{index + 1}</h3>
                                <p className="text-sm opacity-90">לחץ להגדלה</p>
                              </div>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                  {index + 1} / {countryKitchenPhotos.length}
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
                        style={{ width: `${((currentSlide + 1) / countryKitchenPhotos.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{countryKitchenPhotos.length}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="mt-8">
              <div className="flex justify-center space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                {countryKitchenPhotos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex-shrink-0 relative group transition-all duration-300 ${
                      index === currentSlide 
                        ? 'scale-110 ring-4 ring-amber-500 ring-offset-2' 
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
                      <div className="absolute inset-0 bg-amber-500/20 rounded-xl" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Kitchen Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              מאפיינים של מטבח כפרי
            </h2>
            <p className="text-xl text-neutral-600">
              מה שהופך מטבח לכפרי וחם
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">עץ גלוי</h3>
              <p className="text-neutral-600">עץ טבעי גלוי עם טקסטורה וצבעים חמים</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">צבעים חמים</h3>
              <p className="text-neutral-600">צבעים חמים כמו חום, בז' וקרם ליצירת אווירה חמימה</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">ידיות ברזל</h3>
              <p className="text-neutral-600">ידיות ברזל מעוצבות או נחושת למראה מסורתי</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">משטח עץ</h3>
              <p className="text-neutral-600">משטח עץ טבעי או משטח עם מראה עץ</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">עיצוב מסורתי</h3>
              <p className="text-neutral-600">עיצוב מסורתי עם פרטים קלאסיים וחמימים</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">אווירה חמימה</h3>
              <p className="text-neutral-600">אווירה חמימה ומזמינה המתאימה למשפחה</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section id="projects" className="section-padding bg-amber-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              פרויקטי מטבחים כפריים
            </h2>
            <p className="text-xl text-neutral-600">
              {countryKitchenProjects.length} פרויקטים מעוצבים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryKitchenProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showPrice={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="section-padding bg-amber-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              הקסם של המטבח הכפרי
            </h2>
            <p className="text-xl text-neutral-600">
              המטבח הכפרי מביא את הטבע והחמימות לבית שלך
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">יתרונות המטבח הכפרי</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">אווירה חמימה ומזמינה</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    המטבח הכפרי יוצר אווירה חמימה ומזמינה שמתאימה לכל המשפחה. העץ הטבעי והצבעים החמים 
                    יוצרים תחושה של בית אמיתי, מקום שבו כולם אוהבים להתאסף. זה לא רק מטבח - זה לב הבית.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">עמידות וטבעיות</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    עץ האלון הטבעי הוא חומר עמיד וחזק שיכול לשרוד שנים רבות. בניגוד לחומרים סינתטיים, 
                    העץ הטבעי מפתח פטינה יפה עם השנים, מה שהופך את המטבח ליפה יותר ויותר ככל שעובר הזמן.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">גמישות עיצובית</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    המטבח הכפרי מתאים לכל סוג של בית - מבית כפרי אמיתי ועד לדירה עירונית מודרנית. 
                    הוא יכול להשתלב עם סגנונות שונים ולהוסיף נופך חם ואישי לכל חלל.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">אלמנטים כפריים מיוחדים</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">עץ גלוי עם טקסטורה</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    העץ הגלוי במטבח הכפרי מציג את הטקסטורה הטבעית של העץ, כולל השדרות והגוונים הטבעיים. 
                    זה יוצר עניין ויזואלי ומחבר אותנו לטבע גם בתוך הבית.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">פרטים מסורתיים</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    ידיות ברזל מעוצבות, צירים נראים, ומגירות עם מנגנונים מסורתיים. כל פרט במטבח הכפרי 
                    מספר סיפור של אומנות מסורתית ואיכות שנבנתה לאורך שנים.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">צבעים מהטבע</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    הצבעים במטבח הכפרי נלקחים מהטבע - חום עץ, בז' חול, קרם חלב. אלה צבעים מרגיעים 
                    וחמימים שיוצרים תחושה של שלווה ורוגע.
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
              תהליך יצירת המטבח הכפרי
            </h2>
            <p className="text-xl text-neutral-600">
              איך אנחנו יוצרים את המטבח הכפרי המושלם עבורך
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">בחירת העץ</h3>
              <p className="text-neutral-600 leading-relaxed">
                בחירה מדויקת של סוג העץ המתאים - אלון, אגוז, או עץ אחר. 
                כל עץ מביא איתו אופי וצבע ייחודיים.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">עיצוב מותאם</h3>
              <p className="text-neutral-600 leading-relaxed">
                עיצוב מותאם אישית שמשלב אלמנטים כפריים עם הצרכים המודרניים. 
                תכנון מדויק של כל פרט ופרט.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">עיבוד העץ</h3>
              <p className="text-neutral-600 leading-relaxed">
                עיבוד מקצועי של העץ עם שמירה על הטקסטורה הטבעית. 
                ליטוש ועיבוד מדויק לכל חלק וחלק.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">הרכבה והתקנה</h3>
              <p className="text-neutral-600 leading-relaxed">
                הרכבה מדויקת והתקנה מקצועית. פיקוח על כל שלב 
                כדי להבטיח תוצאה מושלמת.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-amber-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              חומרי גלם למטבחים כפריים
            </h2>
            <p className="text-xl text-neutral-600">
              חומרי גלם טבעיים ואיכותיים למטבח כפרי
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">חומרי גלם מומלצים</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">עץ אלון טבעי</h4>
                    <p className="text-neutral-600">עץ אלון איכותי עם טקסטורה טבעית וצבעים חמים. עמיד וחזק לאורך שנים.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">משטח עץ</h4>
                    <p className="text-neutral-600">משטח עץ טבעי או משטח עם מראה עץ איכותי. עמיד בפני חום וניקוי קל.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">ידיות ברזל</h4>
                    <p className="text-neutral-600">ידיות ברזל או נחושת מעוצבות למראה מסורתי. עמידות וקלות לתחזוקה.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">צבעים חמים</h4>
                    <p className="text-neutral-600">צבעים חמים כמו חום, בז' וקרם ליצירת אווירה חמימה ומזמינה.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/photos/mhatbah/139458467_2819886834916275_850871242881701092_n.jpg" 
                alt="מטבח כפרי"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">מדוע עץ טבעי הוא הבחירה הטובה ביותר?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">טבעי ובריא</h4>
                <p className="text-neutral-600 text-sm">עץ טבעי הוא חומר בריא שאינו פולט חומרים רעילים ומשפר את איכות האוויר</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">עמידות גבוהה</h4>
                <p className="text-neutral-600 text-sm">עץ איכותי יכול לשרוד עשרות שנים עם תחזוקה מינימלית</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">יופי מתפתח</h4>
                <p className="text-neutral-600 text-sm">עץ טבעי מפתח פטינה יפה עם השנים והופך ליפה יותר</p>
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
              השקעה במטבח כפרי - השקעה בערכים
            </h2>
            <p className="text-xl text-neutral-600">
              מדוע מטבח כפרי הוא השקעה שמחזירה את עצמה
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">טווחי מחירים</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">מטבח כפרי בסיסי</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">95,000 - 120,000 ₪</p>
                  <p className="text-neutral-600">עץ אלון בסיסי, משטחי עץ, ידיות ברזל סטנדרטיות</p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">מטבח כפרי מתקדם</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">120,000 - 150,000 ₪</p>
                  <p className="text-neutral-600">עץ אלון איכותי, משטחי עץ מעוצבים, ידיות מעוצבות</p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">מטבח כפרי פרימיום</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">150,000+ ₪</p>
                  <p className="text-neutral-600">עץ אגוז או אלון מיוחד, עיצוב מותאם אישית, פרטים מעוצבים</p>
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
                    <h4 className="font-semibold text-neutral-900">ערך נדל"ן גבוה</h4>
                    <p className="text-neutral-600">מטבח כפרי איכותי מעלה את ערך הבית ומשפר את מכירתו</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">עמידות לטווח הארוך</h4>
                    <p className="text-neutral-600">עץ איכותי מחזיק מעמד עשרות שנים עם תחזוקה מינימלית</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">חיסכון בעלויות תחזוקה</h4>
                    <p className="text-neutral-600">עץ טבעי דורש פחות תחזוקה מחומרים סינתטיים</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">יופי מתפתח</h4>
                    <p className="text-neutral-600">עץ טבעי הופך ליפה יותר עם השנים ולא מאבד מערכו</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-amber-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              מוכן לתכנן את המטבח הכפרי שלך?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              קבל הצעת מחיר חינם ותתחיל ליצור את המטבח הכפרי המושלם עבורך
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+972525119685" className="bg-white text-amber-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-colors duration-200">
                התקשר עכשיו - 052-5119685
              </a>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-medium px-8 py-3 rounded-lg transition-all duration-200">
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
                alt="מטבח כפרי"
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

export default CountryKitchen;
