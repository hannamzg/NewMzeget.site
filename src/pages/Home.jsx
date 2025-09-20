import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const Home = () => {
  // Sample projects for homepage
  const featuredProjects = [
    {
      id: 1,
      title: "מטבח מודרני עם אי מרכזי",
      description: "מטבח מודרני עם אי מרכזי, ארונות לבנים ומשטח שיש. עיצוב נקי ופונקציונלי.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      category: "מטבחים",
      style: "מודרני",
      materials: "MDF מצופה למינציה, שיש",
      features: ["אי מרכזי", "מגירות נסתרות", "תאורה LED"]
    },
    {
      id: 2,
      title: "חדר שינה כפרי עם ארונות מובנים",
      description: "חדר שינה כפרי עם ארונות מובנים מעץ אלון טבעי. עיצוב חם ומזמין.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
      category: "חדרי שינה",
      style: "כפרי",
      materials: "עץ אלון טבעי",
      features: ["ארונות מובנים", "מגירות נסתרות", "מראה כפרי"]
    },
    {
      id: 3,
      title: "ספרייה מודרנית עם מדפים פתוחים",
      description: "ספרייה מודרנית עם מדפים פתוחים ומדפים סגורים. עיצוב מינימליסטי ואלגנטי.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      category: "ספריות",
      style: "מודרני",
      materials: "MDF מצופה למינציה",
      features: ["מדפים פתוחים", "מדפים סגורים", "תאורה מובנית"]
    }
  ];

  const services = [
    {
      title: "מטבחים",
      description: "מטבחים בהתאמה אישית עם חומרי גלם איכותיים ועיצוב מוקפד",
      icon: "🍽️",
      link: "/kitchens"
    },
    {
      title: "חדרי שינה",
      description: "חדרי שינה עם ארונות מובנים ופתרונות אחסון חכמים",
      icon: "🛏️",
      link: "/bedrooms"
    },
    {
      title: "ספריות וארונות",
      description: "ספריות, ארונות ופתרונות אחסון מותאמים אישית",
      icon: "📚",
      link: "/storage"
    },
    {
      title: "רהיטים מיוחדים",
      description: "רהיטים בהתאמה אישית לפי דרישות מיוחדות",
      icon: "🪑",
      link: "/contact"
    }
  ];

  const testimonials = [
    {
      name: "דאני מזור",
      location: "אבו סנאן",
      text: "אלי בנה לנו מטבח מדהים! העבודה מקצועית, החומרים איכותיים והתוצאה מעבר לציפיות. ממליץ בחום!",
      rating: 5
    },
    {
      name: "משה",
      location: "רמת גן",
      text: "הארונות בחדר השינה מושלמים! כל פרט מעוצב בקפידה וההתקנה הייתה מקצועית. תודה רבה!",
      rating: 5
    },
    {
      name: "ולדי",
      location: "פתח תקווה",
      text: "הספרייה שיצר אלי היא פשוט מושלמת. עיצוב מודרני ואיכות בלתי מתפשרת. בהחלט נחזור!",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="אלי מזיגית - נגרות מקצועית בהתאמה אישית | מטבחים, חדרי שינה, ספריות"
        description="אלי מזיגית - נגרות מקצועית עם מעל 30 שנות ניסיון. מטבחים מותאמים אישית, חדרי שינה, ספריות וארונות. חומרי גלם איכותיים, עיצוב מוקפד ומחירים תחרותיים. שירות בכל הארץ - 052-5119685"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                אלי מזיגית
                <span className="block text-gradient">נגרות מקצועית</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-neutral-700">בהתאמה אישית</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                מעל 30 שנות ניסיון בנגרות מקצועית. אנו מתמחים ביצירת מטבחים מותאמים אישית, חדרי שינה, 
                ספריות וארונות עם חומרי גלם איכותיים, עיצוב מוקפד ומחירים תחרותיים.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+972525119685" className="btn-primary text-center">
                  התקשר עכשיו - 052-5119685
                </a>
                <a href="#contact" className="btn-outline text-center">
                  קבל הצעת מחיר חינם
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src='/photos/mhatbah/mt.jpg'
                alt="מטבח מודרני מעוצב"
                className="rounded-2xl shadow-medium"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-medium">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">30+</div>
                  <div className="text-sm text-neutral-600">שנות ניסיון</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              השירותים שלנו
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              אנו מציעים מגוון רחב של שירותי נגרות מקצועיים, כל פרויקט מעוצב ומבוצע בקפידה
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="card p-8 text-center hover:shadow-medium transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              מה הלקוחות שלנו אומרים
            </h2>
            <p className="text-xl text-neutral-600">
              המלצות אמיתיות מלקוחות מרוצים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              עקוב אחרינו בפייסבוק
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              הישאר מעודכן עם הפרויקטים החדשים שלנו, טיפים לעיצוב הבית והצעות מיוחדות
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  למה לעקוב אחרינו?
                </h3>
                <ul className="space-y-4 text-neutral-600">
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <svg className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>צפייה בפרויקטים חדשים ויצירתיים</span>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <svg className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>טיפים מקצועיים לעיצוב הבית</span>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <svg className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>הצעות מיוחדות ומבצעים</span>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <svg className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>תגובות והמלצות מלקוחות</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="https://www.facebook.com/elimzigit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    עקוב אחרינו בפייסבוק
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-medium p-6">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Felimzigit%2F&tabs=timeline&width=500&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="500"
                  height="400"
                  style={{ border: 'none', overflow: 'hidden', width: '100%' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-primary-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                מוכן להתחיל את הפרויקט שלך?
              </h2>
              <p className="text-xl opacity-90">
                קבל הצעת מחיר חינם ותתחיל ליצור את החלל המושלם עבורך
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
