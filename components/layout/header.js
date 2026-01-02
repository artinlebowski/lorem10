"use client";
import { useLanguage } from "@/context/languageContext";

export default function Header() {
  const { lang, setLang } = useLanguage();

  function handleLangChange(event) {
    setLang(event.target.value);
  }

  return (
    <>
      <label htmlFor="lang">زبان را انتخاب کنید:</label>

      <select id="lang" value={lang} onChange={handleLangChange}>
        <option value="fa">fa</option>
        <option value="en">en</option>
      </select>

      <p>language: {lang}</p>
    </>
  );
}
