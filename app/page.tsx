'use client';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n'; // Import from the separate file

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("English");

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    setLanguage(newLang === "en" ? "English" : "中文");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        {t('welcome')}
      </h1>

      <p className="text-lg text-gray-700">
        The language is currently set to <strong>{language}</strong>
      </p>

      <select name='language' onChange={onChange}>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default Home;



// import type { NextPage } from 'next';

// const Home: NextPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold text-blue-600 mb-4">
//         Welcome to My Next.js App!
//       </h1>
//       <p className="text-lg text-gray-700 mb-8">
//         This is a simple webpage built with React, TypeScript, Next.js, and Tailwind CSS.
//       </p>
//       <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default Home;