import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const ModernKitchen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Modern kitchen photos
  const modernKitchenPhotos = [
    '/photos/mhatbah/27000012-e199-4e8b-88d5-e8ae6e74dec7.jpg',
    '/photos/mhatbah/139279670_2819888698249422_8337821421472006119_n.jpg',
    '/photos/mhatbah/49729384_2218638805041084_7241681346320400384_n.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % modernKitchenPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + modernKitchenPhotos.length) % modernKitchenPhotos.length);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const modernKitchenProjects = [
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
      id: 3,
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
    }
  ];

  return (
    <>
      <SEO 
        title="מטבחים מודרניים - אלי מזיגית נגרות"
        description="מטבחים מודרניים עם קווים נקיים, צבעים ניטרליים ועיצוב מינימליסטי. מטבחים מעוצבים עם חומרי גלם איכותיים וטכנולוגיה מתקדמת."
        url="https://elimazigit.com/kitchens/modern"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <img src="/images/logo.png" alt="אלי מזיגית נגרות" className="h-20 w-auto" />
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🏠</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              מטבחים מודרניים
            </h1>
            <p className="text-xl text-neutral-600 mb-4 leading-relaxed">
              מטבחים מודרניים עם קווים נקיים, צבעים ניטרליים ועיצוב מינימליסטי. 
              מטבחים מעוצבים עם חומרי גלם איכותיים וטכנולוגיה מתקדמת.
            </p>
            <p className="text-lg text-primary-600 font-semibold mb-8">
              מיקום הנגרייה: אבו סנאן 166
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/972525119685?text=שלום אלי! אני מעוניין בייעוץ עבור מטבח מודרני. אשמח לקבל הצעת מחיר." className="btn-primary">
                שלח לייעוץ ב-WhatsApp
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
                  {modernKitchenPhotos.map((photo, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative group cursor-pointer" onClick={() => openModal(photo)}>
                        <div className="relative overflow-hidden rounded-2xl">
                          <img 
                            src={photo} 
                            alt={`מטבח מודרני ${index + 1}`}
                            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-all duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-bold mb-1">מטבח מודרני #{index + 1}</h3>
                                <p className="text-sm opacity-90">לחץ להגדלה</p>
                              </div>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                  {index + 1} / {modernKitchenPhotos.length}
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
                        style={{ width: `${((currentSlide + 1) / modernKitchenPhotos.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{modernKitchenPhotos.length}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="mt-8">
              <div className="flex justify-center space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                {modernKitchenPhotos.map((photo, index) => (
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

      {/* Modern Kitchen Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              מאפיינים של מטבח מודרני
            </h2>
            <p className="text-xl text-neutral-600">
              מה שהופך מטבח למודרני ואלגנטי
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">קווים נקיים</h3>
              <p className="text-neutral-600">עיצוב מינימליסטי עם קווים ישרים ונקיים ללא עיטורים מיותרים</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">צבעים ניטרליים</h3>
              <p className="text-neutral-600">שימוש בצבעים ניטרליים כמו לבן, אפור ושחור ליצירת מראה נקי</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">תאורה מובנית</h3>
              <p className="text-neutral-600">תאורת LED מובנית בארונות ולתאורה כללית מודרנית</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">משטחי שיש</h3>
              <p className="text-neutral-600">משטחי שיש או קוורץ איכותיים למראה אלגנטי ועמיד</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">מגירות נסתרות</h3>
              <p className="text-neutral-600">מגירות עם מנגנון פתיחה נסתר למראה נקי ומודרני</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">אי מרכזי</h3>
              <p className="text-neutral-600">אי מרכזי פונקציונלי עם מקום ישיבה וחסכון במקום</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section id="projects" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              פרויקטי מטבחים מודרניים
            </h2>
            <p className="text-xl text-neutral-600">
              {modernKitchenProjects.length} פרויקטים מעוצבים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modernKitchenProjects.map((project) => (
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
              מדוע לבחור במטבח מודרני?
            </h2>
            <p className="text-xl text-neutral-600">
              המטבח המודרני הוא יותר מסתם עיצוב - זה אורח חיים
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">יתרונות המטבח המודרני</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">פונקציונליות מקסימלית</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    המטבח המודרני מתמקד בפונקציונליות מעל הכל. כל אלמנט במטבח משרת מטרה ספציפית, 
                    החל מהארונות החכמים ועד למשטחי העבודה המעוצבים. העיצוב המודרני מאפשר ניצול מקסימלי 
                    של החלל, עם פתרונות אחסון חכמים ומערכות ארגון מתקדמות.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">קלות תחזוקה</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    חומרי הגלם המודרניים כמו MDF מצופה למינציה ומשטחי קוורץ, נועדו להיות עמידים וקלים לתחזוקה. 
                    הם עמידים בפני כתמים, חום ולחות, ומאפשרים ניקוי מהיר ויעיל. זה חוסך זמן יקר ומאפשר 
                    לשמור על המטבח נקי ומסודר תמיד.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">עיצוב נצחי</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    המטבח המודרני לא יוצא מהאופנה. העיצוב המינימליסטי והקווים הנקיים יישארו רלוונטיים 
                    שנים רבות קדימה. זה השקעה חכמה לטווח הארוך, שתשמור על הערך של הבית ותמשיך לרצות 
                    גם בעתיד.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">טכנולוגיות מתקדמות</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">מנגנוני פתיחה חכמים</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    המטבח המודרני כולל מנגנוני פתיחה מתקדמים כמו פתיחה בלחיצה, פתיחה אוטומטית 
                    ומערכות נעילה חכמות. אלה מאפשרים גישה נוחה לתוכן הארונות תוך שמירה על מראה נקי 
                    ונקי מעיטורים מיותרים.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">תאורה חכמה</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    מערכות תאורה מובנות עם LED חסכוני באנרגיה, כולל תאורה מתכווננת, חיישני תנועה 
                    ותאורה צבעונית. זה יוצר אווירה מושלמת לכל סוג של בישול ופעילות במטבח.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">מערכות אחסון מתקדמות</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    מגירות עם מנגנוני החלקה שקטים, מערכות אחסון מתקפלות, מגירות עמוקות 
                    ומערכות ארגון פנימיות. כל אלה מאפשרים ניצול מקסימלי של החלל וארגון מושלם.
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
              תהליך התכנון והבנייה
            </h2>
            <p className="text-xl text-neutral-600">
              איך אנחנו בונים את המטבח המודרני המושלם עבורך
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">ייעוץ ראשוני</h3>
              <p className="text-neutral-600 leading-relaxed">
                פגישה ראשונית להבנת הצרכים, התקציב והסגנון הרצוי. 
                נבחן את החלל הקיים ונציע פתרונות מותאמים אישית.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">מדידות מדויקות</h3>
              <p className="text-neutral-600 leading-relaxed">
                מדידות מקצועיות של החלל עם כל הפרטים הטכניים. 
                נקח בחשבון צנרת, חשמל, אוורור וכל האלמנטים הקיימים.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">תכנון מפורט</h3>
              <p className="text-neutral-600 leading-relaxed">
                יצירת תוכנית מפורטת עם שרטוטים תלת-ממדיים. 
                בחירת חומרי גלם, צבעים וכל הפרטים הטכניים.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">ייצור והתקנה</h3>
              <p className="text-neutral-600 leading-relaxed">
                ייצור מקצועי בנגרייה שלנו והתקנה מדויקת על ידי צוות מקצועי. 
                פיקוח על כל שלב בתהליך הבנייה.
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
              חומרי גלם למטבחים מודרניים
            </h2>
            <p className="text-xl text-neutral-600">
              חומרי גלם איכותיים ומתקדמים למטבח מודרני
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">חומרי גלם מומלצים</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">MDF מצופה למינציה</h4>
                    <p className="text-neutral-600">חומר עמיד וקל לניקוי עם מגוון צבעים וטקסטורות. עמיד בפני לחות וטמפרטורות גבוהות.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">משטחי שיש וקוורץ</h4>
                    <p className="text-neutral-600">שיש טבעי או קוורץ למראה אלגנטי ועמידות גבוהה. עמיד בפני חום, כתמים ושריטות.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">מנגנוני פתיחה נסתרים</h4>
                    <p className="text-neutral-600">מנגנונים מתקדמים לפתיחה חלקה ונעילה אוטומטית. פתרון אלגנטי למראה נקי.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">תאורת LED</h4>
                    <p className="text-neutral-600">תאורה מובנית חסכונית ואסתטית. חיישני תנועה ותאורה מתכווננת.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/photos/mhatbah/27000012-e199-4e8b-88d5-e8ae6e74dec7.jpg" 
                alt="מטבח מודרני"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">מדוע לבחור בחומרי גלם איכותיים?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">עמידות לטווח הארוך</h4>
                <p className="text-neutral-600 text-sm">חומרי גלם איכותיים מבטיחים שהמטבח יישאר יפה ופונקציונלי שנים רבות</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">חיסכון באנרגיה</h4>
                <p className="text-neutral-600 text-sm">מערכות תאורה חכמות וחומרים מבודדים חוסכים באנרגיה ובעלויות</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">ערך נדל"ן</h4>
                <p className="text-neutral-600 text-sm">מטבח מודרני איכותי מעלה את ערך הנדל"ן ומשפר את מכירת הבית</p>
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
              השקעה במטבח מודרני - השקעה חכמה
            </h2>
            <p className="text-xl text-neutral-600">
              מדוע מטבח מודרני הוא השקעה שמחזירה את עצמה
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">טווחי מחירים</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">מטבח בסיסי מודרני</h4>
                  <p className="text-2xl font-bold text-primary-600 mb-2">65,000 - 85,000 ₪</p>
                  <p className="text-neutral-600">MDF מצופה, משטחי קוורץ בסיסיים, מנגנונים סטנדרטיים</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">מטבח מתקדם מודרני</h4>
                  <p className="text-2xl font-bold text-primary-600 mb-2">85,000 - 120,000 ₪</p>
                  <p className="text-neutral-600">חומרי גלם איכותיים, משטחי שיש, מנגנונים מתקדמים, תאורה מובנית</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">מטבח פרימיום מודרני</h4>
                  <p className="text-2xl font-bold text-primary-600 mb-2">120,000+ ₪</p>
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
                    <h4 className="font-semibold text-neutral-900">עלייה בערך הנדל"ן</h4>
                    <p className="text-neutral-600">מטבח מודרני יכול להעלות את ערך הבית ב-10-15%</p>
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
                    <p className="text-neutral-600">חומרי גלם איכותיים דורשים פחות תחזוקה ותיקונים</p>
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
                    <p className="text-neutral-600">מערכות תאורה חכמות ומכשירים חסכוניים חוסכים בחשמל</p>
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
                    <p className="text-neutral-600">השקעה חד-פעמית שמחזיקה מעמד שנים רבות</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              מוכן לתכנן את המטבח המודרני שלך?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              קבל הצעת מחיר חינם ותתחיל ליצור את המטבח המודרני המושלם עבורך
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
                alt="מטבח מודרני"
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

export default ModernKitchen;
