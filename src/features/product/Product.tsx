'use client';

import { type Product } from '@/constants/product';
import { Gallery } from './Gallery';
import { brl } from '@/utils/brl';
import { VariantsGroup } from './VariantsGroup';
import { CepChecker } from './CepChecker';

export function Product({ product }: { product: Product }) {
  return (
    <div className="flex items-center justify-center h-full mx-auto max-w-7xl">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <Gallery images={product.images} />
        <div className="px-4 py-4 md:py-6 flex flex-col gap-6 max-w-lg">
          <div>
            <h1 className="text-2xl mb-4">{product.name}</h1>
            <span className="text-xl block">
              {brl(product.price, product.currency)}
            </span>
          </div>
          <VariantsGroup product={product} />
          <CepChecker />
        </div>
      </div>
    </div>
  );
}
