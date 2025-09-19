# אלי מזיגית - אתר נגרות מקצועית

אתר סטטי מקצועי ב-React עבור נגריית "אלי מזיגית" - נגרות מקצועית בהתאמה אישית.

## תכונות האתר

- 🏠 **דף ראשי** עם HERO מרשים וגלריית פרויקטים
- 🍽️ **דף מטבחים** עם קטגוריות וסינון מתקדם
- 🛏️ **דף חדרי שינה** עם סוגים שונים של חדרים
- 📚 **דף ספריות וארונות** עם פתרונות אחסון
- 📞 **דף צור קשר** עם טופס ופרטי יצירת קשר
- ❓ **דף שאלות נפוצות** עם תשובות מפורטות
- 📱 **עיצוב רספונסיבי** המתאים לכל המכשירים
- 🔍 **SEO מובנה** עם JSON-LD ו-meta tags
- ⚡ **ביצועים מהירים** עם Vite ו-Tailwind CSS

## טכנולוגיות

- **React 18** - ספריית UI מודרנית
- **Vite** - כלי בנייה מהיר
- **Tailwind CSS** - עיצוב מהיר ומודרני
- **React Router** - ניווט בין דפים
- **React Helmet Async** - ניהול meta tags
- **Unsplash Images** - תמונות איכותיות

## התקנה והרצה

### דרישות מוקדמות
- Node.js (גרסה 16 ומעלה)
- npm או yarn

### שלבי התקנה

1. **שכפול הפרויקט**
```bash
git clone <repository-url>
cd eli-mazigit-carpentry
```

2. **התקנת תלויות**
```bash
npm install
```

3. **הרצת השרת המקומי**
```bash
npm run dev
```

האתר יהיה זמין בכתובת: `http://localhost:3000`

### פקודות נוספות

```bash
# בניית הפרויקט לפרודקשן
npm run build

# תצוגה מקדימה של הבנייה
npm run preview

# בדיקת קוד
npm run lint
```

## מבנה הפרויקט

```
src/
├── components/          # רכיבי React
│   ├── Header.jsx      # כותרת האתר
│   ├── Footer.jsx      # כותרת תחתונה
│   ├── SEO.jsx         # ניהול SEO
│   ├── ContactForm.jsx # טופס יצירת קשר
│   ├── ProjectCard.jsx # כרטיס פרויקט
│   ├── FAQAccordion.jsx # רכיב שאלות נפוצות
│   └── FloatingContactButton.jsx # כפתור צף
├── pages/              # דפי האתר
│   ├── Home.jsx        # דף ראשי
│   ├── Kitchens.jsx    # דף מטבחים
│   ├── Bedrooms.jsx    # דף חדרי שינה
│   ├── Storage.jsx     # דף ספריות וארונות
│   ├── Project.jsx     # דף פרויקט בודד
│   ├── Contact.jsx     # דף צור קשר
│   └── FAQ.jsx         # דף שאלות נפוצות
├── App.jsx             # רכיב ראשי
├── main.jsx           # נקודת כניסה
└── index.css          # עיצוב Tailwind
```

## התאמה אישית

### שינוי תוכן

1. **פרטי יצירת קשר** - עדכן ב-`src/components/SEO.jsx` ו-`src/components/Footer.jsx`
2. **פרויקטים** - עדכן ב-`src/pages/Kitchens.jsx`, `src/pages/Bedrooms.jsx`, `src/pages/Storage.jsx`
3. **שאלות נפוצות** - עדכן ב-`src/pages/FAQ.jsx`
4. **תמונות** - החלף תמונות ב-`public/images/` או עדכן URLs ברכיבים

### שינוי עיצוב

1. **צבעים** - עדכן ב-`tailwind.config.js`
2. **פונטים** - עדכן ב-`index.html` ו-`src/index.css`
3. **סגנונות** - הוסף ב-`src/index.css`

### הוספת דפים חדשים

1. צור קובץ חדש ב-`src/pages/`
2. הוסף route ב-`src/App.jsx`
3. הוסף קישור ב-`src/components/Header.jsx`

## פריסה (Deployment)

### Vercel (מומלץ)

1. **התקנת Vercel CLI**
```bash
npm i -g vercel
```

2. **פריסה**
```bash
vercel
```

3. **הגדרת דומיין** - ב-Vercel Dashboard

### Netlify

1. **בניית הפרויקט**
```bash
npm run build
```

2. **גרירת תיקיית `dist`** ל-Netlify Drop

3. **הגדרת דומיין** - ב-Netlify Dashboard

### GitHub Pages

1. **התקנת gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **הוספת script ל-package.json**
```json
"deploy": "gh-pages -d dist"
```

3. **פריסה**
```bash
npm run build
npm run deploy
```

## SEO ואופטימיזציה

### JSON-LD
האתר כולל JSON-LD מובנה עבור:
- LocalBusiness schema
- Product schema (לפרויקטים)
- FAQ schema

### Meta Tags
כל דף כולל:
- Title tag מותאם
- Meta description
- Open Graph tags
- Twitter Card tags
- Canonical URL

### ביצועים
- תמונות עם lazy loading
- CSS ו-JS מינימליים
- תמונות מותאמות למכשירים שונים

## תמיכה ועזרה

### בעיות נפוצות

1. **שגיאות התקנה**
   - ודא שיש לך Node.js גרסה 16+
   - מחק `node_modules` והרץ `npm install` שוב

2. **בעיות עיצוב**
   - ודא ש-Tailwind CSS מותקן נכון
   - בדוק את `tailwind.config.js`

3. **בעיות SEO**
   - ודא ש-React Helmet Async מותקן
   - בדוק את ה-meta tags ב-`src/components/SEO.jsx`

### יצירת קשר

- **טלפון**: 052-5119685
- **אימייל**: elimzghanna123@gmail.com
- **שעות פעילות**: א׳-ה׳ 08:00-17:00, ו׳ 08:00-14:00

## רישיון

פרויקט זה נוצר עבור נגריית "אלי מזיגית" ומיועד לשימוש מסחרי.

---

**אלי מזיגית - נגרות מקצועית בהתאמה אישית** 🪚
