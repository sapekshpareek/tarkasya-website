import { Inter } from "next/font/google";
// import "./globals.css";
import Header from "@/components/version1/Header";
import Footer from "@/components/version1/Footer";
import { CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatsApp Marketing",
  description: "Transforming Conversations into Conversions.",
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
