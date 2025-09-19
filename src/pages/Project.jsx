import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Project = () => {
  const { id } = useParams();

  // Sample project data - in a real app, this would come from an API
  const projectData = {
    1: {
      id: 1,
      title: "מטבח מודרני עם אי מרכזי",
      description: "מטבח מודרני עם אי מרכזי, ארונות לבנים ומשטח שיש. עיצוב נקי ופונקציונלי עם תאורה מובנית.",
      fullDescription: "פרויקט מטבח מודרני מרהיב שנבנה עבור משפחה באבו סנאן. המטבח כולל אי מרכזי מרשים, ארונות לבנים עם ידיות נסתרות, ומשטח שיש איכותי. העיצוב מתמקד בקווים נקיים ובפונקציונליות מקסימלית.",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
      ],
      category: "מטבחים",
      style: "מודרני",
      materials: "MDF מצופה למינציה, שיש",
      dimensions: "4x3 מטר",
      price: "85,000 ₪",
      duration: "6 שבועות",
      features: ["אי מרכזי", "מגירות נסתרות", "תאורה LED", "משטח שיש", "ארונות לבנים", "ידיות נסתרות"],
      specifications: {
        "חומרי גלם": "MDF מצופה למינציה איכותית, משטח שיש טבעי",
        "מידות": "4x3 מטר עם אי מרכזי 1.2x0.8 מטר",
        "צבעים": "לבן מט, אפור בהיר",
        "תאורה": "תאורה LED מובנית בארונות ובאי",
        "אביזרים": "ידיות נסתרות, מגירות עם מנגנון soft-close"
      }
    },
    2: {
      id: 2,
      title: "חדר שינה כפרי עם ארונות מובנים",
      description: "חדר שינה כפרי עם ארונות מובנים מעץ אלון, מגירות נסתרות ומראה כפרי חם.",
      fullDescription: "חדר שינה כפרי מרהיב שנבנה עבור זוג צעיר ברמת גן. החדר כולל ארונות מובנים מעץ אלון טבעי, מגירות נסתרות, ותאורה מובנית. העיצוב מתמקד בצבעים חמים ובמראה כפרי מסורתי.",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
      ],
      category: "חדרי שינה",
      style: "כפרי",
      materials: "עץ אלון טבעי",
      dimensions: "4x3 מטר",
      price: "45,000 ₪",
      duration: "4 שבועות",
      features: ["ארונות מובנים", "מגירות נסתרות", "מראה כפרי", "תאורה מובנית", "עץ אלון", "ידיות ברזל"],
      specifications: {
        "חומרי גלם": "עץ אלון טבעי, לכה שקופה",
        "מידות": "4x3 מטר עם ארונות מקיר לקיר",
        "צבעים": "גווני עץ טבעיים, ברזל שחור",
        "תאורה": "תאורה LED מובנית בארונות",
        "אביזרים": "ידיות ברזל מעוצבות, מגירות עם מנגנון soft-close"
      }
    }
  };

  const project = projectData[id] || projectData[1];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">פרויקט לא נמצא</h1>
          <Link to="/" className="btn-primary">חזור לעמוד הראשי</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.title} - אלי מזיגית נגרות`}
        description={project.description}
        image={project.images[0]}
        url={`https://elimazigit.com/project/${project.id}`}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.style}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+972525119685" className="btn-primary text-center">
                  התקשר לייעוץ - 052-5119685
                </a>
                <a href="#gallery" className="btn-outline text-center">
                  צפה בגלריה
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={project.images[0]}
                alt={project.title}
                className="rounded-2xl shadow-medium w-full"
                loading="eager"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-medium">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{project.price}</div>
                  <div className="text-sm text-neutral-600">החל מ-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">פרטי הפרויקט</h2>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">תכונות מיוחדות</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 space-x-reverse">
                      <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">מפרט טכני</h3>
                <div className="bg-neutral-50 rounded-lg p-6">
                  <dl className="space-y-4">
                    {Object.entries(project.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col sm:flex-row sm:items-center">
                        <dt className="font-medium text-neutral-900 sm:w-1/3 mb-1 sm:mb-0">{key}:</dt>
                        <dd className="text-neutral-600 sm:w-2/3">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">פרטי הפרויקט</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">קטגוריה:</span>
                    <span className="font-medium text-neutral-900">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">סגנון:</span>
                    <span className="font-medium text-neutral-900">{project.style}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">חומרים:</span>
                    <span className="font-medium text-neutral-900">{project.materials}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">מידות:</span>
                    <span className="font-medium text-neutral-900">{project.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">משך זמן:</span>
                    <span className="font-medium text-neutral-900">{project.duration}</span>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary-600">{project.price}</div>
                    <div className="text-sm text-neutral-600">החל מ-</div>
                  </div>
                  
                  <div className="space-y-3">
                    <a href="tel:+972525119685" className="btn-primary w-full text-center">
                      התקשר עכשיו
                    </a>
                    <a href="mailto:elimzghanna123@gmail.com" className="btn-outline w-full text-center">
                      שלח הודעה
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              גלריית תמונות
            </h2>
            <p className="text-xl text-neutral-600">
              צפה בתמונות נוספות מהפרויקט
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={image}
                  alt={`${project.title} - תמונה ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-soft group-hover:shadow-medium transition-shadow duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              פרויקטים דומים
            </h2>
            <p className="text-xl text-neutral-600">
              פרויקטים נוספים שיכולים לעניין אותך
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample related projects */}
            <div className="card overflow-hidden group hover:shadow-medium transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
                alt="פרויקט דומה"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">מטבח כפרי עם עץ גלוי</h3>
                <p className="text-neutral-600 text-sm mb-4">מטבח כפרי עם עץ אלון גלוי ועיצוב מסורתי</p>
                <Link to="/project/2" className="btn-outline w-full text-center">
                  צפה בפרויקט
                </Link>
              </div>
            </div>
            
            <div className="card overflow-hidden group hover:shadow-medium transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
                alt="פרויקט דומה"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">חדר שינה מינימליסטי</h3>
                <p className="text-neutral-600 text-sm mb-4">חדר שינה עם עיצוב נקי ופונקציונלי</p>
                <Link to="/project/3" className="btn-outline w-full text-center">
                  צפה בפרויקט
                </Link>
              </div>
            </div>
            
            <div className="card overflow-hidden group hover:shadow-medium transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                alt="פרויקט דומה"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">ספרייה מודרנית</h3>
                <p className="text-neutral-600 text-sm mb-4">ספרייה עם מדפים פתוחים ועיצוב מודרני</p>
                <Link to="/project/4" className="btn-outline w-full text-center">
                  צפה בפרויקט
                </Link>
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
              מוכן להתחיל פרויקט דומה?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              קבל הצעת מחיר חינם ותתחיל ליצור את הפרויקט המושלם עבורך
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
    </>
  );
};

export default Project;
