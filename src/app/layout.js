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
  title: "Tarkasya - Your Problem, Our Product",
  description: "Tarkasya provides comprehensive business solutions including inventory management, website development, and data extraction services. Transform your business challenges into opportunities.",
  keywords: "business solutions, inventory management, website development, data extraction, business automation, digital transformation",
  authors: [{ name: "Tarkasya Team" }],
  creator: "Tarkasya",
  publisher: "Tarkasya",
  robots: "index, follow",
  openGraph: {
    title: "Tarkasya - Your Problem, Our Product",
    description: "Comprehensive business solutions for inventory management, website development, and data extraction.",
    type: "website",
    locale: "en_US",
    siteName: "Tarkasya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarkasya - Your Problem, Our Product",
    description: "Comprehensive business solutions for inventory management, website development, and data extraction.",
  },
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d2786",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
