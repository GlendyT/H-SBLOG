import { ThemeContextProvider } from "@/context/ThemeContext";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import AuthProvider from "@/providers/AuthProvider";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "H&S Stories",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <Navbar />
                <div className="wrapper">
                  {children} <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
