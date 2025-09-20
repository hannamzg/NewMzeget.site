import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/logo.png" 
                    alt="אלי מזיגית - לוגו" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">אלי מזיגית</h3>
                  <p className="text-neutral-400">נגרות מקצועית בהתאמה אישית</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-6 max-w-md">
                מעל 15 שנות ניסיון בנגרות מקצועית. אנו מתמחים ביצירת מטבחים, חדרי ארונות, 
                ספריות ורהיטים בהתאמה אישית עם חומרי גלם איכותיים ועיצוב מוקפד.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="tel:+972525119685"
                  className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-lg transition-colors duration-200"
                  aria-label="התקשר"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </a>
                <a
                  href="mailto:elimzghanna123@gmail.com"
                  className="bg-accent-500 hover:bg-accent-600 text-white p-3 rounded-lg transition-colors duration-200"
                  aria-label="שלח אימייל"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/elimzigit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-200"
                  aria-label="עקוב אחרינו בפייסבוק"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">קישורים מהירים</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    בית
                  </Link>
                </li>
                <li>
                  <Link to="/kitchens" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    מטבחים
                  </Link>
                </li>
                <li>
                  <Link to="/bedrooms" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    חדרי שינה
                  </Link>
                </li>
                <li>
                  <Link to="/storage" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    ספריות וארונות
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    צור קשר
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">פרטי יצירת קשר</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-neutral-300">אבו סנאן 166</p>
                    <p className="text-neutral-300">אבו סנאן, ישראל</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+972525119685" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    052-5119685
                  </a>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:elimzghanna123@gmail.com" className="text-neutral-300 hover:text-white transition-colors duration-200">
                    elimzghanna123@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-neutral-300">א׳-ה׳: 08:00-17:00</p>
                    <p className="text-neutral-300">ו׳: 08:00-14:00</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} אלי מזיגית - נגרות מקצועית. כל הזכויות שמורות.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors duration-200">
                מדיניות פרטיות
              </Link>
              <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors duration-200">
                תנאי שימוש
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
