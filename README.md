# FCS - Future Consultancy Service

A simple HTML and CSS website. No build step required—just open in a browser or serve with any static file server.

## Structure

```
├── index.html              # Home page
├── about/
│   └── index.html          # About Us page
├── contact/
│   └── index.html          # Contact form & FAQs
├── css/
│   ├── base.css            # Global styles, variables, buttons
│   ├── header.css          # Header & navigation
│   ├── footer.css          # Footer
│   ├── pages.css           # Shared page banner, breadcrumb
│   ├── home.css            # Home page specific
│   ├── about.css           # About page specific
│   └── contact.css         # Contact page specific
├── js/
│   ├── header.js           # Mobile menu, scroll effect
│   ├── hero.js             # Hero slider (home)
│   ├── contact.js          # Contact form, FAQ accordion
│   └── main.js             # Common (e.g. current year)
└── README.md
```

## How to Run

1. **Direct open**: Open `index.html` in a browser (some features may need a local server due to CORS).
2. **Local server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```
3. Navigate to `http://localhost:8000` (or the port shown).

## Features

- **Responsive design** – Works on mobile, tablet, and desktop
- **Hero slider** – Auto-rotating slides on home page
- **FAQ accordion** – Expandable questions on contact page
- **Contact form** – Client-side success message (no backend)
- **WhatsApp float** – Fixed button linking to WhatsApp
- **Dropdown navigation** – Hover menus on desktop, toggle on mobile

## Dependencies

- **Google Fonts** – Poppins
- **Font Awesome 6.5** – Icons (CDN)
- **Swiper 11** – Hero slider (CDN)
- **Unsplash** – Stock images (CDN URLs)
- **Google Maps** – Embed for location

All external resources are loaded via CDN; no npm or package install needed.
