"use client";
import { useLanguage } from "@/context/languageContext"
export default function Home() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === "fa" && <h3>سلام دنیا</h3>}
      {lang === "en" && <h3>Hello World</h3>}
    </>
  );
}
