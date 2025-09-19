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
