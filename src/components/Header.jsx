import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'בית', href: '/' },
    { name: 'מטבחים', href: '/kitchens' },
    { name: 'חדרי שינה', href: '/bedrooms' },
    { name: 'ספריות וארונות', href: '/storage' },
    { name: 'צור קשר', href: '/contact' },
    { name: 'שאלות נפוצות', href: '/faq' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 space-x-reverse">
            <img src="/images/logo.png" alt="אלי מזיגית נגרות" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-neutral-900">אלי מזיגית</h1>
              <p className="text-sm text-neutral-600">נגרות מקצועית</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <a
              href="tel:+972525119685"
              className="btn-primary text-sm"
            >
              התקשר עכשיו
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
            aria-label="תפריט"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+972525119685"
                className="btn-primary text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                התקשר עכשיו
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
