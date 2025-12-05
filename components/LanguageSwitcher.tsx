"use client";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language || "en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18next.changeLanguage(lang);
    setSelectedLang(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <label htmlFor="language" className="font-medium">
        🌐 Language:
      </label>
      <select
        id="language"
        value={selectedLang}
        onChange={handleLanguageChange}
        className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
