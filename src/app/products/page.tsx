import MeoArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';

const ProductsPage = async () => {
  throw new Error();
  const products = await getProducts();

  return (
    <>
      <h1>About Products</h1>
      <ul>
        {products.map(({ id, name }, idx) => (
          <li key={idx}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeoArticle />
    </>
  );
};
export default ProductsPage;
