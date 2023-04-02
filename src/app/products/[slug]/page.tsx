import Link from 'next/link';

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

const products = ['shirts', 'pants', 'skirt', 'shoes'];

const ProductPage = ({ params }: Props) => {
  return (
    <>
      <h1>{params.slug} One Product</h1>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductPage;

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
