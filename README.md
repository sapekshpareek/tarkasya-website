# Tarkasya - Your Problem, Our Product

A modern, responsive website for Tarkasya, a comprehensive business solutions company specializing in inventory management, website development, and data extraction services.

## 🚀 Features

- **Modern Design**: Clean, professional design with Tarkasya's brand colors (#1d2786 primary, #ff6b35 secondary)
- **Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop
- **Centralized Color System**: Easy color customization through `src/theme/colors.js`
- **Material-UI Components**: Modern UI components with smooth animations
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Careers Page**: Dedicated page for internship opportunities
- **Production Ready**: Optimized for deployment with proper error handling

## 🎨 Brand Identity

### Color Palette
- **Primary**: #1d2786 (Tarkasya Blue)
- **Secondary**: #ff6b35 (Orange Accent)
- **Accent Colors**: 
  - Yellow: #ffd93d
  - Coral: #ff6b6b
  - Mint: #4ecdc4

### Logo Variants
1. White background with #1d2786 text
2. #1d2786 background with #ffe6eb text
3. White background with black text

### Tagline
"Your Problem, Our Product"

## 🛠️ Services

### 1. Inventory Management
- Real-time stock monitoring
- Automated reorder alerts
- Multi-location support
- Analytics and reporting

### 2. Website Development
- Custom responsive design
- SEO optimization
- E-commerce integration
- Content management system

### 3. Data Extraction
- Web scraping automation
- API integration
- Data cleaning & processing
- Custom reporting

## 📁 Project Structure

```
tarkasya-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.js            # Root layout with theme provider
│   │   ├── page.js              # Home page
│   │   ├── not-found.js         # 404 page
│   │   └── careers/
│   │       └── page.js          # Careers page
│   ├── components/
│   │   ├── Header.js            # Navigation header
│   │   ├── Hero.js              # Hero section
│   │   ├── Features.js          # Services showcase
│   │   ├── Highlights.js        # Stats and testimonials
│   │   ├── Footer.js            # Footer with contact info
│   │   └── ThemeRegistry.js     # Material-UI theme provider
│   └── theme/
│       ├── colors.js            # Centralized color palette
│       └── theme.js             # Material-UI theme configuration
├── public/                      # Static assets
├── scripts/
│   └── update-colors.js         # Color theme utility
├── package.json
├── next.config.mjs
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tarkasya-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Changing Colors

The entire website uses a centralized color system. To change colors:

1. **Edit `src/theme/colors.js`**
   ```javascript
   export const colors = {
     primary: {
       main: '#1d2786', // Change this to your primary color
       light: '#3b4bc8',
       dark: '#141f5a',
     },
     secondary: {
       main: '#ff6b35', // Change this to your secondary color
       // ... other colors
     },
   };
   ```

2. **Use the color utility script**
   ```bash
   node scripts/update-colors.js
   ```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.js`
3. Update navigation links in `src/components/Header.js`

### Modifying Content

- **Hero Section**: Edit `src/components/Hero.js`
- **Services**: Edit `src/components/Features.js`
- **Stats/Testimonials**: Edit `src/components/Highlights.js`
- **Contact Info**: Edit `src/components/Footer.js`
- **Careers**: Edit `src/app/careers/page.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 0-600px
- **Tablet**: 600-900px
- **Desktop**: 900px+

## 🔧 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deployment Options

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Traditional Hosting**
   ```bash
   npm run build
   npm run export
   ```

## 🎯 SEO & Performance

### SEO Features
- Meta tags for all pages
- Open Graph tags
- Twitter Card support
- Structured data
- Sitemap generation
- Robots.txt

### Performance Optimizations
- Image optimization
- Code splitting
- Lazy loading
- CSS optimization
- Bundle analysis

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📊 Analytics

The website is ready for analytics integration:
- Google Analytics
- Google Tag Manager
- Facebook Pixel
- Custom event tracking

## 🔒 Security

- HTTPS enforcement
- Content Security Policy
- XSS protection
- CSRF protection
- Secure headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: hello@tarkasya.com
- **Phone**: +1 (234) 567-890
- **Website**: [tarkasya.com](https://tarkasya.com)

## 🚀 Future Enhancements

- [ ] Blog section
- [ ] Case studies
- [ ] Interactive demos
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced analytics dashboard
- [ ] Customer portal
- [ ] API documentation

---

**Built with ❤️ by the Tarkasya Team**
