import { Inter } from "next/font/google";
// import "./globals.css";
import Footer from "@/components/version2/Footer";
import Header from "@/components/version2/Header";
import { CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatsApp Marketing",
  description: "Transforming Conversations into Conversions.",
  icons:{
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon?v=4'],
    shortcut: ['/apple-touch-icon.png']

  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
