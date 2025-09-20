import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const TraditionalLibrary = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Traditional library photos
  const traditionalLibraryPhotos = [
    '/photos/else/6f566845-accc-4a1b-94d2-bf5e5a145da2.jpg',
    '/photos/else/70611119_2390895297815433_8301619308639813632_n.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % traditionalLibraryPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + traditionalLibraryPhotos.length) % traditionalLibraryPhotos.length);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const traditionalLibraryProjects = [
    {
      id: 1,
      title: "ספרייה מסורתית עם עץ גלוי",
      description: "ספרייה מסורתית עם עץ גלוי, מדפים מעוצבים ועיצוב כפרי. מתאימה לסלון או חדר עבודה.",
      image: '/photos/else/6f566845-accc-4a1b-94d2-bf5e5a145da2.jpg',
      category: "ספריות",
      style: "מסורתי",
      materials: "עץ אלון טבעי",
      dimensions: "3x2.5 מטר",
      price: "30,000 ₪",
      features: ["עץ גלוי", "מדפים מעוצבים", "עיצוב כפרי", "פרטים מסורתיים"],
      location: "אבו סנאן 166"
    },
    {
      id: 2,
      title: "ספרייה מסורתית מלאה",
      description: "ספרייה מסורתית מלאה עם עץ גלוי, מדפים מעוצבים ודלתות עץ. עיצוב מסורתי וכפרי.",
      image: '/photos/else/70611119_2390895297815433_8301619308639813632_n.jpg',
      category: "ספריות",
      style: "מסורתי",
      materials: "עץ אלון טבעי",
      dimensions: "4x2.5 מטר",
      price: "40,000 ₪",
      features: ["עץ גלוי", "מדפים מעוצבים", "דלתות עץ", "עיצוב מסורתי"],
      location: "אבו סנאן 166"
    }
  ];

  return (
    <>
      <SEO 
        title="ספריות מסורתיות - אלי מזיגית נגרות"
        description="ספריות מסורתיות עם עיצוב כפרי ומסורתי. עץ גלוי, מדפים מעוצבים ופרטים מסורתיים."
        url="https://elimazigit.com/storage/traditional-library"
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
              ספריות מסורתיות
            </h1>
            <p className="text-xl text-neutral-600 mb-4 leading-relaxed">
              ספריות מסורתיות עם עיצוב כפרי ומסורתי. 
              עץ גלוי, מדפים מעוצבים ופרטים מסורתיים עם חומרי גלם איכותיים.
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
                  {traditionalLibraryPhotos.map((photo, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative group cursor-pointer" onClick={() => openModal(photo)}>
                        <div className="relative overflow-hidden rounded-2xl">
                          <img 
                            src={photo} 
                            alt={`ספרייה מסורתית ${index + 1}`}
                            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-all duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-bold mb-1">ספרייה מסורתית #{index + 1}</h3>
                                <p className="text-sm opacity-90">לחץ להגדלה</p>
                              </div>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                  {index + 1} / {traditionalLibraryPhotos.length}
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
                        style={{ width: `${((currentSlide + 1) / traditionalLibraryPhotos.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{traditionalLibraryPhotos.length}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="mt-8">
              <div className="flex justify-center space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                {traditionalLibraryPhotos.map((photo, index) => (
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

      {/* Traditional Library Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              מאפיינים של ספרייה מסורתית
            </h2>
            <p className="text-xl text-neutral-600">
              מה שהופך ספרייה למסורתית וכפרית
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
              <p className="text-neutral-600">עץ אלון גלוי עם טקסטורה טבעית וצבעים חמים</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">פרטים מסורתיים</h3>
              <p className="text-neutral-600">פרטים מעוצבים עם עיטורים מסורתיים וכפריים</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">מדפים מעוצבים</h3>
              <p className="text-neutral-600">מדפים מעוצבים עם עיצוב מסורתי וכפרי</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">עיצוב כפרי</h3>
              <p className="text-neutral-600">עיצוב כפרי עם פרטים מסורתיים וחמימים</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">חמימות</h3>
              <p className="text-neutral-600">מראה חם ומזמין המתאים לבית כפרי</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">איכות גבוהה</h3>
              <p className="text-neutral-600">חומרי גלם איכותיים ועמידים לאורך שנים</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section id="projects" className="section-padding bg-amber-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              פרויקטי ספריות מסורתיות
            </h2>
            <p className="text-xl text-neutral-600">
              {traditionalLibraryProjects.length} פרויקטים מעוצבים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traditionalLibraryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showPrice={true} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-amber-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              מוכן לתכנן את הספרייה המסורתית שלך?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              קבל הצעת מחיר חינם ותתחיל ליצור את הספרייה המסורתית המושלמת עבורך
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
                alt="ספרייה מסורתית"
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

export default TraditionalLibrary;


