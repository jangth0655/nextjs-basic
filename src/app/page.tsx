import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <h1>Hello world!</h1>;
}
