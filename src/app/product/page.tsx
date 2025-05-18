import { product } from '@/constants/product';
import { Product } from '@/features/product/Product';

export default function ProductPage() {
  return <Product product={product} />;
}
