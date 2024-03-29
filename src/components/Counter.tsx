'use client';

import { useState } from 'react';

export default function Counter() {
  console.log('client component');
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}
