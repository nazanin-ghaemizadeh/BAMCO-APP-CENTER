# BAMCO APP CENTER

پرتال یکپارچه سامانه‌های سازمانی خودروسازان بم.

## Features
- صفحه ورود زیبا و واکنش‌گرا
- پرتال مرکزی برای انتخاب بین اپ‌های سازمان
- لینک‌دهی به هر اپ روی ریپوی مستقل خودش
- آمادگی برای افزودن اپ‌های بعدی

## Default access
- manager@bamco.ir / 123456
- user@bamco.ir / 123456

## Notes
This is a static GitHub Pages portal. Authentication is currently browser-side and can later be replaced with centralized auth.

## Visual design and local preview

The portal remains a buildless GitHub Pages site. `npm ci` and `npm run dev` provide an optional local Vite preview; deployment still serves the root HTML and assets directly.

The supplied `Bamco-Type2.png` is included unchanged as `bamco-logo-official.png`. Vazirmatn Regular and Bold (v33.003) are self-hosted in `fonts/`, with their SIL Open Font License in `fonts/OFL.txt`. Source: https://github.com/rastikerdar/vazirmatn/tree/v33.003

Responsive checks: Chrome rendering at 320×568, 360×800, 390×844, 430×932, 844×390 and 1366×768; no horizontal overflow. Text enlargement at 200% also checked at 320px. Active links have at least 48px touch targets. Safe-area insets and natural document scrolling support notches and short landscape screens. These checks do not replace testing on physical Android/iOS devices or Safari.
