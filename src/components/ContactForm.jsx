import { useState } from 'react';

const ContactForm = ({ isModal = false, onClose = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'מטבח',
    'חדר שינה',
    'ספרייה',
    'חדר ארונות',
    'ארון אמבטיה',
    'רהיטים נוספים',
    'אחר'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a comprehensive email with all form data
      const subject = encodeURIComponent(`בקשה להצעת מחיר - ${formData.projectType || 'פרויקט נגרות'}`);
      const body = encodeURIComponent(`
שלום אלי,

קיבלתי בקשה חדשה להצעת מחיר:

פרטי הלקוח:
שם: ${formData.name}
טלפון: ${formData.phone}
אימייל: ${formData.email}
סוג פרויקט: ${formData.projectType || 'לא צוין'}

פרטי הפרויקט:
${formData.message}

תאריך: ${new Date().toLocaleDateString('he-IL')}
שעה: ${new Date().toLocaleTimeString('he-IL')}

בברכה,
${formData.name}
      `);

      // Create mailto link
      const mailtoLink = `mailto:elimzghanna123@gmail.com?subject=${subject}&body=${body}`;
      
      // Try to open email client
      const emailWindow = window.open(mailtoLink, '_blank');
      
      // If email client doesn't open, show alternative contact methods
      setTimeout(() => {
        if (!emailWindow || emailWindow.closed) {
          // Show WhatsApp and phone options
          const whatsappMessage = encodeURIComponent(`שלום אלי, אני מעוניין בהצעת מחיר עבור ${formData.projectType || 'פרויקט נגרות'}. שם: ${formData.name}, טלפון: ${formData.phone}`);
          const whatsappLink = `https://wa.me/972525119685?text=${whatsappMessage}`;
          
          // Show contact options
          alert(`אם תוכנת המייל לא נפתחה, אנא צור קשר בדרכים הבאות:\n\n1. WhatsApp: https://wa.me/972525119685\n2. טלפון: 052-5119685\n3. אימייל: elimzghanna123@gmail.com`);
          
          // Open WhatsApp as backup
          window.open(whatsappLink, '_blank');
        }
      }, 1000);
      
      // Show success message
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        projectType: ''
      });
      
      // Close modal if applicable
      if (isModal && onClose) {
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 3000);
      }
      
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
      
      // Show error message with alternative contact methods
      alert('שגיאה בשליחת הטופס. אנא צור קשר ישירות:\n\nטלפון: 052-5119685\nWhatsApp: https://wa.me/972525119685\nאימייל: elimzghanna123@gmail.com');
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            שם מלא *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
            placeholder="הכנס את שמך המלא"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            טלפון *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
            placeholder="052-1234567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          אימייל
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
          סוג פרויקט
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
        >
          <option value="">בחר סוג פרויקט</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          הודעה
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
          placeholder="ספר לנו על הפרויקט שלך, מידות, תקציב משוער וכל פרט נוסף..."
        />
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'שולח...' : 'שלח בקשה להצעת מחיר'}
        </button>
        
        <div className="text-center">
          <p className="text-sm text-neutral-500 mb-3">או צור קשר ישירות:</p>
          <div className="flex gap-3">
            <a
              href="https://wa.me/972525119685"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+972525119685"
              className="flex-1 btn-outline text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              התקשר
            </a>
          </div>
        </div>
      </div>
    </form>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-neutral-900">צור קשר</h2>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
                aria-label="סגור"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">הבקשה נשלחה בהצלחה!</h3>
                <p className="text-neutral-600 mb-4">נחזור אליך עם הצעת מחיר תוך 24 שעות</p>
                <div className="text-sm text-neutral-500">
                  <p>לשאלות דחופות:</p>
                  <p>טלפון: 052-5119685</p>
                  <p>WhatsApp: <a href="https://wa.me/972525119685" className="text-primary-600 hover:text-primary-700">לחץ כאן</a></p>
                </div>
              </div>
            ) : (
              formContent
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">קבל הצעת מחיר חינם</h2>
        <p className="text-neutral-600">
          מלא את הפרטים ונחזור אליך עם הצעת מחיר מפורטת תוך 24 שעות
        </p>
      </div>
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">הבקשה נשלחה בהצלחה!</h3>
          <p className="text-neutral-600 mb-4">נחזור אליך עם הצעת מחיר תוך 24 שעות</p>
          <div className="text-sm text-neutral-500">
            <p>לשאלות דחופות:</p>
            <p>טלפון: 052-5119685</p>
            <p>WhatsApp: <a href="https://wa.me/972525119685" className="text-primary-600 hover:text-primary-700">לחץ כאן</a></p>
          </div>
        </div>
      ) : (
        formContent
      )}
    </div>
  );
};

export default ContactForm;
