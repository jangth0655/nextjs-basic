import { getProducts } from '@/service/products';
import Link from 'next/link';

export const revalidate = 3;

const ProductsPage = async () => {
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
    </>
  );
};
export default ProductsPage;
