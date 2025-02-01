'use client'
import type { NextPage } from 'next';
import React, { Suspense, useState } from 'react';
import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next, useTranslation } from 'react-i18next';



i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/main.json',
    },
  });

const Home: NextPage = () => {

  const { t } = useTranslation();

  const [language, setLanguage] = useState("English");
  const onChange = (e: any) => {
    i18n.changeLanguage(e.target.value);
    setLanguage((language) => language === "English" ? "中文" : "English");
  };
  
  return (
    <Suspense fallback="loading">
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">


      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        {t('welcome')}
      </h1>


      <p className="text-lg text-gray-700">
        The language is currently se to <strong>{language}</strong>
      </p>


      <select name='language' onChange={onChange}>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>


    </div>
    </Suspense>
  );
};

export default Home;