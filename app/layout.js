import { LanguageProvider } from "@/context/languageContext";
import "./globals.css";
import Header from "@/components/layout/header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
        <Header />
        {children}
        </LanguageProvider>
      </body>
      
    </html>
  );
}
