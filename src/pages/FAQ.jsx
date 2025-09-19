import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';

const FAQ = () => {
  const faqs = [
    {
      question: "כמה זמן לוקח להכין מטבח מלא?",
      answer: "בדרך כלל 4-8 שבועות מהמדידה הסופית, בהתאם למורכבות הפרויקט ועומס העבודה. מטבח פשוט יכול להיות מוכן תוך 3-4 שבועות, בעוד מטבח מורכב עם עיצוב מיוחד יכול לקחת עד 10 שבועות."
    },
    {
      question: "אילו חומרים מומלצים למטבח?",
      answer: "אנו עובדים עם חומרי גלם איכותיים: עץ אלון, אגוז, דובדבן, MDF מצופה למינציה, פורמייקה, ועץ מלא. כל חומר מתאים לצרכים שונים ותקציבים שונים. נשמח להמליץ על החומר המתאים ביותר לפרויקט שלך."
    },
    {
      question: "האם יש אחריות על העבודה?",
      answer: "כן, אנו מעניקים אחריות של שנתיים על כל העבודות שלנו. האחריות כוללת תיקונים של פגמים בייצור והתקנה. במקרה של בעיה, נטפל בה ללא עלות נוספת."
    },
    {
      question: "מה תהליך המדידות וההתקנה?",
      answer: "התהליך כולל: 1) פגישת ייעוץ ראשונית 2) מדידה מקצועית של החלל 3) הכנת תכנית מפורטת והצעת מחיר 4) אישור הפרויקט 5) ייצור במפעל 6) התקנה מקצועית במקום. כל שלב מתבצע בתיאום מלא איתך."
    },
    {
      question: "האם אתם מתקינים את הרהיטים?",
      answer: "כן, אנו מספקים שירות התקנה מקצועי. הצוות שלנו מתמחה בהתקנת כל סוגי הרהיטים ומבטיח התקנה מושלמת. ההתקנה כלולה במחיר הפרויקט."
    },
    {
      question: "איך מחושב המחיר?",
      answer: "המחיר נקבע לפי מספר גורמים: גודל הפרויקט, סוג החומרים, מורכבות העיצוב, כמות העבודה הנדרשת, וזמן הייצור. אנו מספקים הצעת מחיר מפורטת לאחר המדידה והתכנון."
    },
    {
      question: "האם אפשר לראות דוגמאות של עבודות קודמות?",
      answer: "כמובן! תוכל לראות גלריית פרויקטים באתר שלנו, או להגיע לנגרייה לראות דוגמאות פיזיות. נשמח להראות לך עבודות דומות לפרויקט שאתה מתכנן."
    },
    {
      question: "מה ההבדל בין מטבח מודרני לכפרי?",
      answer: "מטבח מודרני מאופיין בקווים נקיים, ידיות נסתרות, צבעים ניטרליים וחומרים כמו למינציה או זכוכית. מטבח כפרי מאופיין בעץ גלוי, ידיות בולטות, צבעים חמים וטקסטורות טבעיות. נשמח לעזור לך לבחור את הסגנון המתאים לבית שלך."
    },
    {
      question: "האם אתם עובדים עם מעצבי פנים?",
      answer: "כן, אנו עובדים בשיתוף פעולה עם מעצבי פנים ואדריכלים. נשמח לקבל תכניות עיצוב ולהתאים את הפרויקט לדרישות העיצוב."
    },
    {
      question: "מה קורה אם אני רוצה לשנות משהו באמצע העבודה?",
      answer: "שינויים קטנים אפשריים בדרך כלל ללא עלות נוספת. שינויים משמעותיים עשויים לדרוש תוספת תשלום ותוספת זמן. נדון בכל שינוי איתך מראש ונספק הערכת עלות מעודכנת."
    },
    {
      question: "האם אתם מספקים שירות תיקונים?",
      answer: "כן, אנו מספקים שירות תיקונים לכל העבודות שלנו. תיקונים הנדרשים עקב פגמים בייצור או התקנה מבוצעים ללא עלות במסגרת האחריות. תיקונים אחרים מבוצעים בתשלום."
    },
    {
      question: "איך אני יכול לתחזק את הרהיטים?",
      answer: "אנו מספקים הוראות תחזוקה מפורטות לכל פרויקט. באופן כללי, מומלץ לנקות עם חומרי ניקוי עדינים, להימנע מחשיפה ישירה לשמש, ולטפל בפגמים קטנים מיד כשהם מופיעים."
    }
  ];

  return (
    <>
      <SEO 
        title="שאלות נפוצות - אלי מזיגית נגרות"
        description="תשובות לשאלות הנפוצות על נגרות, מטבחים, חדרי שינה ופרויקטים בהתאמה אישית. מידע על תהליכי עבודה, מחירים, חומרים ואחריות."
        url="https://elimazigit.com/faq"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              שאלות נפוצות
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              כאן תמצאו תשובות לשאלות הנפוצות ביותר על נגרות, מטבחים, חדרי שינה 
              ופרויקטים בהתאמה אישית. אם יש לכם שאלות נוספות, נשמח לעזור!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+972525119685" className="btn-primary">
                התקשר לייעוץ - 052-5119685
              </a>
              <a href="/contact" className="btn-outline">
                שלח שאלה
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              לא מצאתם את התשובה שחיפשתם?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              נשמח לענות על כל שאלה נוספת ולעזור לכם לתכנן את הפרויקט המושלם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+972525119685" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-colors duration-200">
                התקשר עכשיו - 052-5119685
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-3 rounded-lg transition-all duration-200">
                שלח הודעה
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">זמינות 24/7</h3>
              <p className="text-neutral-600">נענה על שאלותיכם בכל שעות היום</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">אחריות מלאה</h3>
              <p className="text-neutral-600">אחריות של שנתיים על כל העבודות</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">שירות מהיר</h3>
              <p className="text-neutral-600">תשובה תוך 24 שעות לכל פנייה</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
