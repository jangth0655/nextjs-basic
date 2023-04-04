'use client';

import { useEffect, useState } from 'react';

export default function MeoArticle() {
  const [text, setText] = useState('데이터 준비중...');

  const handleFetchArticle = async () => {
    const res = await (await fetch('https://meowfacts.herokuapp.com')).json();
    const factText = res.data[0];
    setText(factText);
  };

  useEffect(() => {
    handleFetchArticle();
  }, []);

  return <article>{text}</article>;
}
