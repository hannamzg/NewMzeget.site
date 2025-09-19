import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact = () => {
  return (
    <>
      <SEO 
        title="צור קשר - אלי מזיגית נגרות | הצעת מחיר חינם"
        description="צור קשר עם אלי מזיגית לקבלת הצעת מחיר חינם. נגרות מקצועית עם מעל 30 שנות ניסיון. מטבחים, חדרי שינה, ספריות וארונות בהתאמה אישית. זמין 24/7 - 052-5119685"
        url="https://elimazigit.com/contact"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              צור קשר
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              מוכן להתחיל את הפרויקט שלך? נשמח לשמוע ממך ולעזור לך ליצור את החלל המושלם.
              מלא את הטופס או התקשר אלינו ישירות.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">פרטי יצירת קשר</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">טלפון</h3>
                      <a href="tel:+972525119685" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                        052-5119685
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">זמין בימים א׳-ה׳ 08:00-17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">אימייל</h3>
                      <a href="mailto:elimzghanna123@gmail.com" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                        elimzghanna123@gmail.com
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">נחזור אליך תוך 24 שעות</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">כתובת</h3>
                      <p className="text-neutral-700">אבו סנאן 166</p>
                      <p className="text-neutral-700">אבו סנאן, ישראל</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">שעות פעילות</h3>
                      <p className="text-neutral-700">א׳-ה׳: 08:00-17:00</p>
                      <p className="text-neutral-700">ו׳: 08:00-14:00</p>
                      <p className="text-neutral-700">ש׳: סגור</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="card p-8 bg-green-50 border-green-200">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">WhatsApp</h3>
                    <p className="text-neutral-600 text-sm">שלח הודעה מהירה</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/972525119685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center"
                >
                  שלח הודעה ב-WhatsApp
                </a>
              </div>

              {/* Map */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">מיקום הנגרייה</h3>
                <div className="bg-neutral-100 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.7724630538537!2d35.1682306!3d32.95701630000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dcc61a08da46d%3A0xb9c18fc46c6841ad!2s166%2C%20Abu%20Snan!5e0!3m2!1sen!2sil!4v1758322560308!5m2!1sen!2sil" 
                    width="100%" 
                    height="300" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-80"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-neutral-500 mb-2">אבו סנאן 166, אבו סנאן</p>
                  <a 
                    href="https://maps.app.goo.gl/WLCGBYfHYuSwExta9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
                  >
                    פתח ב-Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              שאלות נפוצות
            </h2>
            <p className="text-xl text-neutral-600">
              תשובות לשאלות הנפוצות ביותר
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="card">
                <button className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200">
                  <span className="text-lg font-medium text-neutral-900 pr-4">
                    כמה זמן לוקח לקבל הצעת מחיר?
                  </span>
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-neutral-600 leading-relaxed">
                      אנו מספקים הצעת מחיר ראשונית תוך 24 שעות מקבלת הפנייה. הצעת מחיר מפורטת תינתן לאחר המדידה והתכנון.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <button className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200">
                  <span className="text-lg font-medium text-neutral-900 pr-4">
                    האם אתם מספקים שירות התקנה?
                  </span>
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-neutral-600 leading-relaxed">
                      כן, אנו מספקים שירות התקנה מקצועי. ההתקנה כלולה במחיר הפרויקט ומבוצעת על ידי צוות מקצועי.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <button className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200">
                  <span className="text-lg font-medium text-neutral-900 pr-4">
                    מה כלול במחיר הפרויקט?
                  </span>
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-neutral-600 leading-relaxed">
                      המחיר כולל: חומרי גלם, ייצור, התקנה, אביזרים בסיסיים ואחריות. לא כלולים: משטחי עבודה מיוחדים, אביזרים יוקרתיים או שינויים לאחר התחלת העבודה.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a href="/faq" className="btn-outline">
                צפה בכל השאלות הנפוצות
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
