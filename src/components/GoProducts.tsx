'use client';

import { useRouter } from 'next/navigation';

const GoProducts = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/products')}>제품페이지로 이동</button>
  );
};

export default GoProducts;
