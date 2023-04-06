import MeoArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import devRabbit from '../../../public/images/dev-dev_hee.png';

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <h1>About Products</h1>
      <Image src={devRabbit} alt='#' />
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
