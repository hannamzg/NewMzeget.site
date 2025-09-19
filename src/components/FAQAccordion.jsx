import { useState } from 'react';

const FAQAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const defaultFAQs = [
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
    }
  ];

  const faqsToShow = faqs.length > 0 ? faqs : defaultFAQs;

  return (
    <div className="space-y-4">
      {faqsToShow.map((faq, index) => (
        <div key={index} className="card">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-medium text-neutral-900 pr-4">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 text-primary-500 transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <div className="border-t border-neutral-200 pt-4">
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
