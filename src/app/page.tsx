import Counter from '@/components/Counter';
import Image from 'next/image';

export default function Home() {
  console.log('sever component homePage');
  return (
    <>
      <h1>Hello world!</h1>
      <Counter />
      {/* 
        이렇게 nextjs image를 사용하고 넓이와 높이를 지정해두면
        - 이미지 사이즈 만큼 공간을 마련해두고, (layout shift ❌)
        - 이미지를 최적화 해준다.
        - 가장 중요하여 우선적으로 다운로드하려면 priority를 한다.
      */}
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='#'
        width={400}
        height={400}
        priority
      />
    </>
  );
}
