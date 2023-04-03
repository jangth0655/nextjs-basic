import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3;

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

const ProductPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return (
    <>
      <h1>{product.name} One Product</h1>
    </>
  );
};
export default ProductPage;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
