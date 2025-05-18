'use client';

import { Product } from '@/constants/product';
import { useState } from 'react';
import { VariantSelector } from './VariantSelector';

export function VariantsGroup({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors[0].value
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <>
      <VariantSelector
        label="Cor"
        type="color"
        options={product.colors}
        selectedValue={selectedColor}
        onSelect={setSelectedColor}
      />
      <VariantSelector
        label="Tamanho"
        type="size"
        options={product.sizes}
        selectedValue={selectedSize}
        onSelect={setSelectedSize}
      />
    </>
  );
}
