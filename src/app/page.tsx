import Counter from '@/components/Counter';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('sever component homePage');
  return (
    <>
      <h1>Hello world!</h1>
      <Counter />
    </>
  );
}
