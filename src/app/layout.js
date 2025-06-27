import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CssBaseline } from "@mui/material";
import ThemeRegistry from "@/components/ThemeRegistry";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "Tarkasya - Business Solutions | Inventory Management, Website Development, Data Extraction",
  description: "Transform your business challenges into opportunities with Tarkasya's comprehensive solutions. Specializing in inventory management, website development, and data extraction. Your Problem, Our Product.",
  keywords: [
    "business solutions",
    "inventory management",
    "website development", 
    "data extraction",
    "business automation",
    "digital transformation",
    "enterprise software",
    "web scraping",
    "inventory tracking",
    "e-commerce solutions",
    "business intelligence",
    "data analytics",
    "custom software development",
    "business process automation",
    "Tarkasya"
  ].join(", "),
  authors: [{ name: "Tarkasya Team" }],
  creator: "Tarkasya",
  publisher: "Tarkasya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tarkasya.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tarkasya - Business Solutions | Your Problem, Our Product",
    description: "Transform your business challenges into opportunities with Tarkasya's comprehensive solutions. Specializing in inventory management, website development, and data extraction.",
    url: "https://tarkasya.in",
    siteName: "Tarkasya",
    images: [
      {
        url: "/Logo/Tarkasya Logo Blue.png",
        width: 1200,
        height: 630,
        alt: "Tarkasya - Business Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarkasya - Business Solutions | Your Problem, Our Product",
    description: "Transform your business challenges into opportunities with Tarkasya's comprehensive solutions.",
    images: ["/Logo/Tarkasya Logo Blue.png"],
    creator: "@tarkasya",
    site: "@tarkasya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Business Solutions",
  other: {
    "msapplication-TileColor": "#1d2786",
    "theme-color": "#1d2786",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Tarkasya",
    "application-name": "Tarkasya",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport = {
  themeColor: "#1d2786",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Tarkasya Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#1d2786" />
        <meta name="msapplication-TileColor" content="#1d2786" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tarkasya" />
        <meta name="application-name" content="Tarkasya" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tarkasya",
              "url": "https://tarkasya.in",
              "logo": "https://tarkasya.in/Logo/Tarkasya Logo Blue.png",
              "description": "Transform your business challenges into opportunities with Tarkasya's comprehensive solutions. Specializing in inventory management, website development, and data extraction.",
              "slogan": "Your Problem, Our Product",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-234-567-890",
                "contactType": "customer service",
                "email": "info@tarkasya.in"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global",
                "addressLocality": "Remote First"
              },
              "sameAs": [
                "https://linkedin.com/company/tarkasya",
                "https://twitter.com/tarkasya",
                "https://github.com/tarkasya"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 0,
                  "longitude": 0
                },
                "geoRadius": "20000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Business Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Inventory Management",
                      "description": "Streamline your business operations with intelligent inventory tracking and management solutions."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Development",
                      "description": "Create stunning, responsive websites that convert visitors into customers with modern technologies."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Data Extraction",
                      "description": "Automate data collection from websites and transform raw information into actionable insights."
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>
          <CssBaseline />
          <div className="app-container">
            <Header />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
